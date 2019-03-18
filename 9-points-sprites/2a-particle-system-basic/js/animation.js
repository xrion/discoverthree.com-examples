function setupSimpleRotation( object ) {

  object.userData.onUpdate = ( delta ) => {

    object.rotation.y -= delta / 3;

  };

}

export default function setupAnimation( points ) {

  setupSimpleRotation( points.sphere );

}
