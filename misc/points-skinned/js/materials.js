import {
  PointsMaterial,
} from './vendor/three/three.module.js';

export default function createMaterials() {

  const surface = new PointsMaterial( { size: 0.05, color: 0xffffff, morphTargets: true } );
  surface.skinning = true;

  const joints = new PointsMaterial( { size: 0.05, color: 0x000000, morphTargets: true } );
  joints.skinning = true;

  const onBeforeCompile = ( shader ) => {

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

  surface.onBeforeCompile = joints.onBeforeCompile = onBeforeCompile;

  return {

    surface,
    joints,

  };

}
