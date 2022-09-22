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

  useEffect(() => {
    dispatch(fetchItems());
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
          <Link to={`/stadium/${item.id}`} className="stadium-link">
            <div className="card">
              <div className="thumb-feather">
                <img src={item.img} alt="stadium" className="slider-pic" />
              </div>
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
