import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homereducer/homereducer';
import stadiumReducer from './stadiumReducer/StadiumReducer';

const store = configureStore({
  reducer: {
    home: homeReducer,
    stadium: stadiumReducer,
  },
});

export default store;
