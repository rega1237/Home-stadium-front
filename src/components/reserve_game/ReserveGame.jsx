import React from 'react';
import { useSelector } from 'react-redux';
import './reserve-game.css';

const ReserveGame = () => {
  const state = useSelector((state) => state.selectedGame);
  const submitRequest = (event) => {
    event.preventDefault();
    const seatQuantity = event.target.seats.value;
    console.log(seatQuantity);
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
          <form className="reserve-form" onSubmit={(event) => submitRequest(event)}>
            <input
              type="number"
              name="seats"
              min="1"
              placeholder="0"
              required
            />
            <button type="submit">Reserve</button>
          </form>
        </div>
      </>
    )
  );
};

export default ReserveGame;
