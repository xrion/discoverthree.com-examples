import {
  Mesh,
} from './vendor/three/three.module.js';


function createPlinth( geometries, materials ) {

  const plinth = new Mesh( geometries.truncatedCone, materials.white );
  plinth.receiveShadow = true;

  return plinth;

}

export default function createMeshes( geometries, materials ) {

  const box = new Mesh( geometries.box, materials.blue );
  console.log(box);
  box.castShadow = true;
  box.position.y = 1;

  return {

    plinth: createPlinth( geometries, materials ),
    box,

  };

}
