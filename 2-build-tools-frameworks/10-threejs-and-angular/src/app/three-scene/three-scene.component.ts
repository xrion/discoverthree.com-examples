import { Component, OnInit } from '@angular/core';

import { Color } from './vendor/three/three.module.js';
import ThreeApp from './vendor/App.module.js';

import initScene from './scene.js';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})
export class ThreeSceneComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    initScene();

  }

}
