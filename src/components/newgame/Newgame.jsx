import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { createGame } from "../../redux/newGameReducer/newGameReducer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import './newgame.css';


const Newgame = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  const fetchTeams = async () => {
    const response = await axios.get("http://localhost:3000/teams", {
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
      team_two: e.target.teamB.value
    };
    dispatch(createGame(user.token, id, gameData));
  };

  return (
    <>
      <form onSubmit={handleCreateGame} className="addgame-form">
        <div className="team-section">
          <label htmlFor="teamA">Team A</label>
          <select name="teamA" id="selector" defaultValue={"default"}>
            <option value="default" disabled>
              Select a team
            </option>
            {teams?.map((team) => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </div>
        <div className="team-section">
          <label htmlFor="teamB">Team B</label>
          <select name="teamB" id="selector" defaultValue={"default"}>
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
          <button type="submit" className="add-game" >
            Create Game
          </button>
        </div>
      </form>
    </>
  );
};

export default Newgame;