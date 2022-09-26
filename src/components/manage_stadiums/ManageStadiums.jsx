import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../../redux/homereducer/homereducer';
import './manageStadiums.css';

const DeleteStadiums = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.home);
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id, user.token));
  };

  return (
    <div className="grid-container">
      {items.map((item) => (
        <div key={item.id} className="grid-item">
          <div className="manage-card">
            <img src={item.photo} alt="stadium" className="slider-pic" />
            <div className="manage-body">
              <h3>
                Name:
                {' '}
                {item.name}
              </h3>
              <p>
                Seats:
                {' '}
                {item.seats}
              </p>
              <button type="button" onClick={() => handleDelete(item.id)} className="button-delete">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeleteStadiums;
