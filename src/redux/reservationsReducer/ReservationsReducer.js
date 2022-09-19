import axios from 'axios';

// ACTIONS
export const GET_RESERVATIONS = 'FRONT-END/RESERVATIONS-REDUCER/GET_RESERVATIONS';
export const GET_RESERVATIONS_SUCCESS = 'FRONT-END/RESERVATIONS-REDUCER/GET_RESERVATIONS_SUCCESS';
export const GET_RESERVATIONS_FAILURE = 'FRONT-END/RESERVATIONS-REDUCER/GET_RESERVATIONS_FAILURE';

// Action Creators

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
const fetchReservations = () => async (dispatch) => {
  dispatch(getReservations());
  let reservations = [];
  try {
    const response = await axios.get('http://localhost:3000/reservations');
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
        ...state,
        items: action.payload,
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
  getReservations,
  getReservationsSuccess,
  getReservationsFailure,
};
