import axios from 'axios';
import { BASE_URL } from '../../API/api_config';
import { fetchStadium } from '../stadiumReducer/StadiumReducer';

const ADD_GAME = 'STADIUM/ADD_GAME';

const addGame = (game) => ({
  type: ADD_GAME,
  payload: game,
});

// Thunk

const createGame = (token, id, gameData) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}stadiums/${id}/games`, { game: gameData }, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(addGame(response.data));
    dispatch(fetchStadium(token, id));
  } catch (error) {
    console.log('error');
  }
};

// Initial State
const initialState = {
  games: [],
};

// Reducer

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    default:
      return state;
  }
};

export default gamesReducer;

export {
  createGame,
  addGame,
};
