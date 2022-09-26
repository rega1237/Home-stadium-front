import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchStadium } from '../../redux/stadiumReducer/StadiumReducer';
import StadiumImage from '../../components/stadium_image/StadiumImage';
import StadiumInfo from '../../components/stadium_info/StadiumInfo';
import { redirectIfNotLogged } from '../../helpers/helpers';
import './stadium.css';

const Stadium = () => {
  const dispatch = useDispatch();
  const { stadium } = useSelector((state) => state.stadium);
  const { user } = useSelector((state) => state.users);
  const { id } = useParams();
  useEffect(() => {
    redirectIfNotLogged(user);
    dispatch(fetchStadium(user.token, id));
  }, [dispatch]);

  return (
    <section className="stadium-wrapper">
      <StadiumImage src={stadium?.photo} alt={stadium?.name} />
      <StadiumInfo stadium={stadium} />
    </section>
  );
};

export default Stadium;
