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
	uniform vec2 resolution;

  attribute vec3 position;

	void main()	{
		gl_Position = vec4( position / 2.0, 1.0 );
	}

`;

const fragmentShader = /* glsl */`
  precision highp float;

	uniform float time;

	void main()	{
		float x = sin(time / 20.0 * gl_FragCoord.x );
		float y = cos(time / 20.0 * gl_FragCoord.y );
    float z = tan(time / 20.0 * 1.0 );
		gl_FragColor = vec4(vec3(x, y, z), 1.);
	}

`;

function createShaderMaterial() {

  const uniforms = {
    time: { value: 1.0 },
  };

  const material = new THREE.RawShaderMaterial( {

    uniforms,

    vertexShader,
    fragmentShader,
  })

  return material;

}
