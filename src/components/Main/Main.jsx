import './Main.css';

import React from 'react';

import Tank from '../Tank/Tank';
import Slider from '../Slider/Slider';
import Video from '../Video/Video';

import Sparks from '../../images/Sparks.svg';

function Main() {

    return (
        <main className="content">
            <Tank />
            <Slider />
            <Video />
        </main>
    );

}

export default Main;