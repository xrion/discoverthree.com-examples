// Create an async version of a three.js loader.
// accepts and onProgress callback as an optional second argument

export default ( loader, onProgress = () => {} ) => {

  return {
    load: async url => new Promise( ( resolve, reject ) => {

      loader.load(

        // url to the file we want to load
        url,

        // call resolve with the result of the loader (just return the loaded object)
        resolve,

        // onProgress is an empty function by default
        e => onProgress( e ),

        // simple onError function
        ( e ) => {
          reject( new Error( `Error loading file ${url}` ) );
          console.error( e );
        },

      );

    } ),
  };

};
