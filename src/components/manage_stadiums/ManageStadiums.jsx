import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../../redux/homereducer/homereducer';
const DeleteStadiums = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <div className="card">
              <img src={item.img} alt="stadium" className="slider-pic" />
            <div className="card-body">
              <h3>Name: {item.name}</h3>
              <p>Seats: {item.seats}</p>
            </div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeleteStadiums;