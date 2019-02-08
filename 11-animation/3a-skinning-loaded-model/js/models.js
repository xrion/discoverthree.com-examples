// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  console.log( 'Here\'s the model we just loaded: ', model );

  const cesiumMan = model.getObjectByName( 'Cesium_Man' );
  console.log( 'The actual animated SkinnedMesh is a child of this model, called "Cesium_Man": ', cesiumMan);

  console.log( 'The other child is the array of bones that make up the skeleton: ', model.children[ 0 ] );

  // Cesium man already has a material set up correctly,
  // but we'll recreate it here for demonstration purposes
  cesiumMan.material = new THREE.MeshStandardMaterial( {

    // this needs to be set for any mesh that has skeletal
    // animation. If you leave it out, then skinning
    // will not work!
    skinning: true,

  } );

  wireframeControl( [ cesiumMan.material ] );

  const mixer = new THREE.AnimationMixer( model );

  model.userData.onUpdate = ( delta ) => {

    mixer.update( delta );

  };

  console.log( 'Finally, here are the AnimationClips that control the bones', gltf.animations )

  // this model has a whole bunch of animation clips
  // when played all together they combine into
  // a funky walk animation
  gltf.animations.forEach( ( clip ) => {

    const action = mixer.clipAction( clip );
    action.play();

  } );

  scene.add( model );

  const helper = new THREE.SkeletonHelper( model );
  scene.add( helper );

};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/CesiumMan.glb', gltf => onLoad( gltf, scene ), null, onError );

}
