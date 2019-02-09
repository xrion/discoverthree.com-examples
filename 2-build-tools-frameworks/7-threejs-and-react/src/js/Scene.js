import React from 'react';

import { Color } from './vendor/three/three.module.js';
import ThreeApp from './vendor/App.module.js';

import initLights from './lights.js';
import loadModels from './models.js';

class Scene extends React.Component {

  // this function gets called after the <div id="container">
  // has been added by the render() function
  componentDidMount() {

    this.app = new ThreeApp( '#container' );

    this.app.init();

    this.app.scene.background = new Color( 0x8FBCD4 );
    this.app.camera.position.set( -2.5, 2.5, 7.5 );

    initLights( this.app.scene );

    loadModels( this.app.scene );

    this.app.start();

  }

  componentWillUnmount(){

    this.app.stop()
    this.mount.removeChild(this.app.renderer.domElement)

  }

  render() {
    return (
      <div
        id="container"
        ref={(mount) => { this.mount = mount }}
      />
    );
  }
}

export default Scene;