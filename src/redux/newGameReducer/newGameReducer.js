import axios from 'axios';

const GET_GAMES = 'STADIUM/GET_GAMES';
const GET_GAMES_SUCCESS = 'STADIUM/GET_GAMES_SUCCESS';
const GET_GAMES_FAILURE = 'STADIUM/GET_GAMES_FAILURE';
const ADD_GAME = 'STADIUM/ADD_GAME';

const getGames = (id) => ({
  type: GET_GAMES,
  payload: id,
});

const getGamesSuccess = (games) => ({
  type: GET_GAMES_SUCCESS,
  payload: games,
});

const getGamesFailure = () => ({
  type: GET_GAMES_FAILURE,
});

const addGame = (game) => ({
  type: ADD_GAME,
  payload: game,
});

// Thunk

const fetchGames = (token, id) => async (dispatch) => {
  dispatch(getGames());
  let games = [];
  try {
    const response = await axios.get(`http://localhost:3001/stadium/${id}/games`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    games = response.data;
    dispatch(getGamesSuccess(games));
  } catch (error) {
    dispatch(getGamesFailure());
  }
};

const createGame = (token, id, game) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3001/stadium/${id}/games`, game, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addGame(response.data));
  } catch (error) {
    console.log(error);
  }
}

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
}