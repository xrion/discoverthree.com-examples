import './style.css';
import Cows from './cows.jpg';

function component() {
  const element = document.createElement( 'div' );

  element.textContent = 'Hello!';
  element.classList.add( 'hello' );

  const mooCows = new Image();
  mooCows.src = Cows;
  element.appendChild( mooCows );

  return element;
}

document.body.appendChild( component() );
