function setupSimpleRotation( meshes ) {

  meshes.meshA.traverse( ( child ) => {

    if ( child.isMesh ) {

      child.userData.onUpdate = ( delta ) => {

        child.rotation.z += delta / 2;

      };

    }
  } );


}

export default function setupAnimation( meshes ) {

  setupSimpleRotation( meshes );

}
