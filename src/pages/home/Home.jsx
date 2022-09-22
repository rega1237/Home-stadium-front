import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sliders from '../../components/slider/slider';
import './home.css';


const Home = () => {

  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user.token === undefined) {
      window.location.href = '/login';
    }
  }, [user]);

 
  return (
    <div className="home">
        <div className="title">
          <h1>STADIUMS</h1>
          <p>Please select one Stadium reservation</p>
        </div>
      <div className='slider-container'>
        <Sliders />
      </div>
    </div>
  );
  
};

export default Home;
