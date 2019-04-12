// import axios from 'axios';
import API from '../api/index';

export const LOAD_COINS_LIST = 'LOAD_COINS_LIST';
export const CREATE_COINS = 'CREATE_COINS';

// const BASE_URL = 'http://localhost:3000';

export async function loadCoinsList(callback) {
  await API.get('/v1/api/coins').then(
    (response) => {
      if (response.success) {
        return callback(response);
      }
      return response;
    },
  );
}
export async function createCoins(data, callback) {
  // console.log(data, 'VALOR LLEGANDO');
  await API.post('/v1/api/coins', data).then(
    response => (
      callback(response)
    ),
  );
}
