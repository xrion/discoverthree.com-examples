const app = new THREE_APP( '#container' );

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  app.scene.add( ambientLight );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  app.scene.add( frontLight, backLight );

}

function loadModels() {

  // A reusable function to setup the models
  // assumes that the gltf file contains a single model
  // and up to one animation track
  const onLoad = ( gltf ) => {

    const model = gltf.scene.children[ 0 ];
    model.scale.set(  0.05, 0.05, 0.05 );
    // model.material = new THREE.MeshBasicMaterial( { morphTargets: true, flatShading: true, vertexColors: true } );

    for( let i = 0; i < 100; i++ ) {

      bird = model.clone();

      const x = THREE.Math.randFloatSpread( -20, 20 );
      const y = THREE.Math.randFloatSpread( -20, 20 );
      const z = THREE.Math.randFloatSpread( -20, 20 );

      bird.position.set( x, y, z );

      if( gltf.animations[ 0 ] ) {

        const animation = gltf.animations[ 0 ];
        const mixer = new THREE.AnimationMixer( bird );

        // we'll check every object in the scene for
        // this function and call it once per frame
        bird.userData.onUpdate = ( delta ) => {

          mixer.update( delta );

        };

        const action = mixer.clipAction( animation );
        action.play();

      }



      app.scene.add( bird );

    }



  };

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  app.loader.load( 'models/Parrot.glb', gltf => onLoad( gltf ), null, onError );

}

function initFOVSlider() {

  const slider = document.querySelector( '#fov-slider' );
  const value = document.querySelector( '#fov-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    app.camera.fov = parseFloat( slider.value );
    app.camera.updateProjectionMatrix();

    e.preventDefault();

  } );

}

function initNearSlider() {

  const slider = document.querySelector( '#near-slider' );
  const value = document.querySelector( '#near-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    app.camera.near = parseFloat( slider.value );
    app.camera.updateProjectionMatrix();

    e.preventDefault();

  } );

}

function initFarSlider() {

  const slider = document.querySelector( '#far-slider' );
  const value = document.querySelector( '#far-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;
    app.camera.far = parseFloat( slider.value );
    app.camera.updateProjectionMatrix();

    e.preventDefault();

  } );

}

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 5, 5, 10 );

  // reduce the far clipping plane from the default of 100
  // so that we can see its effect more easily
  app.camera.far = 100;
  app.camera.updateProjectionMatrix();

  app.controls.target.y = 1;

  initLights();
  loadModels();

  initFOVSlider();
  initNearSlider();
  initFarSlider();



  app.start();

}

init();
