import {
  MeshStandardMaterial,
} from './vendor/three/three.module.js';

export default function setupMaterials( models, environments, textures ) {

  for ( const model of models.sculptures.children ) {

    // console.log(model);

    if ( model.material.name.includes( 'ao_map' ) ) {

      // model.material.aoMap = textures.ao;

    }

  }

  return {

    plinth: new MeshStandardMaterial( {
      metalness: 0.5,
      roughness: 0.5,
      envMap: environments.sky,
      envMapIntensity: 5,
    } ),

  };

}
