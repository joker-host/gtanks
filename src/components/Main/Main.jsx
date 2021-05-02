import './Main.css';

import React from 'react';

// import Arrow from '../../images/Arrow.svg';
// import Donation from '../../images/Donation.svg';
// import Download from '../../images/Download.svg';
// import Forum from '../../images/Forum.svg
// import Rating from '../../images/Rating.svg';
// import Russia from '../../images/Russia.svg';
// import Wiki from '../../images/Wiki.svg';

function Main() {

    return (
        <div className="content">
            <div className="main">
                <h1 className="main__title"><span className="main__span-title">g</span>Tanks</h1>
                <p className="main__subtitle">GTanks — это сложный мультимедийный продукт, созданный на основе старой версии игры 2010 года — «Танки Онлайн».</p>
                <div className="main__links-wrapper">
                    <a href="" className="main__link">Скачать</a>
                    <a href="" className="main__link">Играть онлайн</a>
                </div>
            </div>
        </div>
    );

}

export default Main;