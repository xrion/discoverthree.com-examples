function initMaterials( scene, envMap ) {

  // generally throughout these examples, we
  // don't care about color accuracy that much
  // that is, if we select 0x800080 (purple)
  // we don't mind if it ends up being 0x880088 on our screens
  // however, here we are selecting colors for our metals and
  // the color accuracy DOES matter, so we need to convert it from
  // sRGB color space to Linear color space

  // Hopefully three.js will improve its workflow soon so that this is automatic!

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
