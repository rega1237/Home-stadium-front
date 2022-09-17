import React, { useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../redux/homereducer/homereducer';
import "./slider.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 2560,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1444,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Sliders = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  
  return (
    <div className="slider">
      <Slider {...settings} className="master">
        {items.map((item) => (
          <div key={item.id} className="cards">
            <div className="card-top">
              <img src={item.img} alt={item.title} className="slider-pic" />
            </div>
            <div className="card-bottom">
              <h3>{item.name}</h3>
              <p>{item.country}</p>
              <p>{item.seats}</p>
            </div> 
          </div>
        ))}
      </Slider> 
    </div>
  );
}

export default Sliders;