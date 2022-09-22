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
                <div className="card-body-section">
                  <h5>
                    <i className="fa fa-circle" aria-hidden="true" />
                    Seats
                  </h5>
                  <h3>
                    {item.seats}
                  </h3>
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
