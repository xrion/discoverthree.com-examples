export default function setupAnimation( points ) {

  points.sphere.userData.onUpdate = ( delta ) => {

    points.sphere.rotation.y -= delta / 3;

  };

}
