import {
  LOAD_COINS_LIST,
  CREATE_COINS,
} from '../actions/coinsAtions';

const initialState = {
  coins: [],
  coinsLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_COINS_LIST:
      return {
        ...state,
        coins: state.coins,
        coinsLoading: state.coinsLoading,
      };
    case CREATE_COINS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
