import axios from 'axios';

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
const fetchStadium = () => async (dispatch) => {
  dispatch(getStadium());
  let items = [];
  try {
    const response = await axios.get('http://localhost:3000/stadium');
    items = response.data;
    dispatch(getStadiumSuccess(items));
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
