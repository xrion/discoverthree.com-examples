import setupAnimationClips from './setupAnimationClips.js';

export default function setupAnimation( models ) {

  for ( const model of Object.values( models ) ) {

    setupAnimationClips( model );

  }

}
