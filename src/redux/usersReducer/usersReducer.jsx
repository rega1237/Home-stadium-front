import axios from 'axios';

//actions
const SIGN_IN_SUCCESS = 'USER/SIGN_IN_SUCCESS';
const SIGN_IN_FAILURE = 'USER/SIGN_IN_FAILURE';
const GET_USER = 'USER/GET_USER';

//action creators

const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

const getUser = () => ({
  type: GET_USER
});

const fetchLogIn = (user) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', { username: user });
    console.log(response.data);
    dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInFailure(error));
  }
};

//initial state
const initialState = {
  user: {},
};

//reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case GET_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};




export default usersReducer;

export { 
  fetchLogIn,
  getUser 
};