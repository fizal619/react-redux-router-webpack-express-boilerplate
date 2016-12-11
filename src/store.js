import { createStore } from 'redux';
// import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducers';

const store = createStore(reducer);

export default store;
