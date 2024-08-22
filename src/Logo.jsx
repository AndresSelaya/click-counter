import fcclogo from './assets/freecodecamp-logo.png'

function Logo(){
    return(
        <a href="https://www.freecodecamp.org/espanol/" target="_blank">
        <img src={fcclogo} className="logo fcc" alt="FCC logo" />
      </a>
    );
}

export { Logo }