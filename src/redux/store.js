import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from './homereducer/homereducer';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  middleware: [...logger],
});

export default store;
