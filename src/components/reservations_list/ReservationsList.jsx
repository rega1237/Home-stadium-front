import React from 'react';
import PropTypes from 'prop-types';
import './reservations-list.css';

const ReservationsList = (props) => {
  const { reservations } = props;

  return (
    <ul className="table">
      <li className="table-row table-header">
        <h5>Stadium</h5>
        <h5>Team A</h5>
        <h5 className="vs centered">vs</h5>
        <h5>Team B</h5>
        <h5 className="centered">Date</h5>
        <h5 className="centered">Cancel</h5>
      </li>
      {
        reservations.map((reservation) => (
          <li key={reservation.id} className="table-row">
            <p>{reservation.stadium.name}</p>
            <p>{reservation.game.team_a}</p>
            <p className="vs">vs</p>
            <p>{reservation.game.team_b}</p>
            <div className="tb-row-medium">
              <input type="date" value={reservation.game.date} className="date-picker" />
            </div>
            <div className="tb-row-medium">
              <button type="button" className="cancel-button">Cancel</button>
            </div>
          </li>
        ))
        }
    </ul>
  );
};

ReservationsList.propTypes = {
  reservations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    stadium: PropTypes.shape({
      name: PropTypes.string,
      img: PropTypes.string,
      country: PropTypes.string,
      seats: PropTypes.number,
    }),
    game: PropTypes.shape({
      team_a: PropTypes.string,
      team_b: PropTypes.string,
      date: PropTypes.string,
    }),
  })),
};

ReservationsList.defaultProps = {
  reservations: [],
};

export default ReservationsList;
