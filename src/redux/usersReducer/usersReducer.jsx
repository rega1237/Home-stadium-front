import axios from 'axios';

// actions
const SIGN_IN_SUCCESS = 'USER/SIGN_IN_SUCCESS';
const SIGN_IN_FAILURE = 'USER/SIGN_IN_FAILURE';
const GET_USER = 'USER/GET_USER';
const LOG_OUT = 'USER/LOG_OUT';

// action creators

const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

const getUser = () => ({
  type: GET_USER,
});

const logout = () => ({
  type: LOG_OUT,
});

const fetchLogIn = (user) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', { username: user });
    dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInFailure(error));
  }
};

// initial state
const initialState = {
  user: {
    login: false,
  },

};

// reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        login: true,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_USER:
      return {
        ...state,
      };
    case LOG_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default usersReducer;

export {
  fetchLogIn,
  getUser,
  logout,
};
