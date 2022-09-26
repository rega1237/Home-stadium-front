import axios from 'axios';
import { BASE_URL } from '../../API/api_config';

// ACTIONS
export const GET_RESERVATIONS = 'FRONT-END/RESERVATIONS-REDUCER/GET_RESERVATIONS';
export const GET_RESERVATIONS_SUCCESS = 'FRONT-END/RESERVATIONS-REDUCER/GET_RESERVATIONS_SUCCESS';
export const GET_RESERVATIONS_FAILURE = 'FRONT-END/RESERVATIONS-REDUCER/GET_RESERVATIONS_FAILURE';
export const RESET_RESERVATIONS = 'FRONT-END/RESERVATIONS-REDUCER/RESET_RESERVATIONS';

// Action Creators

const resetReservations = () => ({
  type: RESET_RESERVATIONS,
});

const getReservations = () => ({
  type: GET_RESERVATIONS,
});

const getReservationsSuccess = (items) => ({
  type: GET_RESERVATIONS_SUCCESS,
  payload: items,
});

const getReservationsFailure = () => ({
  type: GET_RESERVATIONS_FAILURE,
});

// Thunk
const fetchReservations = (user) => async (dispatch) => {
  dispatch(getReservations());
  let reservations = [];
  try {
    const response = await axios.get(`${BASE_URL}users/${user.id}/reservations`, {
      headers: {
        Authorization: user.token,
      },
    });
    reservations = response.data;
    dispatch(getReservationsSuccess(reservations));
  } catch (error) {
    dispatch(getReservationsFailure());
  }
};

// Initial State
const initialState = {
  reservations: [],
};

// Reducer
const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
      };
    case GET_RESERVATIONS_SUCCESS:
      return {
        reservations: action.payload,
      };
    case RESET_RESERVATIONS:
      return {
        reservations: initialState,
      };
    case GET_RESERVATIONS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reservationsReducer;

export {
  fetchReservations,
  resetReservations,
  getReservations,
  getReservationsSuccess,
  getReservationsFailure,
};
