import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Sliders from '../../components/slider/slider';
import Modal from '../../components/modal/Modal';
import CreateStadium from '../../components/createStadium/CreateStadium';
import './home.css';

const Home = () => {
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user.token === undefined) {
      window.location.href = '/login';
    }
  }, [user]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home">
      <div className="home-header">
        <div className="title">
          <h1>STADIUMS</h1>
          <p>Here&apos;s a list of stadiums</p>
          <h4>Click one to see more details</h4>
        </div>
        <button type="button" onClick={() => setIsModalOpen(false)}>
          Add Stadium
        </button>
      </div>
      <div className="slider-container">
        <Sliders />
      </div>
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
