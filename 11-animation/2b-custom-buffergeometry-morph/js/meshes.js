import {
  Mesh,
  MeshBasicMaterial,
  sRGBEncoding
  TextureLoader,
} from './vendor/three/three.module.js';

export default function createMeshes() {

  const geometry = createGeometry();
  const geometryIndexed = createGeometryIndexed();

  const map = new TextureLoader().load( 'textures/phoenix_park_dublin.jpg' );
  map.encoding = sRGBEncoding;

  const materialA = new MeshBasicMaterial( {
    map,
    wireframe: false,
    morphTargets: true,
  } );

  // we can't use the same material on two meshes with
  // different morph targets
  const materialB = materialA.clone();

  wireframeControl( [ materialA, materialB ] );

  const leftQuad = new Mesh( geometry, materialA );
  leftQuad.position.x -= 2;

  const rightQuad = new Mesh( geometryIndexed, materialB );
  rightQuad.position.x += 2;

  return { leftQuad, rightQuad };

}
