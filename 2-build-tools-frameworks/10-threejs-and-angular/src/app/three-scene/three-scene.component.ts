import { Component, OnInit } from '@angular/core';

import { Color } from './vendor/three/three.module.js';
import ThreeApp from './vendor/App.module.js';

import initLights from './lights.js';
import loadModels from './models.js';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})
export class ThreeSceneComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const app = new ThreeApp( '#container' );

    app.init();

    app.scene.background = new Color( 0x8FBCD4 );
    app.camera.position.set( -2.5, 2.5, 7.5 );

    initLights( app.scene );
    loadModels( app.scene );

    app.start();

  }

}
