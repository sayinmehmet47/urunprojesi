import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSliders } from '../redux/sliders';

export default function Slider() {
  const dispatch = useDispatch();
  const sliders = useSelector((state) => state.sliders.data);
  useEffect(() => {
    dispatch(fetchSliders());
  }, [dispatch]);

  return (
    <Carousel>
      {sliders.map((slider, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`${process.env.REACT_APP_API_BASE_URL}/${slider.image}`}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
