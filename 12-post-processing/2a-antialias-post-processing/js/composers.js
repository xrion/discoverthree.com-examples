import {
  EffectComposer,
} from './vendor/three/postprocessing/EffectComposer.js';

export default function createComposers( renderer ) {

  return {

    noAA: new EffectComposer( renderer ),
    SSAA: new EffectComposer( renderer ),
    TAA: new EffectComposer( renderer ),
    FXAA: new EffectComposer( renderer ),
    SMAA: new EffectComposer( renderer ),

  };

}
