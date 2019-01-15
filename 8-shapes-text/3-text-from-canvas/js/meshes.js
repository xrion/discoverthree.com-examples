function initMeshes( scene, canvasTexture ) {

    const material = new THREE.MeshStandardMaterial( {
        map: canvasTexture
    } );

    const boxGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
    boxMesh = new THREE.Mesh( boxGeo, material );
    boxMesh.position.x += 1.25;

    const sphereGeo = new THREE.SphereBufferGeometry( 1, 128, 128 );
    sphereMesh = new THREE.Mesh( sphereGeo, material );
    sphereMesh.position.x -= 1.25;

    scene.add( boxMesh, sphereMesh );

}
