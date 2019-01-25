// A reusable function to setup the models
// assumes that the gltf file contains a single model
// and up to one animation track
const onLoad = ( gltf, scene ) => {

  const model = gltf.scene.children[ 0 ];

  model.position.set( -2, -2, 0 );
  model.scale.multiplyScalar( 0.025 );

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

  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, scene ), null, onError );

}
