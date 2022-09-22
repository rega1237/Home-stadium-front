import React, { useState } from 'react';
import Sliders from '../../components/slider/slider';
import Modal from '../../components/modal/Modal';
import CreateStadium from '../../components/createStadium/CreateStadium';
import './home.css';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="home">
      <div className="title">
        <h1>STADIUMS</h1>
        <p>Please select one Stadium reservation</p>
      </div>
      <div className="slider-container">
        <Sliders />
      </div>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        Add Stadium
      </button>
      <Modal
        title="Add Stadium"
        open={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <CreateStadium setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default Home;
