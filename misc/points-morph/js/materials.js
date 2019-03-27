import {
  PointsMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  const surface = new PointsMaterial( { size: 0.025, color: 0xffffff, morphTargets: true } );

  const joints = new PointsMaterial( { size: 0.025, color: 0x000000, morphTargets: true } );

  return {

    surface,
    joints,

  };

}
