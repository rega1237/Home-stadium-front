import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../../redux/reservationsReducer/ReservationsReducer';
import ReservationsList from '../../components/reservations_list/ReservationsList';
import './my-reservations.css';

const MyReservations = () => {
  const { reservations } = useSelector((state) => state.reservations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <section className="page-wrapper">
      <h1>
        {`${reservations.user?.name}'s reservations`}
      </h1>

      <ReservationsList reservations={reservations?.reservations} />
    </section>
  );
};

export default MyReservations;
