import axios from 'axios';
import { BASE_URL } from './api_config';

const reserveGame = async (user, gameId, seats) => {
  let response = '';
  try {
    response = await axios.post(`${BASE_URL}users/${user.user_id}/reservations`, {
      reservation: {
        game_id: gameId,
        reserved_seats: seats,
      },
    },
    {
      headers: {
        Authorization: user.token,
      },
    });
    return {
      state: true,
      response,
    };
  } catch (error) {
    return {
      state: false,
      response: error.response.data,
    };
  }
};

const misc = () => {
  console.log(2);
};

export {
  reserveGame,
  misc,
};
