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
  precision highp float;

  uniform float time;

  void main() {
    gl_Position = vec4( position, 1.0 );
  }

`;

const fragmentShader = /* glsl */`
  precision highp float;

  uniform float time;

  void main() {
    float x = mod( time / 5.0, 1.0 );
    float y = mod( time / 12.0, 1.0 );
    float z = mod( time / 20.0, 1.0 );
    gl_FragColor = vec4(vec3(x, y, z), 1.0 );
  }

`;

function createShaderMaterial() {

  const uniforms = {
    time: { value: 0.0 },
  };

  const material = new THREE.ShaderMaterial( {

    uniforms,
    vertexShader,
    fragmentShader,

  } );

  console.log( 'Here\'s the ShaderMaterial you just created: ', material );

  return material;

}
