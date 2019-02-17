function setupSimpleRotation( object ) {

  object.userData.onUpdate = ( delta ) => {

    object.rotation.x -= delta / 8;
    object.rotation.y += delta / 6;
    object.rotation.z -= delta / 5;

  };
}

export default function setupAnimation( meshes ) {

  setupSimpleRotation( meshes.spiral );

}
