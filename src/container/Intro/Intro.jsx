import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants/index';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((playVideo) => !playVideo);
    if (playVideo) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
  return (
    <div className="app__video">
      <video src={meal} ref={videoRef} type="video/mp4" loop controls={false} muted />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
          {!playVideo ? <BsPauseFill color="#fff" fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30} />}
        </div>
      </div>
    </div>
  )
};

export default Intro;
