// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, position, rotation, scale, scene ) => {

  const model = gltf.scene.children[ 0 ];

  if ( position ) model.position.copy( position );
  if ( rotation ) model.rotation.copy( rotation );
  if ( scale ) model.scale.copy( scale );

  console.log( 'And here\'s the buffer geometry from the bird model: ', model.geometry );

  model.material = new THREE.MeshBasicMaterial( {
    wireframe: true,
    morphTargets: true,
    vertexColors: THREE.VertexColors,
  } );

  // note that this model doesn't have normals, so attempting
  // to use this helper will throw an error
  // const helper = new THREE.VertexNormalsHelper( model );

  if ( gltf.animations[ 0 ] ) {

    const animation = gltf.animations[ 0 ];
    const mixer = new THREE.AnimationMixer( model );

    model.userData.onUpdate = ( delta ) => {

      mixer.update( delta );

    };

    const action = mixer.clipAction( animation );
    action.play();

  }

  scene.add( model );

};

function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const position = new THREE.Vector3( -2, -2, 0 );
  const rotation = new THREE.Euler();
  const scale = new THREE.Vector3( 0.025, 0.025, 0.025 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, position, rotation, scale, scene ), null, onError );

}
