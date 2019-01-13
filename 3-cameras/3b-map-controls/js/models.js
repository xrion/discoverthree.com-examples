
function loadModels( scene, loader ) {

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  const rotation = new THREE.Euler( 0, Math.PI / 2, 0 );

  const positionA = new THREE.Vector3( 0, 0.5, -10 );
  const scaleA = new THREE.Vector3( 0.0175, 0.0175, 0.0175 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionA, rotation, scaleA, scene ), null, onError );

  const positionB = new THREE.Vector3( 0, 0.5, -8 );
  const scaleB = new THREE.Vector3( 0.015, 0.015, 0.015 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionB,rotation, scaleB, scene ), null, onError );

  const positionC = new THREE.Vector3( 0, 0.5, -6.25 );
  const scaleC = new THREE.Vector3( 0.0125, 0.0125, 0.0125 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionC,rotation, scaleC, scene ), null, onError );

  const positionD = new THREE.Vector3( 0, 0.5, -4.75 );
  const scaleD = new THREE.Vector3( 0.0075, 0.0075, 0.0075 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionD,rotation, scaleD, scene ), null, onError );

  const positionE = new THREE.Vector3( 0, 0.5, -3.5 );
  const scaleE = new THREE.Vector3( 0.005, 0.005, 0.005 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionE,rotation, scaleE, scene ), null, onError );

  const positionF = new THREE.Vector3( 0, 0.5, -2.5 );
  const scaleF = new THREE.Vector3( 0.0025, 0.0025, 0.0025 );
  loader.load( 'models/Horse.glb', gltf => onLoad( gltf, positionF,rotation, scaleF, scene ), null, onError );

}