import React, { useReducer, useRef } from 'react';

//Initial state of the audio player

const initialState = {
    audio: new Audio(), //Create an empty audio element
    isPlaying: false,
    volume:0.5, //Initial volume (range: 0 to 1)
    };

// Render function to manage audio player actions
const playerReducer = (state, action) => {
    switch(action.type){
        case 'PLAY':
            state.audio.play();
            return {...state, isPlaying: true};

        case 'PAUSE':
            state.audio.pause();
            return {...state, isPlaying:false};

        case 'SET_VOLUME':
            state.audio.volume = action.volume;
            return {...state, volume:action.volume};
        
            default:
                return state;
    }
};


const Question8 = ({audioPath}) => {
    //intialize player state using useReducer
    const [playerState, dispatch] = useReducer(playerReducer,initialState);

    //Ref to store the audio element
    const audioRef = useRef(playerState.audio);

    //update audio element source when audio path change
    if (audioRef.current.src !== audioPath) {
        audioRef.current.src = audioPath;
      }

    //function to handle pause button click
    const handlePause = () => {
        dispatch({type:'PAUSE'});
    };

    //function to handle play button click
    const handlePlay = () =>{
        dispatch({type:'PLAY'});
    }

    //Function to handle volume change
    const handleVolumeChange = (event) => {
        const volume = parseFloat(event.target.value);
        dispatch({type:'SET_VOLUME', volume});
    };
  return (
    <div>
        <h2>Audio Player</h2>
      <audio ref={audioRef} />

      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={playerState.volume}
          onChange={handleVolumeChange}
        />
      </div>

    </div>
  )
}

export default Question8