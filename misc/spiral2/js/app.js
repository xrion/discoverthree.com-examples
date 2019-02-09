// ////////////////////////////////////////////////////////////////////////
// /// UTILITY FUNCTIONS //////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
const vec = new THREE.Vector3();
const a = 0.009; // spiral param

// formula for a spherical spiral here: http://mathworld.wolfram.com/SphericalSpiral.html
const pointOnSphericalSpiral = ( t ) => {

  const c = Math.atan( a * t );
  const cosC = Math.cos( c );

  const x = Math.cos( t ) * cosC;
  const y = Math.sin( t ) * cosC;
  const z = -Math.sin( c );

  return vec.set( x, y, z );

};

// ////////////////////////////////////////////////////////////////////////
// /// SHADERS //////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
const vertexShader = `
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

const fragmentShader = `
  precision highp float;

  varying vec4 color;

  void main() {

    gl_FragColor = color;

  }
`;

// these need to be accessed inside more than one function so we'll declare them first
let container;
let scene;
let camera;
let controls;
let renderer;
let material;

function initScene() {

  // Get a reference to the container element that will hold our scene
  container = document.querySelector( '#container' );

  // create a Scene
  scene = new THREE.Scene();

  initCamera();
  initControls();
  createLights();
  initMaterials();
  initSpiral();
  initRenderer();

  renderer.setAnimationLoop( () => {

    update();
    render();

  } );

}

function initCamera() {

  camera = new THREE.PerspectiveCamera(
    35, // FOV
    container.clientWidth / container.clientHeight, // aspect
    0.1, // near clipping plane
    100, // far clipping plane
  );

  camera.position.set( -10, 0, -8 );

}

function initControls() {

  controls = new THREE.OrbitControls( camera, container );
  controls.rotateSpeed = 0.25;
  controls.zoomSpeed = 0.5;
  controls.enableDamping = true;
  controls.enablePan = false;

}

function createLights() {

  // no lights needed for this scene

}

function initMaterials() {
  material = new THREE.RawShaderMaterial( {
    uniforms: {
      time: { value: 0.0 },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent: true,

  } );
}

function initSpiral() {

  const offsets = [];
  const instanceIndex = [];

  const instancedSphericalGeo = new THREE.InstancedBufferGeometry();

  const sphereGeo = new THREE.SphereBufferGeometry( 0.015, 16, 16 );

  instancedSphericalGeo.index = sphereGeo.index;
  instancedSphericalGeo.attributes.position = sphereGeo.attributes.position;

  for ( let i = -5000; i < 5000; i++ ) {

    const t = ( 4000 + i ) * ( 5000 / 4000 );

    const position = pointOnSphericalSpiral( t );
    offsets.push( position.x, position.y, position.z );
    instanceIndex.push( ( Math.abs( i ) % 10 * 0.1 ) );
  }

  const offsetAttribute = new THREE.InstancedBufferAttribute( new Float32Array( offsets ), 3 );
  instancedSphericalGeo.addAttribute( 'offset', offsetAttribute );

  const indexAttribute = new THREE.InstancedBufferAttribute( new Float32Array( instanceIndex ), 1 );
  instancedSphericalGeo.addAttribute( 'instanceIndex', indexAttribute );

  const spiral = new THREE.Mesh( instancedSphericalGeo, material );
  spiral.scale.multiplyScalar( 0.6 );
  scene.add( spiral );
}

function initRenderer() {

  // create a WebGLRenderer and set its width and height
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  renderer.setPixelRatio( window.devicePixelRatio );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );

}

// These variables will only be used in the update function
let time = 0.0;
const clock = new THREE.Clock();

// perform any updates to the scene, called once per frame
// avoid heavy computation here
function update() {

  // needed when control.enableDamping = true;
  controls.update();

  // amount to update the spiral by each frame
  time += clock.getDelta() / 30;
  material.uniforms.time.value = time;
}

// render, or 'draw a still image', of the scene
function render() {

  renderer.render( scene, camera );

}

// a function that will be called every time the window gets resized.
// It can get called a lot, so don't put any heavy computation in here!
function onWindowResize() {

  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize( container.clientWidth, container.clientHeight );

}

window.addEventListener( 'resize', onWindowResize );

// call the init function to set everything up
initScene();


