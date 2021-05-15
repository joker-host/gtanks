import './Tank.css';

import React from 'react';


import Slider from '../Slider/Slider';

function Tank() {

    return (
        <section className="tank">
            <div className="tank_wrapper">
                <h1 className="tank__title"><span className="tank__span-title">g</span>Tanks</h1>
                <p className="tank__subtitle">GTanks — это сложный мультимедийный продукт, созданный на основе старой версии игры 2010 года — «Танки Онлайн».</p>
                <div className="tank__links-wrapper">
                    <a href="#" className="tank__link tank__link_yellow-button">Скачать</a>
                    <a href="#" className="tank__link tank__link_white-button">Играть онлайн</a>
                </div>
                <div className="tank__online">
                    <p className="tank__text">Online</p>
                </div>
            </div>
            <Slider />
        </section>
    );

}

export default Tank;