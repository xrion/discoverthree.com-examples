function exportGLTF( input ) {

  const gltfExporter = new THREE.GLTFExporter();

  const options = {
    trs: document.getElementById( 'option_trs' ).checked,
    onlyVisible: document.getElementById( 'option_visible' ).checked,
    truncateDrawRange: document.getElementById( 'option_drawrange' ).checked,
    binary: document.getElementById( 'option_binary' ).checked,
    forceIndices: document.getElementById( 'option_forceindices' ).checked,
    embedImages: document.getElementById( 'option_embedImages' ).checked,
    forcePowerOfTwoTextures: document.getElementById( 'option_forcepot' ).checked,
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


function setupExportControl( input ) {

  const button = document.querySelector( '#export_scene' );

  button.addEventListener( 'click', ( e ) => {

    exportGLTF( input );

    e.preventDefault();

  } );

}
