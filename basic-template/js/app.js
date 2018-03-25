let camera;
let renderer;
let scene;

function init() {
  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

  scene = new THREE.Scene();

  const fov = 35;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1; // the near clipping plane
  const far = 1000; // the far clipping plane

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

  camera.position.set( 0, 0, 40 );

  const controls = new THREE.OrbitControls( camera );

  // create a global illumination light
  const ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
  scene.add( ambientLight );

  const pointLight = new THREE.PointLight( 0xffffff, 1.0 );
  pointLight.position.set( 0, 0, 20 );
  scene.add( pointLight );
}

function initMeshes() {
  const boxGeometry = new THREE.BoxBufferGeometry( 15, 15, 15 );
  const boxMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const boxMesh = new THREE.Mesh( boxGeometry, boxMaterial );

  scene.add( boxMesh );
}

function animate() {
  requestAnimationFrame( animate );

  renderer.render( scene, camera );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener( 'resize', onWindowResize );

init();
initMeshes();

animate();
