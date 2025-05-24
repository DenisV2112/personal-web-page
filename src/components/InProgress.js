import background from '../background_fire.mp4';
import { Howl } from 'howler';
import { useState } from 'react';
import { HiOutlineSpeakerXMark, HiOutlineSpeakerWave } from "react-icons/hi2";
// Dependencies
import { Routes, Route, Link } from 'react-router-dom';
 function InProgress(){
      const [sound, setSound] = useState(null);
  const [started, setStarted] = useState(false);

  const startExperience = () => {
    if (!sound) {
      const audio = new Howl({
        src: [background],
        autoplay: true,
        loop: true,
        volume: 1.0,
        html5: true,
      });
      audio.play();
      setSound(audio);
    }
    setStarted(true); // Oculta el botón
  };

  const stopSound= ()=>{
    if(sound){
      setSound(null)

    }
  }
    return(<>
           <video src={background} autoPlay loop muted ></video>
      {!started &&(<button className =  'App_Experience-button'onClick={startExperience}><HiOutlineSpeakerXMark /></button>)}
      {started &&(<button className =  'App_Experience-button'onClick={stopSound}><HiOutlineSpeakerWave /></button>)}
        <div className='App_text-container'>
          <div className='moon'>🌕</div>
          <h1>
          Good Night World...
        </h1>
        <p>
           This App is in Process.
        </p>
        
        </div>
         <Link to="/card" className="">Demo</Link>
        </>
    )
 }
 export default InProgress;