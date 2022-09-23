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
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}

    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Link to={`/stadium/${item.id}`}>
            <div className="card">
              <div className="thumb-feather">
                <img src={item.photo} alt="stadium" className="slider-pic" />
              </div>
              <div className="card-body">
                <div className="card-body-section">
                  <h5>
                    <i className="fa fa-circle" aria-hidden="true" />
                    Seats
                  </h5>
                  <h3>
                    {item.seats}
                  </h3>
                </div>
                <div className="card-body-section">
                  <h5>Stadium name</h5>
                  <h3>
                    {item.name}
                  </h3>
                  <h6>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    {item.country}
                  </h6>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliders;
