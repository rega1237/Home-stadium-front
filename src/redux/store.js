import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homereducer/homereducer';
import stadiumReducer from './stadiumReducer/StadiumReducer';
import reservationsReducer from './reservationsReducer/ReservationsReducer';
import userReducer from './usersReducer/usersReducer';

const store = configureStore({
  reducer: {
    home: homeReducer,
    stadium: stadiumReducer,
    reservations: reservationsReducer,
    user: userReducer,
  },
});

export default store;
