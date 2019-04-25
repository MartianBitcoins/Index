// import axios from 'axios';
import API from '../api/index';

export const LOAD_COINS_LIST = 'LOAD_COINS_LIST';
export const CREATE_COINS = 'CREATE_COINS';
export const DELETE_COINS = 'DELETE_COINS';

// const BASE_URL = 'http://localhost:3000';

export async function loadCoinsList(callback) {
  console.log('loadCoinsList');
  await API.get('/api/coins').then(
    (response) => {
      if (response.success) {
        console.log(response);
        return callback(response);
      }
      return response;
    },
  );
}

export async function createCoins(data, callback) {
  const formData = new FormData();
  // eslint-disable-next-line array-callback-return
  const objData = JSON.parse(JSON.stringify(data));
  // eslint-disable-next-line no-restricted-syntax
  for (const clave in objData) {
    // Controlando que json realmente tenga esa propiedad
    // eslint-disable-next-line no-prototype-builtins
    if (objData.hasOwnProperty(clave)) {
      // Mostrando en pantalla la clave junto a su valor
      // eslint-disable-next-line max-len
      formData.append(clave, objData[clave]);
      // console.log(`La clave es ${clave} y el valor es ${objData[clave]}`);
    }
  }
  await API.post('/api/coins', data).then(
    response => (
      callback(response)
    ),
  );
}

export async function deleteCoin(coinId, callback) {
  console.log('Delete');
  await API.delete(`/api/coins/${coinId}`).then(
    (response) => {
      if (response.success) {
        return callback(response);
      }
      return response;
    },
  );
}
