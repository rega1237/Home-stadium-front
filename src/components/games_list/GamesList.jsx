import React from 'react';
import PropTypes from 'prop-types';
import './games-list.css';

const GamesList = (props) => {
  const { comingGames } = props;

  return (
    <ul className="games-list">
      { comingGames?.map((game) => (
        <li key={`${game.teams[0].name} ${game.teams[1].name}`}>
          <h6>
            <img src={game.teams[0].flag} alt={game.teams[0].name} />
            {game.teams[0].name}
          </h6>
          <span>Vs</span>
          <h6>
            <img src={game.teams[1].flag} alt={game.teams[1].name} />
            {game.teams[1].name}
          </h6>
          <input type="date" value={game.date.substring(0, 10)} className="date-picker" />
          <button type="button">
            Reserve
          </button>
        </li>
      ))}
    </ul>
  );
};

GamesList.propTypes = {
  comingGames: PropTypes.arrayOf(PropTypes.shape({
    teams: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      flag: PropTypes.string,
    })),
    date: PropTypes.string,
    avialable_seats: PropTypes.number,
  })),
};

GamesList.defaultProps = {
  comingGames: [],
};

export default GamesList;
