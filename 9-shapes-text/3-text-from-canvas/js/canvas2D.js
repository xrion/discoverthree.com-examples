import {
  CanvasTexture,
  sRGBEncoding,
} from './vendor/three/three.module.js';

function setBackgroundColor( canvas, context ) {

  context.fillStyle = 'white';
  context.fillRect( 0, 0, canvas.width, canvas.height );

}

function setText( canvas, context, text ) {

  setBackgroundColor( canvas, context, 'white' );

  const fontSize = 20;

  // the vertical height for each line.
  // You might need to adjust this depending on the font
  const lineHeight = fontSize + 5;

  // left margin
  const margin = 4;

  context.fillStyle = 'black';
  context.font = `${fontSize}pt Arial`;
  context.textAlign = 'left';
  context.textBaseline = 'middle';

  let lineNum = 1;

  // split the text into an array of lines,
  // then draw each line onto the canvas
  text.split( '\n' ).forEach( ( line ) => {

    context.fillText( line, margin, lineNum * lineHeight );
    lineNum++;

  } );

}

function initTextInput( canvas, context, texture ) {

  const textarea = document.querySelector( '#text-input' );

  setText( canvas, context, textarea.value );

  textarea.addEventListener( 'input', () => {

    setText( canvas, context, textarea.value );

    texture.needsUpdate = true;

  } );

}

// Create a canvas using the 2D canvas API.
// We'll draw our text onto this one, then use it as the
// texture for objects in out scene
function initCanvasTexture() {

  const container = document.querySelector( '#canvas-2d-container' );
  const canvas = document.createElement( 'canvas' );
  const context = canvas.getContext( '2d' );
  container.appendChild( canvas );

  // set the 2D canvas to be 256x256 pixels
  canvas.width = canvas.height = 256;

  const texture = new CanvasTexture( canvas );
  texture.anisotropy = 16;
  texture.encoding = sRGBEncoding;

  initTextInput( canvas, context, texture );

  return texture;

}

