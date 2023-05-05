import './Card.css';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

function Card({ card, index, month, isCardsData, addCardData }) {
  const [isTogleCheckbox, setIsTogleCheckbox] = useState(false);
  const [isCardsValue, setIsCardsValue] = useState('');

  const onHandler = (evt) => {
    evt.preventDefault();
    setIsCardsValue(evt.target.value);
  };

  const onChangeHandler = (evt) => {
    evt.preventDefault();
    addCardData({
			"electricity": isCardsData.electricity,
			"gas": isCardsData.gas,
			"hotwater": isCardsData.hotwater,
			"coldwater": isCardsData.coldwater,
			"caprepair": isCardsData.caprepair,
			"heating": isCardsData.heating,
			"sum": isCardsData.sum,
		}
		);
  }; // слушатель ввода данных в полях input карточек

console.log(isCardsData);

  return (
    <li className="card__content">
      <div className="card__name-month">
        <div className="card__expand">
          <h1 className="card__name-title">{month}</h1>
        </div>
        <input
          id={`expand-${month}`}
          type="checkbox"
          name="checkbox-expand"
          className="input__checked"
          onClick={() => setIsTogleCheckbox(!isTogleCheckbox)}
        ></input>
        <label htmlFor={`expand-${month}`} className="card__label">
          <img
            src={
              isTogleCheckbox
                ? '/images/expand_less.svg'
                : '/images/expand_more.svg'
            }
            alt="logotyp"
            className="card__btn-img"
          ></img>
        </label>
      </div>
      <CSSTransition
        in={isTogleCheckbox}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <form
          className="card__list-form"
          name="form"
          onChange={onHandler}
        >
          <fieldset className="card__list-fieldset">
            <ul className="card__list-services">
              <li className="card__services">
                <label htmlFor="electricity" className="card__label-services">
                  эллектричество:
                </label>
                <input
                  type="number"
                  name="electricity"
                  id="electricity"
                  className="card__input-services"
                  // defaultValue={isCardsData ? isCardsData.electricity : ''}
                />
              </li>
              <li className="card__services">
                <label htmlFor="gas" className="card__label-services">
                  газ:
                </label>
                <input
                  type="number"
                  name="gas"
                  id="gas"
                  className="card__input-services"
                  // defaultValue={isCardsData ? isCardsData.gas : ''}
                />
              </li>
              <li className="card__services">
                <label htmlFor="hot-water" className="card__label-services">
                  горячая вода:
                </label>
                <input
                  type="number"
                  name="hot-water"
                  id="hot-water"
                  className="card__input-services"
                  // defaultValue={isCardsData ? isCardsData.hotwater : ''}
                />
              </li>
              <li className="card__services">
                <label htmlFor="cold-water" className="card__label-services">
                  холодная вода:
                </label>
                <input
                  type="number"
                  name="cold-water"
                  id="cold-water"
                  className="card__input-services"
                  // defaultValue={isCardsData ? isCardsData.coldwater : ''}
                />
              </li>
              <li className="card__services">
                <label htmlFor="cap-repair" className="card__label-services">
                  кап-ремонт:
                </label>
                <input
                  type="number"
                  name="cap-repair"
                  id="cap-repair"
                  className="card__input-services"
                  // defaultValue={isCardsData ? isCardsData.caprepair : ''}
                />
              </li>
              <li className="card__services">
                <label htmlFor="heating" className="card__label-services">
                  отопление:
                </label>
                <input
                  type="number"
                  name="heating"
                  id="heating"
                  className="card__input-services"
                  // defaultValue={isCardsData ? isCardsData.heating : ''}
                />
              </li>

              <li className="card__services">
                <label htmlFor="sum" className="card__label-services">
                  итого сумма:
                </label>
                <input
                  type="number"
                  name="sum"
                  id="sum"
                  className="card__input-services"
                  // defaultValue={isCardsData ? isCardsData.sum : ''}
                />
              </li>
              <button type="submit" className="card__list-saveBtn" onChange={onChangeHandler}>
                сохранить
              </button>
            </ul>
          </fieldset>
        </form>
      </CSSTransition>
    </li>
  );
}

export default Card;
