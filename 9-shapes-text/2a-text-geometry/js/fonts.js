import {
  FontLoader,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.js';

export default async function loadFonts() {

  const loader = createAsyncLoader( new FontLoader() );

  return {

    droidSerifRegular: await loader.load( 'fonts/droid_serif_regular.typeface.json' ),

  };

}
