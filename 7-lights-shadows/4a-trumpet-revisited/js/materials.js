import {
  Color,
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( environments ) {

  const brassColor = new Color( 0xB5A642 ).convertSRGBToLinear();
  const silverColor = new Color( 0xC4CACE ).convertSRGBToLinear();


  return {

    brass: new MeshStandardMaterial( {
      metalness: 1,
      roughness: 0.2,
      color: brassColor,
      envMap: environments.sky,
      envMapIntensity: 1,
    } ),

    silver: new MeshStandardMaterial( {
      metalness: 1,
      roughness: 0.2,
      color: silverColor,
      envMap: environments.sky,
      envMapIntensity: 1,
    } ),

    plinth: new MeshStandardMaterial( {
      metalness: 0,
      roughness: 0,
      envMap: environments.sky,
      // envMapIntensity: 1.5,
    } ),

  };

}
