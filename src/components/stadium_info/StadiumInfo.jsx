import React from 'react';
import PropTypes from 'prop-types';
import GamesList from '../games_list/GamesList';

const StadiumInfo = (props) => {
  const { stadium } = props;

  return (
    <aside className="stadium-data">
      <div>
        <h2>{stadium.name}</h2>
        <h5>
          <i className="fa fa-map-marker" aria-hidden="true" />
          <span>{stadium.country}</span>
        </h5>
      </div>

      <GamesList games={stadium.games} />
    </aside>
  );
};

StadiumInfo.propTypes = {
  stadium: PropTypes.shape({
    name: PropTypes.string,
    country: PropTypes.string,
    seats: PropTypes.number,
    games: PropTypes.arrayOf(PropTypes.shape({
      team_a: PropTypes.string,
      team_b: PropTypes.string,
      date: PropTypes.string,
    })),
  }),
};

StadiumInfo.defaultProps = {
  stadium: {
    name: '',
    country: '',
    seats: 0,
    games: [],
  },
};

export default StadiumInfo;
