const app = new THREE_APP( '#container' );
let materials = [];
let textures;

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  app.scene.add( ambientLight );

  const frontLight = new THREE.DirectionalLight( 0xffffff, 1 );
  frontLight.position.set( 10, 10, 10 );

  const backLight = new THREE.DirectionalLight( 0xffffff, 1 );
  backLight.position.set( -10, 10, -10 );

  app.scene.add( frontLight, backLight );

}

function initMaterials() {

  const material =  new THREE.MeshBasicMaterial( {
    // alphaTest: 0.5, this requires a transparent texture to work, we'll come back to it in Ch 4.10
    transparent: true, // only set this to true if you need to!
    opacity: 1.0,
    // color: 0x800080,


  } );

  // add the material to our material array so that we can control its parameters
  materials.push( material );

}

function initMeshes() {

  // create a geometry
  const boxGeo = new THREE.BoxBufferGeometry( 2, 2, 2 );
  mesh = new THREE.Mesh( boxGeo, materials[ 0 ] );

  app.scene.add( mesh );

}

function loadModels() {

  // A reusable function to setup the models
  // assumes that the gltf file contains a single model
  // and up to one animation track
  const onLoad = ( gltf, position, rotation, scale ) => {

    const model = gltf.scene.children[ 0 ];

    // the loaded material is not set up for transparency so
    // we'll need to change this setting
    model.material.transparent = true;

    // add the parrots material to our material array so that
    // we can control its parameters
    materials.push( model.material );

    // log the material to the console so that you can take a
    // look at it's properties.
    // Take special note of material.morphTargets and material.flatShading!
    console.log( model.material );

    if( position ) model.position.copy( position );
    if( rotation ) model.rotation.copy( rotation );
    if( scale ) model.scale.copy( scale );

    if( gltf.animations[ 0 ] ) {

      const animation = gltf.animations[ 0 ];
      const mixer = new THREE.AnimationMixer( model );

      // we'll check every object in the scene for
      // this function and call it once per frame
      model.userData.onUpdate = ( delta ) => {

        mixer.update( delta );

      };

      const action = mixer.clipAction( animation );
      action.play();

    }

    app.scene.add( model );

  };

  const onError = ( errorMessage ) => { console.log( errorMessage ); };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const position = new THREE.Vector3( 0, 2, 0 );
  const rotation = new THREE.Euler();
  const scale = new THREE.Vector3( 0.05, 0.05, 0.05 );
  app.loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, position, rotation, scale ), null, onError );

}

loadTextures() {

  const textureLoader = new THREE.TextureLoader();
  textures = {
    // Basic, Depth, Lambert, Phong, Standard, Physical, Toon
    alphaMap: {
      none: undefined,
      A: textureLoader.load( '../texture/'),
      B: textureLoader.load( '../texture/'),
      C: textureLoader.load( '../texture/'),
      D: textureLoader.load( '../texture/'),
    }
    // Basic, Depth, Lambert, Phong, Standard, Physical, Toon
    map: {
      none: undefined,
      crate: textureLoader.load( '../texture/crate.gif'),
      colors: textureLoader.load( '../texture/colors.png'),
      floor: textureLoader.load( '../texture/FloorsCheckerboard_S_Diffuse.jpg'),
      brick: textureLoader.load( '../texture/brick_diffuse.jpg'),
      lava: textureLoader.load( '../texture/lavatile,jpg'),
      perlin: textureLoader.load( '../texture/perlin-512.png'),
    }
    // Basic, Lambert, Phong, Toon
    specularMap: {
      none: undefined,
      A: textureLoader.load( '../texture/'),
      B: textureLoader.load( '../texture/'),
      C: textureLoader.load( '../texture/'),
      D: textureLoader.load( '../texture/'),
    }
    // Lambert, Phong, Standard, Physical, Toon
    emissiveMap: {
      none: undefined,
      A: textureLoader.load( '../texture/'),
      B: textureLoader.load( '../texture/'),
      C: textureLoader.load( '../texture/'),
      D: textureLoader.load( '../texture/'),
    }
    // Phong, Standard, Physical, Toon
    bumpMap: {
      none: undefined,
      A: textureLoader.load( '../texture/brick_bump.jpg'),
      B: textureLoader.load( '../texture/tri_pattern.jpg'),
      C: textureLoader.load( '../texture/'),
      D: textureLoader.load( '../texture/'),
    }
    // Phong, Depth
    displacementMap: {
      none: undefined,
      A: textureLoader.load( '../texture/tri_pattern.jpg'),
      B: textureLoader.load( '../texture/'),
      C: textureLoader.load( '../texture/'),
      D: textureLoader.load( '../texture/'),
    }
    // Phong
    normalMap: {
      none: undefined,
      A: textureLoader.load( '../texture/FloorsCheckerboard_S_Normal.jpg'),
      B: textureLoader.load( '../texture/'),
      C: textureLoader.load( '../texture/'),
      D: textureLoader.load( '../texture/'),
    },
    // Toon
    gradientMap: {
      none: undefined,
      A: textureLoader.load( '../texture/'),
      B: textureLoader.load( '../texture/'),
      C: textureLoader.load( '../texture/'),
      D: textureLoader.load( '../texture/'),
    },
    // Standard, Physical
    roughnessMap: {
      none: undefined,
      A: textureLoader.load( '../texture/brick_roughness.jpg'),
      B: textureLoader.load( '../texture/'),
      C: textureLoader.load( '../texture/'),
      D: textureLoader.load( '../texture/'),
    }
    // Standard, Physical
    metalnessMap:{
      none: undefined,
      A: textureLoader.load( '../texture/'),
      B: textureLoader.load( '../texture/'),
      C: textureLoader.load( '../texture/'),
      D: textureLoader.load( '../texture/'),
    }

  }

}

function initOpacitySlider() {

  const slider = document.querySelector( '#opacity-slider' );
  const value = document.querySelector( '#opacity-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;

    materials.forEach( ( material ) => {

      material.opacity = slider.value;

    } );

    e.preventDefault();

  } );

}

function initColorPicker() {

  const colorPicker = document.querySelector( '#color-picker' );

  const updateColor = ( e ) => {

    materials.forEach( ( material ) => {

      // Note that the color is returned as a CSS hex string,
      // e.g. "#cccccc"
      // Fortunately, the color.set method is smart enough to
      // understand these
      material.color.set( e.target.value );

    } );

  }

  colorPicker.addEventListener("input", updateColor);

}

function initSideSelector() {

  const sideSelector = document.querySelector( '#side-select' );

  const updateSide = ( e ) => {

    materials.forEach( ( material ) => {

      // e.target.value is a string, either "FrontSide", "BackSide", or "DoubleSide"
      // so we can access the correct contanst on the global THREE variable using
      // bracket notation
      material.side = THREE[ e.target.value ];

    } );

  }

  sideSelector.addEventListener( 'input', updateSide);

}

function initFlatShadingCheckbox() {

  const checkbox = document.querySelector( '#flatshading-checkbox' );

  const updateFlatShading = ( e ) => {

    materials.forEach( ( material ) => {

      material.flatShading = e.target.checked;
      material.needsUpdate = true;

    } );

  }

  checkbox.addEventListener( 'input', updateFlatShading);

}

function initVertexColorsSelector() {

  const vertexColorsSelector = document.querySelector( '#vertexColors-select' );

  const updateVertexColors = ( e ) => {

    materials.forEach( ( material ) => {

      material.vertexColors = THREE[ e.target.value ];
      material.needsUpdate = true;

    } );

  }

  vertexColorsSelector.addEventListener( 'input', updateVertexColors );

}

function initVisibleCheckbox() {

  const checkbox = document.querySelector( '#visible-checkbox' );

  const updateVisibility = ( e ) => {

    materials.forEach( ( material ) => {

      material.visible = e.target.checked;

    } );

  }

  checkbox.addEventListener( 'input', updateVisibility );

}

function init() {

  app.init();

  app.scene.background = new THREE.Color( 0x8FBCD4 );
  app.camera.position.set( 0, 0, 15 );

  initMaterials();
  initLights();
  initMeshes();
  loadModels();

  initOpacitySlider();
  initColorPicker();
  initSideSelector();
  initFlatShadingCheckbox();
  initVertexColorsSelector();
  initVisibleCheckbox();

  app.start();

}

init();
