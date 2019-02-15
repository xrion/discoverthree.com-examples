import {
  ShaderMaterial,
} from './vendor/three/three.module.js';

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

// define uniforms, if any

// define varyings, if any

// the main function - every vertex and fragment shader must have this
void main() {

  // the eventual output of every vertex shader is gl_position
  // in this very basic example, we are multiplying the initial position with
  // the camera's view matrix and the modelViewMatrix, which is the object's position
  // relative to the camera

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);

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
`;

function createShaderMaterial() {

  const shaderMaterial = new ShaderMaterial( {

    // uniforms: {}, // optional object containing uniforms
    vertexShader,
    fragmentShader,

  } );

  return shaderMaterial;

}

export default function createMaterials() {


  return {

    purple: createShaderMaterial(),

  };

}
