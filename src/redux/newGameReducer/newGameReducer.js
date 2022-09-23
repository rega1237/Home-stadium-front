import axios from 'axios';
import { fetchStadium } from '../stadiumReducer/StadiumReducer';

const ADD_GAME = 'STADIUM/ADD_GAME';

const addGame = (game) => ({
  type: ADD_GAME,
  payload: game,
});

// Thunk

const createGame = (token, id, game) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3000/stadiums/${id}/games`, { game: game }, {
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
    case GET_GAMES:
      return {
        ...state,
      };
    case GET_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload,
      };
    case GET_GAMES_FAILURE:
      return {
        ...state,
      };
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
  fetchGames,
  createGame,
  addGame,
};
