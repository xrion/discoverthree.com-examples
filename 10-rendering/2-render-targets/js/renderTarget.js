import {
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderTarget,
} from './vendor/three/three.module.js';

export default function setupRenderTarget( app ) {

  // first, set up an object to hold all our render target stuff
  const RT = {};

  // we need a scene and a camera for the render target
  // since a render target is basically a normal scene that
  // gets rendered onto a texture instead of onto our screen
  // We'll reuse our main renderer, though
  RT.scene = new Scene();
  RT.scene.background = new Color( 0xff0000 );

  // While you can reuse the main camera too,
  // in practice you will probably run into problems while doing that
  // for example, weird things will happen when zooming with the OrbitControls

  // the setup is the same as for a normal perspective camera, but we are using an
  // aspect ratio of 1 since our render target is square (1024x1024)
  RT.camera = new PerspectiveCamera( 35, 1, 1, 10 );
  RT.camera.position.z = 5;

  RT.target = new WebGLRenderTarget(
    1024, // width
    1024, // height
  );

  // You could enable this for an addition performance gain
  // but only if your sceneRT doesn't contain any overlapping geometry
  // RT.target.depthBuffer = false;

  // overwrite the app's default render function
  app.render = () => {

    // first, render to the target
    // this rendering is available in RT.target.texture
    // in this example, we are using that as the
    // texture map for the box
    app.renderer.render( RT.scene, RT.camera, RT.target, true );

    // now do the normal render to the screen
    app.renderer.render( app.scene, app.camera );

  };

  // it can be kind of hard to set up the render target
  // however, remember that you can always just render the target's
  // scene and camera to the screen to get it set up correctly!
  // app.render = () => {

  //   app.renderer.render( RT.scene, RT.camera );

  // };

  return RT;

}
