function setupSimpleRotation( targets ) {

  targets.front.userData.onUpdate = ( delta ) => {

    targets.front.rotation.y += delta / 2;
    targets.front.rotation.z -= delta / 4;

    targets.middle.rotation.x += delta / 6;
    targets.middle.rotation.z -= delta / 2;

    targets.rear.rotation.x += delta / 3;
    targets.rear.rotation.y -= delta / 8;

  };

}


export default function setupAnimations( meshes ) {

  setupSimpleRotation( meshes.targets );

}
