class App {

  constructor( containerID ) {

    containerID = containerID || 'container'; // default ID if none provided

    this.container = document.getElementById( containerID );

    if ( !this.container ) {

      console.error( `Couldn't find the container element with ID #${containerID}!` );

      return;

    }

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0x8FBCD4 );

    this.clock = new THREE.Clock();
    this.mixers = [];

    this.initCamera();
    this.initControls();
    this.createLights();
    this.loadModels();
    this.initRenderer();

    window.addEventListener( 'resize', () => this.onWindowResize() );

  }

  initCamera() {

    this.camera = new THREE.PerspectiveCamera( 35, this.container.clientWidth / this.container.clientHeight, 1, 1000 );
    this.camera.position.set( -1.5, 1.5, 6.5 );

  }

  initControls() {

    this.controls = new THREE.OrbitControls( this.camera, this.container );

  }

  createLights() {

    const ambient = new HemisphereLight( 0xddeeff, 0x0f0e0d, 2 );

    const main = new DirectionalLight( 0xfffffc, 2 );
    main.position.set( 0, 1, -10 );

    this.scene.add( ambient, main );

  }

  loadModels() {

    const loader = new THREE.GLTFLoader();

    // A reusable function to setup the models
    const onLoad = ( gltf, position ) => {

      const model = gltf.scene.children[ 0 ];
      model.position.copy( position );

      const animation = gltf.animations[ 0 ];

      const mixer = new THREE.AnimationMixer( model );
      this.mixers.push( mixer );

      const action = mixer.clipAction( animation );
      action.play();

      this.scene.add( model );

    };

    const onProgress = () => {};

    const onError = ( errorMessage ) => { console.log( errorMessage ); };

    // load the first model. Each model is loaded asynchronously,
    // so don't make any assumption about which one will finish loading first
    const parrotPosition = new THREE.Vector3( 0, 0, 2.5 );
    loader.load( 'models/Parrot.glb', gltf => onLoad( gltf, parrotPosition ), null, onError );

    const flamingoPosition = new THREE.Vector3( 7.5, 0, -10 );
    loader.load( 'models/Flamingo.glb', gltf => onLoad( gltf, flamingoPosition ), null, onError );

    const storkPosition = new THREE.Vector3( 0, -2.5, -10 );
    loader.load( 'models/Stork.glb', gltf => onLoad( gltf, storkPosition ), null, onError );

  }

  initRenderer() {

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );

    this.renderer.setPixelRatio( window.devicePixelRatio );

    this.renderer.gammaOutput = true;

    this.container.appendChild( this.renderer.domElement );

  }

  render() {

    this.renderer.render( this.scene, this.camera );

  }

  update() {

    const delta = this.clock.getDelta();

    this.mixers.forEach( ( mixer ) => { mixer.update( delta ); } );

  }

  start() {

    this.renderer.setAnimationLoop( () => {

      this.update();
      this.render();

    } );

  }

  stop() {

    this.renderer.setAnimationLoop( null );

  }

  onWindowResize() {

    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );

  }

}

const app = new App();
app.start();
