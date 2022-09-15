import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homereducer/homereducer';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
