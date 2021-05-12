import './SliderCard.css';

import React from 'react';

import SliderBg from '../../images/SliderBg.png';

function SliderCard() {

    return (
        <div className="sliderCard">
            <p className="sliderCard__description"></p>
            <h4 className="sliderCard__header"></h4>
            <img className="sliderCard__image" src={SliderBg} alt="Здесь должна была быть новость"/>
        </div>
    );

}

export default SliderCard;