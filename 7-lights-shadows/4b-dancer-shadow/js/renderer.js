import {
  BasicShadowMap,
  PCFShadowMap,
  PCFSoftShadowMap,
} from './vendor/three/three.module.js';


export default function setupRenderer( renderer ) {

  renderer.toneMappingExposure = 0.15;

  renderer.shadowMap.enabled = true;

  renderer.shadowMap.type = PCFShadowMap; // default

  // renderer.shadowMap.type = BasicShadowMap; //  low quality, fast
  // renderer.shadowMap.type = PCFSoftShadowMap; // higher quality, slower

  // renderer.shadowMap.autoUpdate = false;

}
