import './Video.css';

import React from "react";

import VideoPlayer from 'react-video-js-player'
import Trailer from '../../images/Trailer.mp4'
import Poster from '../../images/Poster.png'

function Video() {

    const videoSrc = "https://www.youtube.com/watch?v=wJ8DCi1FBgY"

    return (

        <section className="video">
            <VideoPlayer className="video__player" src={Trailer} poster={Poster}/>
        </section>
    );


}

export default Video;