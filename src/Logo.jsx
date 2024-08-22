import fcclogo from './assets/freecodecamp-logo.png'
import React from 'react';

class Logo extends React.Component {
  render(){
    return(
      <a href="https://www.freecodecamp.org/espanol/" target="_blank">
      <img src={fcclogo} className="logo fcc" alt="FCC logo" />
    </a>
    );
  }
}

export { Logo }