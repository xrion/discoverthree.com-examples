
import createAmbientLight from './createAmbientLight';
import createMainLight from './createMainLight';

export default function createLights() {

  return {

    ambient: createAmbientLight(),
    main: createMainLight(),

  };

}
