
import {
  WebGLRenderer,
} from './vendor/three/three.module.js';

function setupWireframeToggle( material ) {

  const button = document.querySelector( '#toggle-wireframe' );

  button.addEventListener( 'click', ( e ) => {

    material.wireframe = !material.wireframe;

    e.preventDefault();

  } );

}

function initAddModelsButton( amount, birdsArray, group ) {

  let index = 0;

  const maxModelsMessage = document.querySelector( '#max-models-message' )
  const value = document.querySelector( '#models-value' );

  const button = document.querySelector( `#add-${amount}` );
  button.addEventListener( 'click', () => {

    for ( let i = index; i < index + amount; i++ ) {

      if ( birdsArray[ i ] !== undefined ) {

        group.add( birdsArray[ i ] );
        value.textContent = index + 1;

      } else {

        maxModelsMessage.style.display = 'inherit';
        value.textContent = birdsArray.length + 1;

      }

    }

    index += amount;

  } );

}

function initAATechniqueSelect( app, renderer, rendererAA, composers ) {

  const showStandardCanvas = () => {

    renderer.domElement.style.display = 'block';
    rendererAA.domElement.style.display = 'none';

  };

  const showRendererAACanvas = () => {

    renderer.domElement.style.display = 'none';
    rendererAA.domElement.style.display = 'block';

  };


  const renderStandard = () => {

    renderer.render( app.scene, app.camera );

  };

  const renderAA = () => {

    rendererAA.render( app.scene, app.camera );

  };

  const renderComposer = ( type ) => {

    return () => {

      composers[ type ].render();

    };

  };

  const select = document.querySelector( '#aa-select' );

  select.addEventListener( 'change', ( e ) => {

    e.preventDefault();

    switch ( e.target.value ) {
      case 'renderer':
        showStandardCanvas();
        app.render = renderStandard;
        break;

      case 'composer':
        showStandardCanvas();
        app.render = renderComposer( 'noAA' );
        break;

      case 'rendererAA':
        showRendererAACanvas();
        app.render = renderAA;
        break;

      case 'ssaa':
        showStandardCanvas();
        app.render = renderComposer( 'SSAA' );
        break;

      case 'taa':
        showStandardCanvas();
        app.render = renderComposer( 'TAA' );
        break;

      case 'fxaa':
        showStandardCanvas();
        app.render = renderComposer( 'FXAA' );
        break;

      case 'smaa':
        showStandardCanvas();
        app.render = renderComposer( 'SMAA' );
        break;

      default:
        break;
    }

  } );

}

function initSamplesSlider( passes ) {

  const slider = document.querySelector( '#samples-slider' );
  const value = document.querySelector( '#samples-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;

    passes.ssaaRenderPass.sampleLevel = parseInt( slider.value, 10 );
    passes.taaRenderPass.sampleLevel = parseInt( slider.value, 10 );

    e.preventDefault();

  } );

}

function initBiasedToggle( passes ) {

  const toggle = document.querySelector( '#ssaa-biased' );

  toggle.addEventListener( 'input', ( e ) => {

    passes.ssaaRenderPass.unbiased = e.target.checked;

  } );

}

function initPostControl( app, composers, passes ) {

  const renderer = app.renderer;

  const rendererAA = new WebGLRenderer( {
    powerPreference: app.powerPreference,
    alpha: app.alpha,
    antialias: true,
    stencil: app.stencil,
  } );

  rendererAA.gammaFactor = app.spec.gammaFactor;
  rendererAA.gammaOutput = app.spec.gammaOutput;

  rendererAA.setPixelRatio( Math.min( window.devicePixelRatio, app.maxPixelRatio ) );
  rendererAA.setSize( app.container.clientWidth, app.container.clientHeight );

  rendererAA.domElement.style.display = 'none';
  app.container.appendChild( rendererAA.domElement );

  initAATechniqueSelect( app, renderer, rendererAA, composers );
  initSamplesSlider( passes );
  initBiasedToggle( passes );

}


export default function setupControls( materials, models, group, app, composers, passes ) {

  setupWireframeToggle( materials.standard );

  initPostControl( app, composers, passes );

  initAddModelsButton( 1, models.birdsArray, group );
  initAddModelsButton( 10, models.birdsArray, group );
  initAddModelsButton( 100, models.birdsArray, group );

}
