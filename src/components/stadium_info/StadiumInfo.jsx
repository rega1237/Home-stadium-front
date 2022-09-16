import React from 'react';
import PropTypes from 'prop-types';
import GamesList from '../games_list/GamesList';
import './stadium-info.css';

const StadiumInfo = (props) => {
  const { stadium } = props;

  return (
    <aside className="stadium-info">
      <div className="stadium-info-header">
        <h2>{stadium.name}</h2>
        <h5 className="stadium-header-details stadium-country">
          <i className="fa fa-map-marker" aria-hidden="true" />
          <span>{stadium.country}</span>
        </h5>
        <h5 className="stadium-header-details stadium-seats">
          <i className="fa fa-circle" aria-hidden="true" />
          <span>
            Seats:
            {stadium.seats}
          </span>
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
