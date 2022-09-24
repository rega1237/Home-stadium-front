import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createGame } from '../../redux/newGameReducer/newGameReducer';
import './new-game.css';

const Newgame = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  const fetchTeams = async () => {
    const response = await axios.get('http://localhost:3000/teams', {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setTeams(response.data);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleCreateGame = async (e) => {
    e.preventDefault();
    const gameData = {
      date: e.target.date.value,
      team_one: e.target.teamA.value,
      team_two: e.target.teamB.value,
    };
    dispatch(createGame(user.token, id, gameData));
  };

  return (
    <>
      <form onSubmit={handleCreateGame} className="create-game">
        <div className="vs-badge">
          <span>
            VS
          </span>
        </div>
        <select name="teamA" required>
          {teams?.map((team) => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
        <select name="teamB" required>
          {teams?.map((team) => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
        <input type="date" className="date-picker" name="date" required />
        <button className="add-button" type="submit">
          Create Game
        </button>
      </form>
    </>
  );
};

export default Newgame;
