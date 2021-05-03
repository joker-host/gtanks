import './Slider.css';

import React from 'react';

import { Carousel } from 'react-bootstrap';

import Arrow from '../../images/Arrow.svg';

// import Sparks from '../../images/Sparks.svg';

function Slider() {

    return (
      <Carousel>
        <Carousel.Item>
          <img src="Arrow"></img>
        </Carousel.Item>
      </Carousel>
    );

}

export default Slider;