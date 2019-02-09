const rollup = require( 'rollup' );
const babel = require( 'rollup-plugin-babel' );

// this is needed if you want to import any files from
// the node_modules directory in your app
const nodeResolve = require( 'rollup-plugin-node-resolve' );

const inputFile = 'src/main.js';

const defaultPlugins = [

  nodeResolve(),
  babel( {
    compact: false,
    exclude: ['node_modules/**'],
    babelrc: true,
  } ),
];

const inputOptions = {
  input: inputFile,
  plugins: defaultPlugins,

  // ideally, we would set treeshaking to true but it seems to cause the build to fail
  treeshake: false,
};

const outputOptions = {
  file: 'dist/bundle.js',
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

  } else if ( event.code === 'BUNDLE_START' ) {

    console.log( 'Bundling Started' );

  } else if ( event.code === 'BUNDLE_END' ) {

    console.log( `Bundling Finished in ${event.duration}ms` );
    console.log( 'Writing File ' + outputOptions.file );

    // if you want, you can access the result using event.result

  } else if ( event.code === 'END' ) {

    // nothing interesting happens here

  } else if ( event.code === 'ERROR' ) {

    console.log( 'Rollup.watch encountered an error' );
    console.log( event.error );

  } else if ( event.code === 'FATAL' ) {

    console.log( 'Rollup.watch encountered a fatal error. Please restart the script' );
    console.log( event.error );
    watcher.close();

  }


} );
