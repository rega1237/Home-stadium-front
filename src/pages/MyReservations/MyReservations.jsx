import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../../redux/reservationsReducer/ReservationsReducer';
import ReservationsList from '../../components/reservations_list/ReservationsList';
import './my-reservations.css';

const MyReservations = () => {
  const { reservations } = useSelector((state) => state.reservations);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations(user));
  }, [dispatch, reservations]);

  return (
    <section className="page-wrapper">
      <h1>
        {`${user?.username}'s reservations`}
      </h1>

      <ReservationsList reservations={reservations} />
    </section>
  );
};

export default MyReservations;
