import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStadium } from '../../redux/stadiumReducer/StadiumReducer';
import StadiumImage from '../../components/stadium_image/StadiumImage';
import StadiumInfo from '../../components/stadium_info/StadiumInfo';
import './stadium.css';

const Stadium = () => {
  const dispatch = useDispatch();
  const { stadium } = useSelector((state) => state.stadium);

  useEffect(() => {
    dispatch(fetchStadium());
  }, [dispatch]);

  return (
    <section className="stadium-wrapper">
      <StadiumImage src={stadium?.img} alt={stadium?.name} />
      <StadiumInfo stadium={stadium} />
    </section>
  );
};

export default Stadium;
