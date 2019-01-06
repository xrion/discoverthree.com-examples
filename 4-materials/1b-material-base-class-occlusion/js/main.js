const app = new THREE_APP( '#container' );

function initMeshes() {

  const geometry = new THREE.CircleBufferGeometry( 8, 128 );
  const material = new THREE.MeshBasicMaterial( { color: 0x800080 } );

  mesh = new THREE.Mesh( geometry, material );

  mesh.position.set( 0, 2, -15 );

  mesh.renderOrder = 1;

  app.scene.add( mesh );

}


function loadModels() {

  // A reusable function to setup the models
  // assumes that the gltf file contains a single model
  // and up to one animation track
  const onLoad = ( gltf, position, rotation, scale ) => {

    const model = gltf.scene.children[ 0 ];

    if( position ) model.position.copy( position );
    if( rotation ) model.rotation.copy( rotation );
    if( scale ) model.scale.copy( scale );

    model.renderOrder = 0;

    model.material.colorWrite = false;

    const max = new THREE.Vector3( 8, 5, -10 );
    const min = new THREE.Vector3( -8,-5, 4 );

    let t = 0;

    model.position.x = max.x;

    if( gltf.animations[ 0 ] ) {

      const animation = gltf.animations[ 0 ];
      const mixer = new THREE.AnimationMixer( model );

      // we'll check every object in the scene for
      // this function and call it once per frame
      model.userData.onUpdate = ( delta ) => {

        mixer.update( delta );

        if( t > 1 ) {

          t = 0;
          model.position.y = THREE.Math.randFloat( min.y, max.y );
          model.position.z = THREE.Math.randFloat( min.z, max.z );

          console.log(model.position);

        }

        t += delta / 3;

        model.position.x = THREE.Math.lerp( max.x, min.x, t );

        console.log(model.position.x);

      };

      const action = mixer.clipAction( animation );
      action.play();

    }

    app.scene.add( model );

  };

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler(0, -Math.PI / 2, 0 );
  const scale = new THREE.Vector3( 0.05, 0.05, 0.05 );
  app.loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, position, rotation, scale ), null, onError );

}

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 20 );

  app.controls.target.y = 1;

  initMeshes();
  loadModels();

  app.start();

}

init();
