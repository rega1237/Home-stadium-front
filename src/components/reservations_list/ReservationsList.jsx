import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../../redux/reservationsReducer/ReservationsReducer';
import { cancelReservation } from '../../API/api_calls';
import './reservations-list.css';

const ReservationsList = (props) => {
  const { reservations } = props;
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleCancel = (event, reservationID) => {
    event.preventDefault();
    setButtonDisabled(true);
    const responseState = cancelReservation(user, reservationID);
    if (responseState.state) {
      dispatch(fetchReservations(user));
      setButtonDisabled(false);
    }

    if (responseState.state === false) {
      setButtonDisabled(false);
    }
  };

  return (
    reservations?.length !== 0
      ? (
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
                      disabled={buttonDisabled}
                    >
                      Cancel
                    </button>
                  </div>
                </li>
              ))
          }
        </ul>
      ) : (
        <div className="no-reservations">
          <h2>There are no reservations yet</h2>
        </div>
      )
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
