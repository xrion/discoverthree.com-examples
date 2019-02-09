const rollup = require( 'rollup' );
const babel = require( 'rollup-plugin-babel' );
const commonjs = require( 'rollup-plugin-commonjs' );

// this is needed if you want to import any files from
// the node_modules directory in your app
const nodeResolve = require( 'rollup-plugin-node-resolve' );

const inputFile = 'src/index.js';


const defaultPlugins = [
  nodeResolve(),
  commonjs(),
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

  // ideally, we would set treeshaking to true but it seems to cause the build to fail
  treeshake: false,
};

const outputOptions = {
  file: 'dist/bundle.js',
  name: 'discover_threejs',
  format: 'umd',
};

build( inputOptions, outputOptions );
