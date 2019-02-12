export default function setupAnimation( meshes ) {


  // this won't work since our App is only calling
  // onUpdate functions for objects in the main app.scene
  // meshes.torusKnot.userData.onUpdate = ( delta ) => {
  //   torusKnot.rotation.x -= delta / 2;
  //   torusKnot.rotation.y -= delta / 2;
  //   torusKnot.rotation.z += delta / 2;
  // }

  // so we can hijack the onUpdate function from a different
  // function. It's a little hacky, but it's fine for this simple example
  meshes.box.userData.onUpdate = ( delta ) => {

    meshes.box.rotation.y -= delta / 5;

    meshes.torusKnot.rotation.x -= delta / 2;
    meshes.torusKnot.rotation.y -= delta / 2;
    meshes.torusKnot.rotation.z += delta / 2;

  };

}
