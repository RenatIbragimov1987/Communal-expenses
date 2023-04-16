import './App.css';
// import './components/Main/Main.css';
import './vendor/font.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import MONTHS from './utils/utils.js';
import BASE_URL from './utils/addressApi.js';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isRegistration, setIsRegistration] = useState(true);
  const [isCards, setIsCards] = useState([]);
  const [isTogleCheckbox, setIsTogleCheckbox] = useState(false);

	
  // const togleChecked = () => {
  // 	setIsTogleCheckbox(!isTogleCheckbox)
  // }

  const openModal = () => {
    setIsPopupOpen(true);
  };

  const closeModal = () => {
    setIsPopupOpen(false);
  };

  const openModalReg = () => {
    setIsRegistration(true);
    openModal();
  };

  const openModalLog = () => {
    setIsRegistration(false);
    openModal();
  };

  return (
    <div className="page">
      <Header openModalReg={openModalReg} openModalLog={openModalLog} />
      <Login
        isPopupOpen={isPopupOpen}
        closeModal={closeModal}
        isRegistration={isRegistration}
      />
      <div className="main">
        <Main
          month={MONTHS}
          setIsTogleCheckbox={setIsTogleCheckbox}
          isTogleCheckbox={isTogleCheckbox}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
