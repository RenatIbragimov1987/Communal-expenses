import './App.css';
// import './components/Main/Main.css';
import './vendor/font.css';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import MONTHS from './utils/utils.js';
// import BASE_URL from './utils/addressApi.js';
import Api from './utils/Api.js';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRegistration, setIsRegistration] = useState(true);
  const [isTogleCheckbox, setIsTogleCheckbox] = useState(false);
  const [isCardsData, setIsCardsData] = useState([]);

  useEffect(() => {
    try {
      const cardsData = JSON.parse(localStorage.getItem('foundCardLoc'));
      setIsCardsData(cardsData);
    } catch (error) {
      console.error(error);
    }

    const handleStorage = (event) => {
      if (event.key === 'foundCardLoc') {
        try {
          const cardsData = JSON.parse(event.newValue);
          setIsCardsData(cardsData);
        } catch (error) {
          console.error(error);
        }
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  useEffect(() => {
    Api.loadingCardData().then((data) => {
      localStorage.setItem('foundCardLoc', JSON.stringify(data));
    });
  }, [isCardsData]);

  // useEffect(() => {
  // 	const cardsData = JSON.parse(localStorage.getItem('foundCardLoc'));
  // 	setIsCardsData(cardsData);
  // }, []);

  const openModal = () => {
    setIsPopupOpen(true);
  }; // открытие карточки

  const closeModal = () => {
    setIsPopupOpen(false);
  }; // закрытие карточки

  const openModalReg = () => {
    setIsRegistration(true);
    openModal();
  }; // открытие формы регистрации

  const openModalLog = () => {
    setIsRegistration(false);
    openModal();
  }; // открытие формы входа

  return (
    <div className="page">
      <Header openModalReg={openModalReg} openModalLog={openModalLog} />
      <Login
        isPopupOpen={isPopupOpen}
        closeModal={closeModal}
        isRegistration={isRegistration}
      />
      <Main
        month={MONTHS}
        setIsTogleCheckbox={setIsTogleCheckbox}
        isTogleCheckbox={isTogleCheckbox}
        isCardsData={isCardsData}
        // isCardsValue={isCardsValue}
        // handleChange={handleChange}
        // onChangeHandler={onChangeHandler}
        // addCardData={addCardData}
        setIsCardsData={setIsCardsData}
      />
      <Footer />
    </div>
  );
}

export default App;
