import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStadium } from '../../redux/stadiumReducer/StadiumReducer';
import './stadium.css';

const Stadium = () => {
  const dispatch = useDispatch();
  const { stadium } = useSelector((state) => state.stadium);

  useEffect(() => {
    dispatch(fetchStadium());
  }, [dispatch]);

  return (
    <section className="stadium-wrapper">
      <div className="image-feather">
        <img src={stadium.img} alt={stadium.name} />
      </div>

      <aside className="stadium-data">
        <div>
          <h2>{stadium.name}</h2>
          <h5>
            <i className="fa fa-map-marker" aria-hidden="true" />
            <span>{stadium.country}</span>
          </h5>
        </div>

        <ul className="games-list">
          { stadium.games?.map((game) => (
            <li key={game.id}>
              <h6>{game.team_a}</h6>
              <h6>{game.team_b}</h6>
              <input type="date" value={game.date} />
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default Stadium;
