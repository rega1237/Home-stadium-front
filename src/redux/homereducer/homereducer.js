import axios from 'axios';

// ACTIONS
export const GET_ITEMS = 'FRONT-END/HOME-REDUCER/GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'FRONT-END/HOME-REDUCER/GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'FRONT-END/HOME-REDUCER/GET_ITEMS_FAILURE';

// Action Creators

const getItems = () => ({
  type: GET_ITEMS,
});

const getItemsSuccess = (items) => ({
  type: GET_ITEMS_SUCCESS,
  payload: items,
});

const getItemsFailure = () => ({
  type: GET_ITEMS_FAILURE,
});

// Thunk
const fetchItems = () => async (dispatch) => {
  dispatch(getItems());
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const items = response.data.item;
    dispatch(getItemsSuccess(items));
  } catch (error) {
    dispatch(getItemsFailure());
  }
};

// Initial State
const initialState = {
  items: [],
};

// Reducer
const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_ITEMS_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default homeReducer;

export {
  fetchItems,
  getItems,
  getItemsSuccess,
  getItemsFailure,
};
