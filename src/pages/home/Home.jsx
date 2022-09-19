import React from 'react';
import Sliders from '../../components/slider/slider';
import './home.css';


const Home = () => {
 
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
