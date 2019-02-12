import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';

import createGeometries from './geometries.js';
import createMaterials from './materials.js';
import createMeshes from './meshes.js';

import loadModels from './models.js';
import loadTextures from './textures.js';

import setupAnimation from './animation.js';

async function initScene() {

  // Step 1: create you app
  const app = new App( '#scene-container' );

  // Step 2: set app flags
  app.alpha = false;
  app.antialias = true;
  app.gammaOutput = true;
  // etc

  // Step 3: create custom app.renderer, app.camera, app.scene or app.controls
  // app.camera = new OrthographicCamera( ...

  // Step 4: call app.init()
  // this creates the renderer, scene, camera, and controls
  // unless you have specified custom version above
  app.init();

  // Step 5: setup renderer, scene, camera, controls
  // In general this is just a couple of lines,
  // we'll move them into separate function in cases where
  // they are getting longer (e.g. setupRenderer, setupControl,...)

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x8FBCD4 );

  app.camera.position.set( -2.5, 2.5, 8 );
  app.controls.target.y = 1;

  // Step 5: start the render loop
  app.start();

  // Step 6: create or load thing you want to add
  // to your scene: lights, meshes, load models etc.

  const lights = createLights();

  const geometries = createGeometries();

  const textures = loadTextures();
  const materials = createMaterials( textures );
  const meshes = createMeshes( geometries, materials );

  const { models, animations } = await loadModels( materials );

  // Step 7: setup animations
  setupAnimation( meshes, models, animations );

  // Step 8: add everything to your scene
  app.scene.add(

    lights.ambient,
    lights.main,

    meshes.box,

    models.parrot,

  );

  // Step 9: Sit back and enjoy your beautiful creation!

  /*
                      "M,        .mM"
                      IMIm    ,mIM"
                      ,MI:"IM,mIMm
          "IMmm,    ,IM::::IM::IM,          ,m"
              "IMMIMMIMm::IM:::::IM""==mm ,mIM"
          __      ,mIM::::::MIM:::::::IM::::mIMIM"
          ,mMIMIMIIMIMM::::::::mM::::::::IMIMIMIMMM"
          IMM:::::::::IMM::::::M::::::::IIM:::::::MM,
          "IMM::::::::::MM:::M:::::::IM:::::::::::IM,
          "IMm::::::::IMMM:::::::IM:::::::::::::IM,
          "Mm:::::::::IM::::::MM::::::::::::::::IM,
          IM:::::::::IM::::::MM::::::::::::::::::IM,
          MM::::::::IM:::::::IM::::::::::::::::::IM
          "IM::::::::IM:::::::IM:::::::::::::::::IM;.
          "IM::::::::MM::::::::IM::::::::::mmmIMMMMMMMm,.
            IM::::::::IM:::::::IM::::mIMIMM"""". .. "IMMMM
            "IM::::::::IM::::::mIMIMM"". . . . . .,mM"   "M
            IMm:::::::IM::::IIMM" . . . . . ..,mMM"
            "IMMIMIMMIMM::IMM" . . . ._.,mMMMMM"
              ,IM". . ."IMIM". . . .,mMMMMMMMM"
            ,IM . . . .,IMM". . . ,mMMMMMMMMM"
          IM. . . .,mIIMM,. . ..mMMMMMMMMMM"
          ,M"..,mIMMIMMIMMIMmmmMMMMMMMMMMMM"
          IM.,IMI"""        ""IIMMMMMMMMMMM
          ;IMIM"                  ""IMMMMMMM
          ""                         "IMMMMM
                                      "IMMM
                                      "IMM,
                                        "IMM
                                        "MM,
                                          IMM,              ______   __
                        ______           "IMM__        .mIMMIMMIMMIMMIMM,
                    .,mIMMIMMIMM, ,mIMM,   IMM"""     ,mIM". . . . "IM,..M,
                  ,IMMM' . . . "IMM.\ "M,  IMM      ,IM". . . .  / :;IM \ M,
                .mIM' . . .  / .:"IM.\ MM  "MM,    ,M". . .  / .;mIMIMIM,\ M
              ,IM'. . .  / . .:;,IMIMIMMM  IMM   ,M". .  / .:mIM"'   "IM,:M
              ,IM'. . . / . .:;,mIM"  `"IMM IMM   IM. .  / .mM"         "IMI
            ,IM . .  / . .:;,mIM"      "IMMMMM   MM,.  / ,mM            "M'
            IM'. .  / . .;,mIM"          "IIMMM ,IMIM,.,IM"
            IM . . / . .,mIM"              IMMMMMMM' """
            `IM,.  / ;,mIM"                 IIMMM
              "IMI, /,mIM"                 __IMMM
                "IMMMM"                   """IMM
                  ""                         IMM
                                            IMM__
                                            IMM"""
                                            IMM
                                            IMM
                                          __IMM
                                          """IMM
                                            IMM
                                            IMM
                                            IMM__
                                            IMM"""
                                            IMM
    */
}

initScene();
