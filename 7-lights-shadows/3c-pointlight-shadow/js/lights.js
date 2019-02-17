import {
  HemisphereLight,
  PointLight,
} from './vendor/three/three.module.js';

function createHemisphereLight() {

  return new HemisphereLight( 0xddeeff, 0x0f0e0d, 5 );

}

function creatPointLight() {

  const point = new PointLight(
    0xFFF0F3, // color
    1, // intensity ( overwritten by power )
    0, // distance
    2, // decay
  );

  point.power = 5000;

  point.position.set( 0, 12, 0 );

  point.castShadow = true;
  point.shadow.mapSize.width = 1024;
  point.shadow.mapSize.height = 1024;
  point.shadow.camera.near = 0.1;
  point.shadow.camera.far = 24;

  console.log(point.shadow.camera);

  return point;

}

export default function createLights() {

  return {
    ambient: createHemisphereLight(),
    main: creatPointLight(),
  };

}
