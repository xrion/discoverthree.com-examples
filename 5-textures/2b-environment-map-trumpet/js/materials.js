function initMaterial( scene ) {

  const brassColor = 0xB5A642;
  const silverColor = 0xC4CACE;

  const materials = {

    brassLambert: new THREE.MeshLambertMaterial( { color: brassColor } ),
    brassPhong: new THREE.MeshPhongMaterial( { color: brassColor } ),
    brassStandard: new THREE.MeshStandardMaterial( { metalness: 0.7, roughness: 0.3, color: brassColor } ),

    silverLambert: new THREE.MeshLambertMaterial( { color: silverColor } ),
    silverPhong: new THREE.MeshPhongMaterial( { color: silverColor } ),
    silverStandard: new THREE.MeshStandardMaterial( {  metalness: 0.7, roughness: 0.3, color: silverColor } ),

  };

  const envMaps = loadEnvMaps();

  setupMaterialControls( materials, envMaps, scene  );

  return materials;

}