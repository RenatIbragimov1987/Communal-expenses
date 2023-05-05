import BASE_URL from './BASE_URL';

class Api {
  constructor({ address }) {
    this._address = address;
  }

  // возвращаем результат работы метода
  _checkStatus = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  // загрузка данных карточек с сервера
  loadingCardData() {
    return fetch(`${this._address}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkStatus(res))
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
      });
  }

  addNewCardData({
    electricity,
    gas,
    hotwater,
    coldwater,
    caprepair,
    heating,
    sum,
  }) {
    return fetch(`${this._address}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        electricity,
        gas,
        hotwater,
        coldwater,
        caprepair,
        heating,
        sum,
      }),
    })
      .then((res) => this._checkStatus(res))
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
      });
  }
}

const api = new Api({
  address: BASE_URL,
});

export default api;
