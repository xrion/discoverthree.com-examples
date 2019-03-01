import {
  GLTFExporter,
} from './vendor/three/exporters/GLTFExporter.js';

import {
  saveArrayBuffer,
  saveString,
} from './utility/saveFile.js';

function exportGLTF( input, animations ) {

  const gltfExporter = new GLTFExporter();

  const options = {
    trs: document.querySelector( '#option_trs' ).checked,
    onlyVisible: document.querySelector( '#option_visible' ).checked,
    truncateDrawRange: document.querySelector( '#option_drawrange' ).checked,
    binary: document.querySelector( '#option_binary' ).checked,
    forceIndices: document.querySelector( '#option_forceindices' ).checked,
    embedImages: document.querySelector( '#option_embedImages' ).checked,
    forcePowerOfTwoTextures: document.querySelector( '#option_forcepot' ).checked,

    // optional array of animation clips
    animations,
  };

  gltfExporter.parse( input, ( result ) => {

    // save as binary .glb file
    if ( result instanceof ArrayBuffer ) {

      saveArrayBuffer( result, 'export.glb' );

    } else { // save as ASCII .gltf file

      const output = JSON.stringify( result, null, 2 );
      saveString( output, 'export.gltf' );

    }

  }, options );

}

export default function setupExport( meshes, animations ) {

  const button = document.querySelector( '#export_scene' );

  button.addEventListener( 'click', ( e ) => {

    exportGLTF( meshes.shapes, animations );

    e.preventDefault();

  } );

}
