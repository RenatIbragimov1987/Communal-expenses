import './Card.css';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Api from '../../utils/Api.js';

function Card({ card, index, month, isCardsData, setIsCardsData }) {


  const [isTogleCheckbox, setIsTogleCheckbox] = useState(false);

  const [isCardsValueElectricity, setIsCardsValueElectricity] = useState(card.electricity);
  const [isCardsValueGas, setIsCardsValueGas] = useState(card.gas);
  const [isCardsValueHotwater, setIsCardsValueHotwater] = useState(card.hotwater);
  const [isCardsValueColdwater, setIsCardsValueColdwater] = useState(card.coldwater);
  const [isCardsValueCaprepair, setIsCardsValueCaprepair] = useState(card.caprepair);
  const [isCardsValueHeating, setIsCardsValueHeating] = useState(card.heating);
  const [isCardsValueSum, setIsCardsValueSum] = useState(card.sum);

	console.log(isCardsValueElectricity);
  

  const handleChangeElectricity = (event) => {
    event.preventDefault();
    setIsCardsValueElectricity(event.target.value);
  };
  const handleChangeGas = (event) => {
    event.preventDefault();
    setIsCardsValueGas(event.target.value);
  };
  const handleChangeHotwater = (event) => {
    event.preventDefault();
    setIsCardsValueHotwater(event.target.value);
  };
  const handleChangeColdwater = (event) => {
    event.preventDefault();
    setIsCardsValueColdwater(event.target.value);
  };
  const handleChangeCaprepair = (event) => {
    event.preventDefault();
    setIsCardsValueCaprepair(event.target.value);
  };
  const handleChangeHeating = (event) => {
    event.preventDefault();
    setIsCardsValueHeating(event.target.value);
  };
  const handleChangeSum = (event) => {
    event.preventDefault();
    setIsCardsValueSum(event.target.value);
  };

  const addCardData = async (cardId, data) => {
    try {
			const res = await Api.addNewCardData(cardId, data);
			setIsCardsData(res);
		} catch (error) {
			console.error(error);
		}
  };

  const onChangeHandler = (evt) => {
		evt.preventDefault();
		const cardId = card._id;
		const newData = {
			electricity: isCardsValueElectricity,
			gas: isCardsValueGas,
			hotwater: isCardsValueHotwater,
			coldwater: isCardsValueColdwater,
			caprepair: isCardsValueCaprepair,
			heating: isCardsValueHeating,
			sum: isCardsValueSum,
		};
		
		addCardData(cardId, newData);
  };
// console.log(card.electricity);

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
          onSubmit={onChangeHandler}
        >
          <fieldset className="card__list-fieldset">
            <ul className="card__list-services">
              <li className="card__services">
                <label htmlFor="electricity" className="card__label-services">
                  эллектричество:
                </label>

                <input
                  key={index}
                  type="number"
                  name="electricity"
                  id="electricity"
                  className="card__input-services"
                  onChange={handleChangeElectricity}
                  defaultValue={card.electricity}
                />
              </li>

              <li className="card__services">
                <label htmlFor="gas" className="card__label-services">
                  газ:
                </label>

                <input
                  key={index}
                  type="number"
                  name="gas"
                  id="gas"
                  className="card__input-services"
                  onChange={handleChangeGas}
                  defaultValue={card.gas}
                />
              </li>
              <li className="card__services">
                <label htmlFor="hot-water" className="card__label-services">
                  горячая вода:
                </label>

                <input
                  key={index}
                  type="number"
                  name="hotwater"
                  id="hotwater"
                  className="card__input-services"
                  onChange={handleChangeHotwater}
                  defaultValue={card.hotwater}
                />
              </li>
              <li className="card__services">
                <label htmlFor="cold-water" className="card__label-services">
                  холодная вода:
                </label>

                <input
                  key={index}
                  type="number"
                  name="coldwater"
                  id="coldwater"
                  className="card__input-services"
                  onChange={handleChangeColdwater}
                  defaultValue={card.coldwater}
                />
              </li>
              <li className="card__services">
                <label htmlFor="cap-repair" className="card__label-services">
                  кап-ремонт:
                </label>

                <input
                  key={index}
                  type="number"
                  name="caprepair"
                  id="caprepair"
                  className="card__input-services"
                  onChange={handleChangeCaprepair}
                  defaultValue={card.caprepair}
                />
              </li>
              <li className="card__services">
                <label htmlFor="heating" className="card__label-services">
                  отопление:
                </label>

                <input
                  key={index}
                  type="number"
                  name="heating"
                  id="heating"
                  className="card__input-services"
                  onChange={handleChangeHeating}
                  defaultValue={card.heating}
                />
              </li>

              <li className="card__services">
                <label htmlFor="sum" className="card__label-services">
                  итого сумма:
                </label>

                <input
                  key={index}
                  type="number"
                  name="sum"
                  id="sum"
                  className="card__input-services"
                  onChange={handleChangeSum}
                  defaultValue={card.sum}
                />
              </li>
              <button
                type="submit"
                className="card__list-saveBtn"
              >
                Сохранить
              </button>
            </ul>
          </fieldset>
        </form>
      </CSSTransition>
    </li>
  );
}

export default Card;
