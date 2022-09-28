import axios from 'axios';
import { BASE_URL } from '../../API/api_config';

// ACTIONS
export const GET_ITEMS = 'FRONT-END/HOME-REDUCER/GET_ITEMS';
export const GET_ITEMS_SUCCESS = 'FRONT-END/HOME-REDUCER/GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'FRONT-END/HOME-REDUCER/GET_ITEMS_FAILURE';
export const DELETE_ITEM = 'FRONT-END/HOME-REDUCER/DELETE_ITEM';

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

const deleteItemSuccess = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

// Thunk
const fetchItems = (token) => async (dispatch) => {
  dispatch(getItems());
  let items = [];
  try {
    const response = await axios.get(`${BASE_URL}stadiums`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    items = response.data;
    dispatch(getItemsSuccess(items));
  } catch (error) {
    dispatch(getItemsFailure());
  }
};

const deleteItem = (id, token) => async (dispatch) => {
  try {
    await axios.delete(`${BASE_URL}stadiums/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(deleteItemSuccess(id));
  } catch (error) {
    console.log(error);
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
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
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
  deleteItem,
};
