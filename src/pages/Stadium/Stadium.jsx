import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStadium } from '../../redux/stadiumReducer/StadiumReducer';
import 'stadium.css';

const Stadium = () => {
  const dispatch = useDispatch();
  const { stadium } = useSelector((state) => state.stadium);

  useEffect(() => {
    dispatch(fetchStadium());
  }, [dispatch]);

  return (
    <section className="stadium-wrapper">
      
    </section>
  );
};

export default Stadium;
