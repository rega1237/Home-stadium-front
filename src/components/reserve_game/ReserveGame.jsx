import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { reserveGame } from '../../API/api_calls';
import { fetchGame } from '../../redux/selectedGameReducer/SelectedGameReducer';
import './reserve-game.css';

const ReserveGame = () => {
  const state = useSelector((state) => state.selectedGame);
  const { user } = useSelector((state) => state.users);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [fetchDone, setFetchDone] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [fetchMessage, setFetctMessage] = useState('');

  const reserveSeats = async (event) => {
    event.preventDefault();
    setSubmitDisabled(true);
    const seatQuantity = event.target.seats.value;
    const reserveState = await reserveGame(user, state?.game?.all_data?.game.id, seatQuantity);

    if (reserveState.state) {
      dispatch(fetchGame(user.token, id, state?.game?.all_data?.game.id));
      setFetchDone(true);
      setTimeout(() => {
        setFetchDone(false);
      }, 1000);
      setSubmitDisabled(false);
      event.target.reset();
    }
    if (!reserveState.state) {
      setFetchError(true);
      setFetctMessage(reserveState.response.error);
      setTimeout(() => {
        setFetchError(false);
      }, 1000);
      setSubmitDisabled(false);
    }
  };

  return (
    state.game === undefined ? (
      <div className="loading">
        <span className="spinner" />
        <h4>Loading</h4>
      </div>
    ) : (
      <>
        <div className="reserve-game">
          <div className="team-vs">
            <div className="team-header">
              <img
                src={state?.game?.all_data?.teams[0].flag}
                alt={state?.game?.all_data?.teams[0].name}
              />
              <h2>{state?.game?.all_data?.teams[0].name}</h2>
            </div>
            <div className="vs-badge">
              <span>
                VS
              </span>
            </div>
            <div className="team-header">
              <img
                src={state?.game?.all_data?.teams[1].flag}
                alt={state?.game?.all_data?.teams[1].name}
              />
              <h2>{state?.game?.all_data?.teams[1].name}</h2>
            </div>
          </div>

          <div className="game-info-header">
            <div className="game-stadium-name">
              <span>Stadium</span>
              <h2>{state?.game?.all_data?.stadium.name}</h2>
            </div>
            <div>
              <h5 className="game-header-details game-country">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>{state?.game?.all_data?.stadium.country}</span>
              </h5>
              <h5 className="game-header-details game-seats">
                <i className="fa fa-circle" aria-hidden="true" />
                <span>
                  {`Available seats: ${state?.game?.all_data?.game.available_seats}`}
                </span>
              </h5>
            </div>
          </div>
          <form className="reserve-form" onSubmit={(event) => reserveSeats(event)}>
            <input
              type="number"
              name="seats"
              min="1"
              placeholder="0"
              required
            />
            <button
              type="submit"
              disabled={submitDisabled}
              className={`${fetchDone ? 'done' : ''} ${fetchError ? 'error' : ''}`}
            >
              Reserve
            </button>
          </form>
          <p className={`error-message ${fetchError ? 'show' : ''}`}>
            {fetchMessage}
          </p>
        </div>
      </>
    )
  );
};

export default ReserveGame;
