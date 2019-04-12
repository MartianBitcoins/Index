import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { sidebarReducer, themeReducer, coinsReducer } from '../../redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  coins: coinsReducer,
});

const logger = store => next => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const store = createStore(reducer, applyMiddleware(logger));

// export default createStore(reducer, {cart: [], products: []}, applyMiddleware(logger))


export default store;
