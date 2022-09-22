import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import homeReducer from './homereducer/homereducer';
import stadiumReducer from './stadiumReducer/StadiumReducer';
import reservationsReducer from './reservationsReducer/ReservationsReducer';
import usersReducer from './usersReducer/usersReducer';
import selectedGameReducer from './selectedGameReducer/SelectedGameReducer';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const reducers = combineReducers({
<<<<<<< HEAD
  home: homeReducer,
  stadium: stadiumReducer,
  reservations: reservationsReducer,
  users: usersReducer,
=======
    home: homeReducer,
    stadium: stadiumReducer,
    reservations: reservationsReducer,
    selectedGame: selectedGameReducer,
    users: usersReducer,
>>>>>>> fb16c0d62e24826e3479b2a3893d5658b28d1c59
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMiddleware,
  },
});

export default store;
