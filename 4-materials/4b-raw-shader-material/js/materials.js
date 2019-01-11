// a shader material requires two pieces of GLSL code to work
// 1. the vertex shader, that calculates the appearance at each vertex
// 2. the fragment shader, that uses the result of the vertex shader to
// calculate the appearance between vertices

// we'll use string templates to allow us to write multiline strings
// the strings are wrapped in the backtick character: `
//
// Also, note the /* glsl */ comment at the start - this means that
// you can set up some editor environments so that
// they will correctly highlight the shader code
const vertexShader = /* glsl */`

// Here are the minimum uniforms and attributes required
// to recreate our basic ShaderMaterial with RawShaderMaterial

// Note that this is just a few of the variables that ShaderMaterial includes for us

// = object.matrixWorld
uniform mat4 modelMatrix;

// = camera.projectionMatrix
uniform mat4 projectionMatrix;

// = camera.matrixWorldInverse
uniform mat4 viewMatrix;

// define attributes, if any
attribute vec3 position;

// define varyings, if any


// the main function - every vertex and fragment shader must have this
void main() {

  // the eventual output of every vertex shader is gl_position
  // in this very basic example, we are multiplying the initial position with
  // the camera's view matrix and the modelViewMatrix, which is the object's position
  // relative to the camera

  //gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

  // equivalently, but without us having to multiply matrices in JavaScript:
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}
`;

const fragmentShader = /* glsl */`
// variables, if any


void main() {

  // the final output of the vertex shader must be gl_FragColor, which is the color to set
  // the pixel to. Each value in the vector 4 is between 0 and 1
  gl_FragColor = vec4(0.5,  // Red
                      0.0,  // Green
                      0.5,  // Blue
                      1.0); // Alpa, or transpareny
}
`

function createShaderMaterial( camera, model ) {

  const material = new THREE.RawShaderMaterial( {
    uniforms: {
      modelMatrix: {
        value: model.matrixWorld
      },
      projectionMatrix: {
        value: camera.projectionMatrix
      },
      viewMatrix: {
        value: camera.matrixWorldInverse
      },
    },
    // you might think that you need to add attributes as well
    // however the attributes match up with the attributes in
    // the buffergeometry of the model, meaning that
    // we can always use position, normal and UV
    // attributes: {},
    vertexShader,
    fragmentShader,
  })

  return material;

}
