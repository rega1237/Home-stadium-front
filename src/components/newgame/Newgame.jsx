import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStadium } from "../../redux/stadiumReducer/StadiumReducer";
import { useParams } from "react-router-dom";

const Newgame = () => {
  const dispatch = useDispatch();
  const { stadium } = useSelector((state) => state.stadium);
  const { user } = useSelector((state) => state.users);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchStadium(user.token, id));
  }, [dispatch]);
  const { coming_games } = stadium;
  console.log(coming_games);
  return (
    <>
      <form action="">
        <select name="" id="">
          
        </select>
      </form>
    </>
  );
};

export default Newgame;