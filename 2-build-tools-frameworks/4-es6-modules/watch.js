const rollup = require( 'rollup' );
const babel = require( 'rollup-plugin-babel' );

// this is needed if you want to import any files from
// the node_modules directory in your app
// const nodeResolve = require( 'rollup-plugin-node-resolve' );

const inputFile = 'src/main.js';

const defaultPlugins = [

  // see note above
  // nodeResolve(),

  babel( {
    compact: false,
    exclude: ['node_modules/**'],
    babelrc: false,
    presets: [
      ['@babel/env',
        {
          modules: false,
          targets: {
            browsers: [ 'last 2 versions', '> 5%' ],
          },
        } ],
    ],
  } ),
];

const inputOptions = {
  input: inputFile,
  plugins: defaultPlugins,
};

const outputOptions = {
  file: 'build/bundle.js',
  name: 'discover_threejs',
  format: 'iife',
};

const watchOptions = {
  ...inputOptions,
  output: [outputOptions],
};

const watcher = rollup.watch( watchOptions );

watcher.on( 'event', ( event ) => {


  if ( event.code === 'START' ) {

    console.log( 'Rollup.watch (re)started' );

  }
  else if ( event.code === 'BUNDLE_START' ) {

    console.log( 'Bundling Started' );

  } else if ( event.code === 'BUNDLE_END' ) {
    console.log(event);
    console.log( `Bundling Finished in ${event.duration}ms` );
    console.log( 'Writing File ' + outputOptions.file );

  } else if ( event.code === 'END' ) {

    // nothing interesting happens here

  } else if ( event.code === 'ERROR' ) {

    console.log( 'Rollup.watch encountered an error' );
    console.log( event );

  } else if ( event.code === 'FATAL' ) {

    console.log( 'Rollup.watch encountered a fatal error. Please restart the script' );
    watcher.close();

  }


} );

// build( inputOptions, outputOptions );
