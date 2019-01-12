function initMaterial() {

  const silverColor = 0xC4CACE;
  const brassColor = 0xB5A642;

  const materials = {
    silver: {
      lambert: new THREE.MeshLambertMaterial( { color: silverColor } ),
      phong: new THREE.MeshPhongMaterial( { color: silverColor } ),
      standard: new THREE.MeshLambertMaterial( { color: silverColor } ),
    },
    brass: {
      lambert: new THREE.MeshLambertMaterial( { color: brassColor } ),
      phong: new THREE.MeshPhongMaterial( { color: brassColor } ),
      standard: new THREE.MeshStandardMaterial( { color: brassColor } ),
    }
  }

  return materials;

}