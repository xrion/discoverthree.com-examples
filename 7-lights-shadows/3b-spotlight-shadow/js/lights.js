import {
  HemisphereLight,
  DirectionalLight,
} from './vendor/three/three.module.js';

export default function createLights() {

  const ambient = new HemisphereLight( 0xcccccc, 0x555555, 0.75 );

  const main = createMainLight();

  return { ambient, main };

}

function createMainLight() {

  const spotLight = new SpotLight(
    0xffffff, // color
    1, // intensity,
    0, // distance: always 0 for physically correct lights
    Math.PI / 6,
    0.75, // exponent,
    2, // decay: always 2 for physically correct lights
  );

  spotLight.power = 5000;

  spotLight.position.set( -15, 5, -15 );

  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048;
  spotLight.shadow.mapSize.height = 2048;
  spotLight.shadow.camera.near = 8;

  // note that, if you use a light.distance
  // other than 0, then that is used
  // instead of .shadow.camera.far and setting
  // this will have no effect
  spotLight.shadow.camera.far = 40;

  spotLight.shadow.camera.updateProjectionMatrix();

  return spotLight;

}
