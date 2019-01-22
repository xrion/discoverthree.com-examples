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

  const texture = new THREE.CanvasTexture( canvas );
  texture.anisotropy = 16;

  initTextInput( canvas, context, texture );

  return texture;

}

function setBackgroundColor( canvas, context ) {

  context.fillStyle = 'white';
  context.fillRect( 0, 0, canvas.width, canvas.height );

}

// split the text into lines that will fit on the canvas
// and return an array of lines
function processText( text ) {

  // first split by line break
  const lines = text.split( '\n' );

  // At this point you could also split the line if it's
  // longer than the canvas width.
  // This is a bit beyond the scope of this simple example
  // so we'll skip that for now

  return lines;

}

function setText( canvas, context, lines ) {

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

  // draw each line onto the canvas
  lines.forEach( ( line ) => {
    context.fillText( line, margin, lineNum * lineHeight );
    lineNum++;
  } );


}

function initTextInput( canvas, context, texture ) {

  const textarea = document.querySelector( '#text-input' );

  const lines = processText( canvas, context, textarea.value );

  setText( canvas, context, lines );

  textarea.addEventListener( 'input', ( e ) => {

    const text = e.target.value;

    const lines = processText( canvas, context, text );

    setText( canvas, context, lines );

    texture.needsUpdate = true;

  } );

}
