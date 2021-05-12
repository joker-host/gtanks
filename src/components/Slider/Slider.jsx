import './Slider.css';

import React from 'react';

import Carousel from 'react-elastic-carousel';
import { consts } from 'react-elastic-carousel';

import SliderCard from '../SliderCard/SliderCard';

import leftArrow from '../../images/Left-arrow.svg'
import rightArrow from '../../images/Right-arrow.svg'
// import Sparks from '../../images/Sparks.svg';
import Sparks from '../../images/SliderBg.png';



function Slider() {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    // { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 2 },
    // { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 3 },
    // { width: 1750, itemsToShow: 6 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    return (
      <button onClick={onClick} disabled={isEdge} className='carousel__arrow'>
        {/* {type === consts.PREV && isEdge ? <img src={leftArrow}></img> : <img src={rightArrow}></img>} */}
        {isEdge ? <img src=''></img> : 
          type === consts.PREV ? <img src={leftArrow}></img> : <img src={rightArrow}></img>
        }
        {/* {isEdge ? disabled=true : disabled=false} */}
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
          transitionMs={600}
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
          {/* <SliderCard />
        <SliderCard /> */}
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;