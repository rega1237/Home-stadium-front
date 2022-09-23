import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GamesList from '../games_list/GamesList';
import Modal from '../modal/Modal';
import ReserveGame from '../reserve_game/ReserveGame';
import Newgame from '../newgame/Newgame';
import './stadium-info.css';

const StadiumInfo = (props) => {
  const { stadium } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGame, setNewGame] = useState(false);

  const handleNewGame = () => {
    setNewGame(true);
  };

  return (
    <>
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
              {`Seats: ${stadium.seats}`}
            </span>
          </h5>
          <button
            type="button"
            onClick={handleNewGame}
          >
            Add Game
          </button>
        </div>

        <GamesList
          comingGames={stadium.coming_games}
          setIsModalOpen={setIsModalOpen}
        />
      </aside>
      <Modal
        title="Reservations"
        open={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <div>
          <ReserveGame />
        </div>
      </Modal>
      <Modal
        title="Add-game"
        open={newGame}
        setIsModalOpen={setNewGame}
      >
        <Newgame />
      </Modal>
    </>
  );
};

StadiumInfo.propTypes = {
  stadium: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    country: PropTypes.string,
    seats: PropTypes.number,
    coming_games: PropTypes.arrayOf(PropTypes.shape({
      teams: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        flag: PropTypes.string,
      })),
      date: PropTypes.string,
      avialable_seats: PropTypes.number,
    })),
  }),
};

StadiumInfo.defaultProps = {
  stadium: {
    id: 0,
    name: '',
    country: '',
    seats: 0,
    coming_games: [],
  },
};

export default StadiumInfo;
