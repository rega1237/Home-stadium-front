import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import homeReducer from './homereducer/homereducer';
import stadiumReducer from './stadiumReducer/StadiumReducer';
import reservationsReducer from './reservationsReducer/ReservationsReducer';
import usersReducer from './usersReducer/usersReducer';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const reducers = combineReducers({
  home: homeReducer,
  stadium: stadiumReducer,
  reservations: reservationsReducer,
  users: usersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
});

export default store;
