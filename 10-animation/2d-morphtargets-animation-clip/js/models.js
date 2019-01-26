// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  setupAnimation( model );

  scene.add( model );


};

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  loader.load( 'models/cube_morph.glb', gltf => onLoad( gltf, scene ), null, onError );

}
