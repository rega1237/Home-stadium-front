import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createGame } from '../../redux/newGameReducer/newGameReducer';
import { BASE_URL } from '../../API/api_config';
import './newgame.css';

const Newgame = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  const fetchTeams = async () => {
    const response = await axios.get(`${BASE_URL}teams`, {
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
      <form onSubmit={handleCreateGame} className="addgame-form">
        <div className="team-section">
          <span>Team A</span>
          <select name="teamA" id="selector" defaultValue="default">
            <option value="default" disabled>
              Select a team
            </option>
            {teams?.map((team) => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </div>
        <div className="team-section">
          <span>Team B</span>
          <select name="teamB" id="selector" defaultValue="default">
            <option value="default" disabled>
              Select a team
            </option>
            {teams?.map((team) => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </div>
        <div className="team-creation">
          <input type="date" name="date" className="date-input" />
          <button type="submit" className="add-game">
            Create Game
          </button>
        </div>
      </form>
    </>
  );
};

export default Newgame;
