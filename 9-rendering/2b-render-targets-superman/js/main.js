const app = new THREE_APP( '#container' );

// We need to create a separate scene and camera for the RenderTarget
const rtScene = new THREE.Scene();
rtScene.background = new THREE.Color( 0x800080 );

// You'll need to set up a seperate camera as well.
// You COULD technically reuse the main camera,
// but you'll probably run into problems
// For example, weird things will happen with the zoom if we
// use orbit controls
const rtCamera = new THREE.PerspectiveCamera( 35, 1, 1, 100 );

const target = initRenderTarget();

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  app.scene.add( ambientLight );
  rtScene.add( ambientLight.clone() );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  app.scene.add( frontLight, backLight );
  rtScene.add( frontLight.clone(), backLight.clone() );

}

function initMeshes() {

  // create a geometry
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 0.05 );

  const material = new THREE.MeshStandardMaterial( {
    color: 0x800080,
    transparent: true,
    opacity: 0.75,
    // side: THREE.DoubleSide,
    map: target.texture
  } );

  const mesh = new THREE.Mesh( geometry, material );

  mesh.userData.onUpdate = ( delta ) => {
    mesh.rotation.x -= delta / 2;
    mesh.rotation.y -= delta / 2;;
    mesh.rotation.z += delta / 2;;
  }

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

    let mixer;
    if( gltf.animations[ 0 ] ) {

      const animation = gltf.animations[ 0 ];
      mixer = new THREE.AnimationMixer( model );

      // we can't do this since the model is not in the scenegraph
      // model.userData.onUpdate = ( delta ) => {

      //   mixer.update( delta );

      // }

      // however, we can set up an invisible dummy object and put the function there
      // const dummy = new THREE.Group();
      // dummy.userData.onUpdate = ( delta ) => {

      //   mixer.update( delta );

      // }
      // app.scene.add( dummy );

      const action = mixer.clipAction( animation );
      action.play();

    }

    rtScene.add( model );

    // pick a pose from the animation
    mixer.update( 2.9 );

  };

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const position = new THREE.Vector3( 1.25, -2.5, -0.25 );
  const rotation = new THREE.Euler( Math.PI / 8, 0, Math.PI / 7 );
  const scale = new THREE.Vector3( 2.5, 2.5, 2.5 );
  app.loader.load( 'models/Samba Dancing.glb', gltf => onLoad( gltf, position, rotation, scale ), null, onError );

}


function initRenderTarget() {

  const target = new THREE.WebGLRenderTarget( 1024, 1024 );
  // target.texture.format = THREE.RGBAFormat;
  // target.texture.minFilter = THREE.NearestFilter;
  // target.texture.magFilter = THREE.NearestFilter;
  // target.texture.generateMipaps = false;
  // target.stencilBuffer = false;
  // target.depthBuffer = false;

  console.log( 'Here\'s the target you just created: ', target );
  return target;

}

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 1, 0, 4 );
  rtCamera.position.z = 5;

  initLights();
  initMeshes();
  loadModels();

  function renderToTarget( rt ) {

    // set the renderer and camera to the render target's size
    app.renderer.setSize( rt.width, rt.height );

    app.renderer.render( rtScene, rtCamera, rt );

    // reset the renderer's size
    app.renderer.setSize( app.container.clientWidth, app.container.clientHeight );


  }

  // overwrite the app's default render function
  app.render = () => {

    renderToTarget( target );

    // now do the normal render
    app.renderer.render( app.scene, app.camera );

  }

  app.start();

}

init();
