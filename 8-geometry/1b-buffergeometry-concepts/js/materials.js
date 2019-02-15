import {
  MeshBasicMaterial,
  VertexColors,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  return {

    wireframe: new MeshBasicMaterial( { color: 0x800080, wireframe: true } ),

    horse: new MeshBasicMaterial( {
      wireframe: true,
      morphTargets: true,
      vertexColors: VertexColors,
    } ),

  };

}
