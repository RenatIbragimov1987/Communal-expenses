import './Login.css';
import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

function Login({ closeModal, isPopupOpen, isRegistration }) {
  return (
    <CSSTransition
      in={isPopupOpen}
      timeout={700}
      classNames="popupLog"
      unmountOnExit
    >
      <div className="login__background-blackout">
        <form className="login__block">
          <fieldset className="login__content">
            <h1 className="login__title">
              {isRegistration ? 'Регистрация' : 'Авторизация'}
            </h1>

            <div className="login__field">
              <label htmlFor="eml"> почта:</label>
              <input className="login__email" type="email" id="eml" required />
            </div>
            <div className="login__field">
              <label htmlFor="psw"> пароль:</label>
              <input
                className="login__password"
                type="password"
                id="psw"
                required
              />
            </div>
          </fieldset>
          <div className="login__btn">
            <button className="login__btn-up">
              {isRegistration ? 'Зарегестрироваться' : 'Вход'}
            </button>
          </div>
          <button
            className="login__block-close"
            type="button"
            onClick={closeModal}
          ></button>
        </form>
      </div>
    </CSSTransition>
  );
}

export default Login;
