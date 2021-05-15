import './Main.css';

import React from 'react';

import Tank from '../Tank/Tank';
import Video from '../Video/Video';

function Main() {

    return (
        <main className="content">
            <Tank />
            <Video />
        </main>
    );

}

export default Main;