import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.js';

export default function createApp() {

  const app = new App( { container: '#scene-container' } );

  this.app.init();

  this.app.renderer.toneMappingExposure = 1;
  this.app.scene.background = new Color( 0x8FBCD4 );

  this.app.camera.position.set( -2.5, 2.5, 8 );
  this.app.controls.target.y = 1;

  return app;

}
