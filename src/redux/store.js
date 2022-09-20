import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homereducer/homereducer';
import stadiumReducer from './stadiumReducer/StadiumReducer';
import reservationsReducer from './reservationsReducer/ReservationsReducer';

const store = configureStore({
  reducer: {
    home: homeReducer,
    stadium: stadiumReducer,
    reservations: reservationsReducer,
  },
});

export default store;
