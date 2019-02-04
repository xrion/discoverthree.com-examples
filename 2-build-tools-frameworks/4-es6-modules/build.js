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

async function build( inputOptions, outputOptions ) {

  // create a bundle
  console.log( 'Started bundling' );
  const bundle = await rollup.rollup( inputOptions );

  // write the bundle to disk
  console.log( 'Writing file ' + outputOptions.file );
  await bundle.write( outputOptions );

}

const inputOptions = {
  input: inputFile,
  plugins: defaultPlugins,
};

const outputOptions = {
  file: 'build/bundle.js',
  name: 'discover_threejs',
  format: 'iife',
};

build( inputOptions, outputOptions );
