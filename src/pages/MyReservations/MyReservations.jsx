import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../../redux/reservationsReducer/ReservationsReducer';
import './my-reservations.css';

const MyReservations = () => {
  const { reservations } = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
    console.log(reservations);
  }, [dispatch]);

  return (
    <section className="page-wrapper">
      <h1>{reservations?.length}</h1>
    </section>
  );
};

export default MyReservations;
