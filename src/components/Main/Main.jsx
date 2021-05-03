import './Main.css';

import React from 'react';

import Sparks from '../../images/Sparks.svg';

function Main() {

    return (
        <div className="content">
            <div className="main">
                <h1 className="main__title"><span className="main__span-title">g</span>Tanks</h1>
                <p className="main__subtitle">GTanks — это сложный мультимедийный продукт, созданный на основе старой версии игры 2010 года — «Танки Онлайн».</p>
                <div className="main__links-wrapper">
                    <a href="#" className="main__link main__link_yellow-button">Скачать</a>
                    <a href="#" className="main__link main__link_white-button">Играть онлайн</a>
                </div>
                <img className="main__bg-image" src={Sparks}></img>
            </div>
        </div>
    );

}

export default Main;