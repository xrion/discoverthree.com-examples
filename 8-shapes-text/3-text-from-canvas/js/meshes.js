function initMeshes( scene, texture ) {

    const material = new THREE.MeshStandardMaterial( { map: texture } );

    const boxGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
    boxMesh = new THREE.Mesh( boxGeo, material );
    boxMesh.position.x += 1.25;

    const knotGeo = new THREE.SphereBufferGeometry( 1, 128, 128 );
    knotMesh = new THREE.Mesh( knotGeo, material );
    knotMesh.position.x -= 1.25;

    scene.add( boxMesh, knotMesh );

}
