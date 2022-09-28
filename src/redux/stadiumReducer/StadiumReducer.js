import axios from 'axios';
import { BASE_URL } from '../../API/api_config';

// ACTIONS
export const GET_STADIUM = 'FRONT-END/STADIUM-REDUCER/GET_STADIUM';
export const GET_STADIUM_SUCCESS = 'FRONT-END/STADIUM-REDUCER/GET_STADIUM_SUCCESS';
export const GET_STADIUM_FAILURE = 'FRONT-END/STADIUM-REDUCER/GET_STADIUM_FAILURE';

// Action Creators

const getStadium = () => ({
  type: GET_STADIUM,
});

const getStadiumSuccess = (items) => ({
  type: GET_STADIUM_SUCCESS,
  payload: items,
});

const getStadiumFailure = () => ({
  type: GET_STADIUM_FAILURE,
});

// Thunk
const fetchStadium = (token, stadiumId) => async (dispatch) => {
  dispatch(getStadium());
  let stadium = {};
  try {
    const response = await axios.get(`${BASE_URL}stadiums/${stadiumId}`, {
      headers: {
        Authorization: token,
      },
    });
    stadium = response.data;
    dispatch(getStadiumSuccess(stadium));
  } catch (error) {
    dispatch(getStadiumFailure());
  }
};

// Initial State
const initialState = {
  stadium: {},
};

// Reducer
const stadiumReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STADIUM:
      return {
        ...state,
      };
    case GET_STADIUM_SUCCESS:
      return {
        ...state,
        stadium: action.payload,
      };
    case GET_STADIUM_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default stadiumReducer;

export {
  fetchStadium,
  getStadium,
  getStadiumSuccess,
  getStadiumFailure,
};
