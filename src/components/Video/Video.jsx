import './Video.css';

import { React, useEffect } from "react";



function Video() {
    useScript("https://www.youtube.com/watch?v=R5O5lLIph9Y");

    function useScript(url) {
        useEffect(() => {
            const script = document.createElement("script");
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            };
        }, [url]);
    }

    function PlayNewVideo() {
        if (window.pljssglobal.length > 0) {
          window.pljssglobal[0].api("play", "https://www.youtube.com/watch?v=R5O5lLIph9Y");
        }
      }

    return (
        <section className="video" id="player">
            <input type="button" value="Play a new video" onClick={PlayNewVideo} />
            <div id="player"></div>
        </section>
    );

}

export default Video;