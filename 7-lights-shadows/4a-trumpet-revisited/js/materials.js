function initMaterials( scene, envMap ) {

  // remember to convert the color to linear so that it looks correct
  // by the time it ends up on our screens!
  const brassColor = new THREE.Color( 0xB5A642 ).convertSRGBToLinear();
  const silverColor = new THREE.Color( 0xC4CACE ).convertSRGBToLinear();

  const materials = {

    brass: new THREE.MeshStandardMaterial( {
      metalness: 1,
      roughness: 0.05,
      color: brassColor,
      envMap,
      envMapIntensity: 1, // default is 1
    } ),

    silver: new THREE.MeshStandardMaterial( {
      metalness: 1,
      roughness: 0.05,
      color: silverColor,
      envMap,
      envMapIntensity: 1,
    } ),

    plinth: new THREE.MeshStandardMaterial( {
      metalness: 0.25,
      roughness: 0.25,
      envMap,
    } ),

  };

  return materials;

}
