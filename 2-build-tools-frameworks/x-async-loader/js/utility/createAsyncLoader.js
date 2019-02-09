const createAsyncLoader = ( loader ) => {

  let onProgress = () => {};

  const load = async url => new Promise( ( resolve, reject ) => {

    loader.load( url, resolve, (e) =>  onProgress( e ), () => {

      reject( new Error( 'Failed to load file "' + url + '".' ) );

    } );

  } );

  return {
    load,
    setOnProgress: ( callback ) => {
      onProgress = callback;
    },
  };

};
