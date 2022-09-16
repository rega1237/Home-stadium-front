import React from 'react';
import PropTypes from 'prop-types';
import './games-list.css';

const GamesList = (props) => {
  const { games } = props;

  return (
    <ul className="games-list">
      { games?.map((game) => (
        <li key={game.id}>
          <h6>{game.team_a}</h6>
          <span>Vs</span>
          <h6>{game.team_b}</h6>
          <input type="date" value={game.date} />
          <button type="button">
            Reserve
          </button>
        </li>
      ))}
    </ul>
  );
};

GamesList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    team_a: PropTypes.string,
    team_b: PropTypes.string,
    date: PropTypes.string,
  })),
};

GamesList.defaultProps = {
  games: [],
};

export default GamesList;
