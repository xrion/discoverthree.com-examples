import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials( environments ) {

  const brassColor = 0xccb47e;
  const silverColor = 0xC5C6C8;

  const materials = {

    brass: new MeshStandardMaterial( {
      metalness: 0.9,
      roughness: 0.2,
      color: brassColor,
      envMap: environments.sky,
      envMapIntensity: 1,
    } ),

    silver: new MeshStandardMaterial( {
      metalness: 0.9,
      roughness: 0.2,
      color: silverColor,
      envMap: environments.sky,
      envMapIntensity: 1,
    } ),

    plinth: new MeshStandardMaterial( {
      metalness: 0.25,
      roughness: 0.25,
      envMap: environments.sky,
    } ),

  };

  return materials;

}
