import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { createGame } from "../../redux/newGameReducer/newGameReducer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";


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
    const game = {
      date: e.target.date.value,
      team_one: e.target.teamA.value,
      team_two: e.target.teamB.value
    };
    dispatch(createGame(user.token, id, game));
  };

  return (
    <>
      <form onSubmit={handleCreateGame}>
        <select name="teamA" id="">
          {teams?.map((team) => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
        <select name="teamB" id="">
          {teams?.map((team) => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>
        <input type="date" name="date" />
        <button type="submit">
          Create Game
        </button>
      </form>
    </>
  );
};

export default Newgame;