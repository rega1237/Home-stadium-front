import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGame } from '../../redux/selectedGameReducer/SelectedGameReducer';
import './games-list.css';

const GamesList = (props) => {
  const { comingGames, setIsModalOpen } = props;
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { id } = useParams();

  const selectGame = (gameId) => {
    dispatch(fetchGame(user.token, id, gameId));
    setIsModalOpen(true);
  };

  return (
    <ul className="games-list">
      {
        comingGames?.length !== 0
          ? (
            comingGames?.map((game) => {
              let gameToDisplay = null;
              if (game != null) {
                gameToDisplay = (
                  <li key={game.game_id}>
                    <h6>
                      <img src={game.teams[0].flag} alt={game.teams[0].name} />
                      {game.teams[0].name}
                    </h6>
                    <div className="vs-column">
                      <span>VS</span>
                    </div>
                    <h6>
                      <img src={game.teams[1].flag} alt={game.teams[1].name} />
                      {game.teams[1].name}
                    </h6>
                    <input type="date" value={game.date.substring(0, 10)} className="date-picker" />
                    <button
                      type="button"
                      onClick={() => selectGame(game.game_id)}
                    >
                      Reserve
                    </button>
                  </li>
                );
              }
              return gameToDisplay;
            })
          ) : (
            <li className="no-games">
              <h4>There are no games available</h4>
            </li>
          )
      }
    </ul>
  );
};

GamesList.propTypes = {
  comingGames: PropTypes.arrayOf(PropTypes.shape({
    game_id: PropTypes.number,
    teams: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      flag: PropTypes.string,
    })),
    date: PropTypes.string,
    avialable_seats: PropTypes.number,
  })),
  setIsModalOpen: PropTypes.func.isRequired,
};

GamesList.defaultProps = {
  comingGames: [],
};

export default GamesList;
