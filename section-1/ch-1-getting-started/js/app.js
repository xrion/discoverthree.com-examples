// create a Scene
const scene = new THREE.Scene();

// Create a Camera
const fov = 35; // AKA Field of View
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1; // the near clipping plane
const far = 1000; // the far clipping plane

const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

// every object is initially created at ( 0, 0, 0 )
// we'll move the camera back a bit so that we can view the scene
camera.position.set( 0, 0, 40 );

// create a geometry
const geometry = new THREE.TorusKnotBufferGeometry( 5, 1 );

// create a default (white) Basic material
const material = new THREE.MeshBasicMaterial();

// create a Mesh containing the geometry and material
const mesh = new THREE.Mesh( geometry, material );

// add the mesh to the scene
scene.add( mesh );

// set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

// add the automatically created <canvas> element to the page
document.querySelector( '#container' ).appendChild( renderer.domElement );

// render, or 'create a still image', of the scene
renderer.render( scene, camera );
