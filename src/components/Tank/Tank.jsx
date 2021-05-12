import './Tank.css';

import React from 'react';

import Sparks from '../../images/Sparks.svg';

function Tank() {

    return (
        <section className="tank">
            <h1 className="tank__title"><span className="tank__span-title">g</span>Tanks</h1>
            <p className="tank__subtitle">GTanks — это сложный мультимедийный продукт, созданный на основе старой версии игры 2010 года — «Танки Онлайн».</p>
            <div className="tank__links-wrapper">
                <a href="#" className="tank__link tank__link_yellow-button">Скачать</a>
                <a href="#" className="tank__link tank__link_white-button">Играть онлайн</a>
            </div>
            <img className="tank__bg-image" src={Sparks}></img>
        </section>
    );

}

export default Tank;