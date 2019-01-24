import {
  CircleBufferGeometry,
  MeshBasicMaterial,
  Mesh,
} from './vendor/three.module.js';

export default function initMeshes(scene) {
  const geometry = new CircleBufferGeometry(8, 128);
  const material = new MeshBasicMaterial({ color: 0x800080 });

  const mesh = new Mesh(geometry, material);

  mesh.position.set(0, 0, -15);

  mesh.renderOrder = 1;

  scene.add(mesh);

  return mesh;
}
