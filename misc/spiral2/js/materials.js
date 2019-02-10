// ////////////////////////////////////////////////////////////////////////
// /// SHADERS //////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
const vertexShader = /* glsl */`
  precision highp float;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    uniform float time;

    attribute vec3 position;
    attribute vec3 offset;
    attribute float instanceIndex;

    varying vec4 color;

    mat3 rotateZ( in float angle ) {
      return mat3(
        cos(angle),		-sin(angle),	0,
        sin(angle),		cos(angle),		0,
        0,				0,		1
      );
    }

    float easeExpoOut(float p) {
      return 1.0 - pow(2.0, -10.0 * p);
    }

    float easeQuadOut(float t) {
      return -t * (t - 2.0);
    }

    float easeCircOut(float t) {
      return sqrt(1.0 - (t = t - 1.0) * t);
    }

    float easeBackOut(float t, float amplitude) {
      return ((t = t - 1.0) * t * ((amplitude + 1.0) * t + amplitude) + 1.0);
    }

    // if t < cutoff return 1, if cutoff < t < 1.0 return decreasing range [1.0, 0.0]
    float easeOutAtEnd( float t, float cutoff) {
      return 1.0 - ( max( 1.0, cutoff + t ) - 1.0 ) * ( 1.0 / cutoff );
    }

    void main() {

      float tFactor = mod( time + instanceIndex, 1.0 );

      float scaleFactor = easeBackOut( tFactor, 1.5 ) * 5.0;
      float rotationFactor = easeCircOut( tFactor );
      float colorFactor = easeCircOut( tFactor );
      float alphaFactor = easeOutAtEnd( tFactor, 0.1 );

      color = vec4( cos(colorFactor), sin(colorFactor), sin( 1.0-colorFactor ), alphaFactor );

      vec3 mvPosition = ( offset + position * ( scaleFactor * 0.2 ) ) * scaleFactor;
      mat3 rot = rotateZ( rotationFactor * 10.0 );
      vec3 qmvPosition = mvPosition * rot;

      gl_Position = projectionMatrix * modelViewMatrix * vec4( qmvPosition, 1.0 );

    }
`;

const fragmentShader = /* glsl */`
  precision highp float;

  varying vec4 color;

  void main() {

    gl_FragColor = color;

  }
`;

function createMaterials() {

  const spiral = new THREE.RawShaderMaterial( {
    uniforms: {
      time: { value: 0.0 },
    },
    vertexShader,
    fragmentShader,
    transparent: true,

  } );

  return { spiral };

}
