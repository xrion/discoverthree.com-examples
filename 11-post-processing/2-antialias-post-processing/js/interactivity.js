function initControls( app, renderer, rendererAA, composers ) {

  initAATechniqueSelect( app, renderer, rendererAA, composers )
  initSamplesSlider( composers );
  initBiasedToggle( composers );

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

  }

  const renderAA = () => {

    rendererAA.render( app.scene, app.camera );

  }

  const renderComposer = ( type ) => {

    return () => {

      composers[ type ].render();

    }

  }

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
        app.render = renderComposer( 'ssaa' );
        break;

      case 'taa':
        showStandardCanvas();
        app.render = renderComposer( 'taa' );
        break;

      case 'fxaa':
        showStandardCanvas();
        app.render = renderComposer( 'fxaa' );
        break;

      case 'smaa':
        showStandardCanvas();
        app.render = renderComposer( 'smaa' );
        break;

      default:
        break;
    }

  } );

}

function initSamplesSlider( composers ) {

  const slider = document.querySelector( '#samples-slider' );
  const value = document.querySelector( '#samples-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;

    composers.ssaaRenderPass.sampleLevel = parseInt( slider.value, 10 );
    composers.taaRenderPass.sampleLevel = parseInt( slider.value, 10 );

    e.preventDefault();

  } );

}

function initBiasedToggle( composers ) {

  const toggle = document.querySelector( '#ssaa-biased')

  toggle.addEventListener( 'input', ( e ) => {

    composers.ssaaRenderPass.unbiased = e.target.checked;

  } );

}

function initWireframeToggle( mesh ) {

  const toggle = document.querySelector( '#wireframe')

  toggle.addEventListener( 'input', ( e ) => {

    mesh.material.wireframe = e.target.checked;

  } );

}

let prevValue = 0;

function initModelsAmountSlider( group, models ) {

  const slider = document.querySelector( '#models-slider' );
  const value = document.querySelector( '#models-value' );

  slider.addEventListener( 'input', ( e ) => {

    value.textContent = slider.value;

    const newValue = parseInt( slider.value, 10 ) - 1;

    if( newValue > prevValue ) {

      for( let i = prevValue; i <= newValue ; i++ ) {

        group.add( models[ i ] );

      }


    } else if( newValue < prevValue ) {

      for( let i = prevValue; i >= newValue ; i-- ) {

        group.remove( models[ i ] );

      }

    }

    prevValue = newValue;

    e.preventDefault();

  } );

}