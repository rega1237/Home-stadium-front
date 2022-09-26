import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { cancelReservation } from '../../API/api_calls';
import { fetchReservations, resetReservations } from '../../redux/reservationsReducer/ReservationsReducer';
import './reservations-list.css';

const ReservationsList = (props) => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { reservations } = props;

  const handleCancel = async (event, id) => {
    const requestState = await cancelReservation(user, id);
    if (requestState.state) {
      dispatch(resetReservations);
      dispatch(fetchReservations(user));
      console.log('canceled');
    }
    if (requestState.state === false) {
      console.log(requestState);
    }
  };

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
            <p>{reservation.reserved_game.stadium}</p>
            <p>
              <img
                src={reservation.reserved_game.teams[0].flag}
                alt={reservation.reserved_game.teams[0].name}
              />
              {reservation.reserved_game.teams[0].name}
            </p>
            <p className="vs">vs</p>
            <p>
              <img
                src={reservation.reserved_game.teams[0].flag}
                alt={reservation.reserved_game.teams[0].name}
              />
              {reservation.reserved_game.teams[0].name}
            </p>
            <div className="tb-row-medium">
              <input type="date" value={reservation.reserved_game.date.substring(0, 10)} className="date-picker" />
            </div>
            <div className="tb-row-medium">
              <button
                type="button"
                className="cancel-button"
                onClick={(event) => handleCancel(event, reservation.id)}
              >
                Cancel
              </button>
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
