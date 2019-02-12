import React from 'react';

import { Color } from 'three';
import ThreeApp from './vendor/App.module.js';

import createLights from './lights.js';
import loadModels from './models.js';

class Scene extends React.Component {

  // this function gets called after the <div id="container">
  // has been added by the render() function
  async componentDidMount() {

    this.app = new ThreeApp( '#container' );

    this.app.init();

    app.renderer.toneMappingExposure = 1;
    this.app.scene.background = new Color( 0x8FBCD4 );
    this.app.camera.position.set( -2.5, 2.5, 6 );

    this.app.start();

    const lights = createLights();
    this.app.scene.add( lights.ambient, lights.main );

    const models = await loadModels();
    this.app.scene.add( models.parrot, models.flamingo, models.stork );

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