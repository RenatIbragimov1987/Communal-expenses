/* eslint-disable jsx-a11y/no-distracting-elements */
import './Header.css';
import React from 'react';
// import { Link } from 'react-router-dom';

function Header({ openModalReg, openModalLog }) {
  return (
    <header className="header__block">
      <img src="/images/logo.png" alt="logotyp" className="header__logo"></img>
      <div className="header__animation">
        <marquee
          className="header__marquee"
          behavior="scroll"
          direction="right"
          width="auto"
        >
          <img
            src="/images/icons/heater.png"
            alt="logotyp"
            className="header__logo-png"
          ></img>

          <img
            src="/images/icons/idea.png"
            alt="logotyp"
            className="header__logo-png"
          ></img>

          <img
            src="/images/icons/lightning.png"
            alt="logotyp"
            className="header__logo-png"
          ></img>

          <img
            src="/images/icons/taps.png"
            alt="logotyp"
            className="header__logo-png"
          ></img>

          <img
            src="/images/icons/tap.png"
            alt="logotyp"
            className="header__logo-png"
          ></img>

          <img
            src="/images/icons/water.png"
            alt="logotyp"
            className="header__logo-png"
          ></img>
        </marquee>
      </div>

      <nav className="header__authentication">
        <button className="header__regist" onClick={openModalReg}>
          Регистрация
        </button>
        <button className="header__login" onClick={openModalLog}>
          Войти
        </button>
      </nav>
    </header>
  );
}

export default Header;
