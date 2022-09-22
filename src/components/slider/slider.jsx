import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../../redux/homereducer/homereducer';
import './slider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Sliders = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.home);
  const { user } = useSelector((state) => state.users);
  console.log(items);

  useEffect(() => {
    dispatch(fetchItems(user.token));
  }, [dispatch]);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      loop
      modules={[Navigation, Pagination]}
      className="mySwiper"
      pagination={{
        clickable: true,
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Link to="/stadium/:id">
            <div className="card">
              <img src={item.photo} alt="stadium" className="slider-pic" />
              <div className="card-body">
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
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliders;
