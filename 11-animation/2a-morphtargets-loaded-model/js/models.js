// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  // the model already has a material set up correctly,
  // but we'll recreate it here  for demonstration purposes
  model.material = new THREE.MeshStandardMaterial( {

    color: 0xff0000,

    // this needs to be set for any mesh that has
    // morph targets. If you leave it out, then morphing
    // will not work!
    morphTargets: true,

    // set this if the mesh also has morph normals
    // our mesh doesn't, so we can leave it at false
    // morphNormals: true

    // finally, since we are not morphing the normals here,
    // lighting will not work smoothly so we'll use flatshading
    flatShading: true,

  } );

  initMorphControls( model );

  scene.add( model );

  console.log( 'Here\'s the model we just loaded: ', model );


};

function loadModels( scene ) {

  const loader = new THREE.GLTFLoader();

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/cube_morph.glb', gltf => onLoad( gltf, scene ), null, onError );

}
