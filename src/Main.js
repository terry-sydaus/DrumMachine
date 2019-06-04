// Main.js

import React from 'react';

class Main extends React.Component {
  state = {
    display: 'Click on a button to play a sound' 
  };

  updateDisplay = (sound) => {
    this.setState({
      display: sound
    });
  }

  render() {

  const padsource = [
    { id: 'hi-hat',
      letter: 'Q',
      keyCode: 81,
      audio: './sounds/hihat.wav'
    },
    { id: 'snare',
      letter: 'W',
      keyCode: 87,
      audio: './sounds/snare.wav'
    },
    { id: 'bass',
      letter: 'E',
      keyCode: 69,
      audio: './sounds/kick.wav'
    },
    { id: 'tom1',
      letter: 'A',
      keyCode: 65,
      audio: './sounds/tom.wav'
    },
    { id: 'tom2',
      letter: 'S',
      keyCode: 83,
      audio: './sounds/boom.wav'
    },
    { id: 'openhat',
      letter: 'D',
      keyCode: 68,
      audio: './sounds/openhat.wav'
    },
    { id: 'china-crash',
      letter: 'Z',
      keyCode: 90,
      audio: './sounds/clap.wav'
    },
    { id: 'rest',
      letter: 'X',
      keyCode: 88,
      audio: './sounds/tink.wav'
    },
    { id: 'ride',
      letter: 'C',
      keyCode: 67,
      audio: './sounds/ride.wav'
    }
  ];

    let pads = padsource.map((e,i) => (
      <Pad
	key={e.id + i}
	letter={e.letter}
	id={e.id}
	audio={e.audio}
	keyCode={e.keyCode}
	updateDisplay={this.updateDisplay}
      />));
    return (
      <div className='container'>
	<div id='drum-machine' className='main'>
	  {pads}
	</div>
	<div id='display'>Playing: {this.state.display}</div>
      </div>

    )
  }
}


class Pad extends React.Component { 
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    if (event.keyCode === this.props.keyCode) {
      console.log(this.props.keyCode + ' key was just pressed down');
      this.onClickPad();
    }
  } 

  onClickPad = (event) => {
    console.log('I am clicking the pad');
    this.props.updateDisplay(this.props.id);
    console.log(this._audio.id);
    this._audio.currentTime = 0;
    this._audio.play();
  }

  render() {
    return (
  <button
    id={this.props.id}
    className='drum-pad'
    onClick={this.onClickPad}
  >
    <audio
      src={this.props.audio}
      id={this.props.letter}
      className='clip'
      ref={
	(el) => this._audio = el
      }
    >
      Your browser does not support HTML5 audio
    </audio>
    {this.props.letter}
  </button>
);
  }
}


export default Main;
