import './Slider.css';

import React from 'react';

import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';

import SliderCard from '../SliderCard/SliderCard';

import leftArrow from '../../images/Left-arrow.svg'
import rightArrow from '../../images/Right-arrow.svg'



function Slider() {

  const breakPoints = [
    { width: 500, itemsToShow: 2 },
    { width: 850, itemsToShow: 2 },
    { width: 950, itemsToShow: 3 },
    // { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 4 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    return (
      <button onClick={onClick} disabled={isEdge} className='carousel__arrow'>
        {isEdge ? <img src=''></img> : 
          type === consts.PREV ? <img src={leftArrow}></img> : <img src={rightArrow}></img>
        }
      </button>
    )
  }


  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        <Carousel 
          pagination={false} 
          breakPoints={breakPoints} 
          renderArrow={myArrow} 
          easing="ease-out"
          transitionMs={750}
        >
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;