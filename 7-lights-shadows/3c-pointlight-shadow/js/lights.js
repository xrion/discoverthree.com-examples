import {
  HemisphereLight,
  PointLight,
} from './vendor/three/three.module.js';

function createMainLight() {

  const pointLight = new PointLight(
    0xFFF0F3, // color
    1, // intensity ( overwritten by power )
    0, // distance
    2, // decay
  );

  pointLight.power = 5000;

  pointLight.position.set( 0, 12, 0 );

  pointLight.castShadow = true;
  pointLight.shadow.mapSize.width = 1024;
  pointLight.shadow.mapSize.height = 1024;
  pointLight.shadow.camera.near = 0.1;
  pointLight.shadow.camera.far = 24;

  return pointLight;

}

export default function createLights() {

  const ambient = new HemisphereLight( 0xcccccc, 0x555555, 0.75 );

  const main = createMainLight();

  return { ambient, main };

}
