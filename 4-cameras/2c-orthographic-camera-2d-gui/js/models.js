// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene, sceneGUI ) => {

  const model = gltf.scene.children[ 0 ];
  // model.geometry.center()
  const modelGUI = model.clone();

  modelGUI.scale.set( 4, 4, 4 );
  modelGUI.rotation.set( Math.PI / 2, -Math.PI / 2, 0 );
  modelGUI.material = new THREE.MeshBasicMaterial( {
    color: 0x00ff00,
    morphTargets: true,
  } );

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  modelGUI.material.color.convertSRGBToLinear();

  // model.position.y = 2;

  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );
    const mixerGUI = new THREE.AnimationMixer( modelGUI );

    // we'll want to make the horse animate while it's moving
    // we'll need access to the mixer for that, so we'll store
    // a reference to it in userData
    model.userData.mixer = mixer;
    modelGUI.userData.mixer = mixerGUI;

    const action = mixer.clipAction( animation );
    action.play();

    const actionGUI = mixerGUI.clipAction( animation );
    actionGUI.play();

  }

  // we'll use these to reset the model's position later
  model.userData.initialPosition = model.position.clone();
  model.userData.initialRotation = model.rotation.clone();;

  // and we'll do the same for the model's proxy
  modelGUI.userData.initialPosition = modelGUI.position.clone();
  modelGUI.userData.initialRotation = modelGUI.rotation.clone();

  initControls( model, modelGUI );

  scene.add( model );
  sceneGUI.add( modelGUI );

};

function loadModels( scene, sceneGUI ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, scene, sceneGUI ), null, onError );

}
