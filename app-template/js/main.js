const app = new App( 'container' );

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

  // create a Group to hold the pieces of the train
  const train = new THREE.Group();
  app.scene.add( train );

  const bodyMaterial = new THREE.MeshStandardMaterial( {
    color: 0xff3333, // red
    flatShading: true,
  } );

  const detailMaterial = new THREE.MeshStandardMaterial( {
    color: 0x333333, // darkgrey
    flatShading: true,
  } );

  const noseGeometry = new THREE.CylinderBufferGeometry( 0.75, 0.75, 3, 12 );
  const nose = new THREE.Mesh( noseGeometry, bodyMaterial );
  nose.rotation.z = Math.PI / 2;
  nose.position.x = -1;

  const cabinGeometry = new THREE.BoxBufferGeometry( 2, 2.25, 1.5 );
  const cabin = new THREE.Mesh( cabinGeometry, bodyMaterial );
  cabin.position.set( 1.5, 0.4, 0 );

  train.add( nose, cabin );

  const wheelGeo = new THREE.CylinderBufferGeometry( 0.4, 0.4, 1.75, 16 );
  wheelGeo.rotateX( Math.PI / 2 );

  const smallWheelRear = new THREE.Mesh( wheelGeo, detailMaterial );
  smallWheelRear.position.set( 0, -0.5, 0 );

  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1;

  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2;

  const bigWheel = smallWheelRear.clone();
  bigWheel.scale.set( 2, 2, 1.25 );
  bigWheel.position.set( 1.5, -0.1, 0 );

  const wheels = [ smallWheelRear, smallWheelCenter, smallWheelFront, bigWheel ];

  wheels.forEach( ( wheel ) => {

    wheel.userData.onUpdate = ( delta ) => {
      wheel.rotation.z += delta;
    }

  } );

  train.add( ...wheels );

  const chimneyGeometry = new THREE.CylinderBufferGeometry( 0.3, 0.1, 0.5 );
  const chimney = new THREE.Mesh( chimneyGeometry, detailMaterial );
  chimney.position.set( -2, 0.9, 0 );

  train.add( chimney );

  createSmoke( chimney );

  // scale the train model to match the birds
  train.scale.multiplyScalar( 50 );

  train.position.set( 0, -150, 0 );
  train.rotation.y = Math.PI / 2;
  app.controls.target.copy( train.position );
  app.controls.target.y += 100;

}

function createSmoke( chimney ) {

  const mat = new THREE.MeshStandardMaterial( {
    color: 0xcccccc,
    transparent: true,
    opacity: 0.5
  } );

  const geo = new THREE.SphereBufferGeometry( 1, 1, 32, 32 );

  const smokeParticleA = new THREE.Mesh( geo, mat );
  smokeParticleB = smokeParticleA.clone();
  smokeParticleC = smokeParticleA.clone();

  let currentSmokeTime = 0;

  const updateSmoke = ( particle, delta, timeOffset ) => {

    currentSmokeTime += delta / 12;
    if( currentSmokeTime >= 1 ) currentSmokeTime = 0;

    particle.scale.setScalar( currentSmokeTime );

    particle.position.x = THREE.Math.lerp( 0, 5, currentSmokeTime );
    particle.position.y = THREE.Math.lerp( 0.25, 5, currentSmokeTime );

    particle.rotation.x += delta / 2;
    particle.rotation.y += delta / 2;
    particle.rotation.z += delta / 2;

    particle.material.opacity = THREE.Math.lerp( 0.5, 0, currentSmokeTime );

  }

  smokeParticleA.userData.onUpdate = ( delta ) => {

    updateSmoke( smokeParticleA, delta, 0  )

  }

  smokeParticleB.userData.onUpdate = ( delta ) => {

    updateSmoke( smokeParticleB, delta, 0.5  )

  }

  smokeParticleC.userData.onUpdate = ( delta ) => {

    updateSmoke( smokeParticleC, delta, 1  )

  }

  chimney.add( smokeParticleA, smokeParticleB, smokeParticleC );

}

function loadModels() {

  // A reusable function to setup the models
  const onLoad = ( gltf, position ) => {

    const model = gltf.scene.children[ 0 ];
    model.position.copy( position );

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    // we'll check every object in the scene for
    // this function and call it once per frame
    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const action = mixer.clipAction( animation );
    action.play();

    app.scene.add( model );

  };

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const parrotPosition = new THREE.Vector3( -50, 0, 50 );
  app.loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, parrotPosition ), null, onError );

  const flamingoPosition = new THREE.Vector3( 100, 50, -50 );
  app.loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, flamingoPosition ), null, onError );

  const storkPosition = new THREE.Vector3( 0, 150, -200 );
  app.loader.load( 'models/Stork.glb', gltf => onLoad( gltf, storkPosition ), null, onError );

}

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 500, 25, 500 );
  app.camera.far = 5000;
  app.camera.updateProjectionMatrix();

  initLights();
  initMeshes();
  loadModels();

  app.start();

  app.container.addEventListener( 'click', () => {

    // app.running ? app.stop() : app.start();

  } );

}

init();
