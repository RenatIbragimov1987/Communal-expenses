import BASE_URL from './BASE_URL';

class Api {
  constructor({ address }) {
    this._address = address;
  }

  // возвращаем результат работы метода
  _checkStatus = (res) => {
		console.log(res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  // загрузка данных карточек с сервера
  async loadingCardData() {
    return await fetch(`${this._address}`, {
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

  addNewCardData(_id, data) {
    return fetch(`${this._address}/${_id}/dataId`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
			body: JSON.stringify(data),
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
