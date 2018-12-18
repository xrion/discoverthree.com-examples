const app = new THREE_APP( '#container' );
const container = document.querySelector( '#container' );
let orthographicCamera, perspectiveCamera;

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  app.scene.add( ambientLight );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  app.scene.add( frontLight, backLight );

}

function initMeshes() {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 5, 5, 5 );

  const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );

  for( let i = 0; i < 100; i++ ) {

    const mesh = new THREE.Mesh( geometry, material );

    mesh.position.set(
      THREE.Math.randFloatSpread( -100, 100 ),
      THREE.Math.randFloatSpread( -100, 100 ),
      THREE.Math.randFloatSpread( -100, 100 )
    );

    const factor = THREE.Math.randFloat( -1, 1 );

    mesh.userData.onUpdate = function ( delta ) {

      mesh.rotation.x += delta * factor;
      mesh.rotation.y += delta * factor;
      mesh.rotation.z += delta * factor;

    }

    app.scene.add( mesh );

  }



}

function initOrthographicCamera() {

  const left = - container.clientWidth / 2;
  const right = container.clientWidth / 2;
  const top = container.clientHeight / 2;
  const bottom = - container.clientHeight / 2;

  orthographicCamera =  new THREE.OrthographicCamera( left, right, top, bottom, 0.1, 100 );

  new THREE.OrbitControls( orthographicCamera );

}

function onWindowResizeOrtho () {

  if( ! orthographicCamera ) return;

  orthographicCamera.left = - container.clientWidth / 2;
  orthographicCamera.right = container.clientWidth / 2;
  orthographicCamera.top = container.clientHeight / 2;
  orthographicCamera.bottom = - container.clientHeight / 2;

  orthographicCamera.updateProjectionMatrix();

}

window.addEventListener( 'resize', onWindowResizeOrtho );

function initCameraToggle() {

  const info = document.querySelector( '#active-camera' );
  const button = document.querySelector( '#toggle-camera' );

  button.addEventListener( 'click', () => {

    if( app.camera.isOrthographicCamera  ) {
      app.camera = perspectiveCamera;
      info.textContent = 'Perspective';
    }
    else {
      app.camera = orthographicCamera;
      info.textContent = 'Orthographic';
    }

  } );

}

function init() {

  app.init();

  perspectiveCamera = app.camera;

  initOrthographicCamera();

  app.camera = orthographicCamera;

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 100 );

  app.scene.add( new THREE.CameraHelper( app.camera ) );


  initLights();
  initMeshes();

  initCameraToggle();

  app.start();

}

init();
