import {
  BackSide,
  NoBlending,
  DoubleSide,
  // MeshBasicMaterial,
  MeshStandardMaterial,
  PointsMaterial,
  ShaderLib,
  ShaderMaterial,
  UniformsUtils,
  UniformsLib,
  RGBADepthPacking,
  ShaderChunk,
  Vector3,
} from './vendor/three/three.module.js';

function replaceThreeChunkFn( a, b ) {
  return ShaderChunk[b] + '\n';
}

function shaderParse( glsl ) {
  return glsl.replace( /\/\/\s?chunk\(\s?(\w+)\s?\);/g, replaceThreeChunkFn );
}
//https://alteredqualia.com/three/examples/webgl_shadowmap_particles.html
// https://discourse.threejs.org/t/shadermaterial-particles-not-receiving-shadows/3962
function createPointsCustomDepthMaterial() {

  console.log( ShaderLib );

  return new ShaderMaterial( {

    uniforms: {},

    vertexShader:
      `varying vec2 vUv;

      void main() {

      vUv = uv;

      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

      gl_Position = projectionMatrix * mvPosition;

      }`,

    fragmentShader:
      `#include <packing>
      varying vec2 vUv;
      uniform sampler2D texture;

      void main() {

      vec4 pixel = texture2D( texture, vUv );

      if (pixel.a < 0.5)//transparency cutout, no blending
      {
      discard;
      }
      gl_FragData[ 0 ] = packDepthToRGBA( gl_FragCoord.z );

      }`,
    depthTest: false,
    side: DoubleSide,
  } );
}

function createSkinnedPointsMaterial( color ) {

  const material = new PointsMaterial( { size: 0.025, color, morphTargets: true } );
  material.skinning = true;

  material.onBeforeCompile = ( shader ) => {

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <morphtarget_pars_vertex>',
        `
        $&
        #include <skinning_pars_vertex>
        `,
      )
      .replace(
        '#include <color_vertex>',
        `
        $&
        #include <skinbase_vertex>
        `,
      )
      .replace(
        '#include <morphtarget_vertex>',
        `
        $&
        #include <skinning_vertex>
        `,
      );

  };

  return material;

}

export default function createMaterials( environments ) {
  return {

    surface: createSkinnedPointsMaterial( 0xffffff ),
    surfaceClone: new PointsMaterial( { size: 0.025, color: 0x000000 } ),
    joints: createSkinnedPointsMaterial( 0x000000 ),

    pointsCustomDepth: createPointsCustomDepthMaterial(),

    white: new MeshStandardMaterial( {
      metalness: 0,
      roughness: 0.8,
      // envMap: environments.sky,
    } ),

    blue: new MeshStandardMaterial( {
      color: 0x0000cc,
      metalness: 1,
      envMap: environments.sky,
      side: DoubleSide,
    } ),

  };

}
