import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/homereducer/homereducer';

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      { items.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
