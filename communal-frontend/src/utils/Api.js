// class Api {
//   constructor({ address }) {
//     this._address = address;
//   }

  //возвращаем результат работы метода
  // _checkStatus = (res) => {
  //   if (res.ok) {
  //     return res.json();
  //   }
  //   return Promise.reject(`Error: ${res.status}`);
  // };

  // загрузка фильмов с сервера
//   loadingCardData() {
//     return fetch(`${this._address}`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     }).then((res) => this._checkStatus(res));
//   }
// }

// const api = new Api({
//   address: 'mongodb://localhost:27017/communaldb',
// });

// export default api;
