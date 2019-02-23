import React from 'react';

import createApp from './app.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';

import setupAnimation from './animation.js';

class Scene extends React.Component {

  // this function gets called after the <div id="container">
  // has been added by the render() function
  async componentDidMount() {

    this.app = createApp();
    this.app.start();

    const lights = createLights();

    const geometries = createGeometries();

    const materials = createMaterials();
    const meshes = createMeshes( geometries, materials );

    const models = await loadModels( materials );

    setupAnimation( models );

    this.app.scene.add(

      lights.ambient,
      lights.main,

      meshes.sphere,

      models.parrot,
      models.flamingo,
      models.stork,

    );

  }

  componentWillUnmount(){

    this.app.stop()
    this.mount.removeChild(this.app.renderer.domElement)

  }

  render() {
    return (
      <div
        id="scene-container"
        ref={(mount) => { this.mount = mount }}
      />
    );
  }
}

export default Scene;