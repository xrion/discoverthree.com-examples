import loadModels from './loadModels.js';
import setModelTransforms from './setModelTransforms.js';

export default async function setupModels() {

  const models = await loadModels();
  setModelTransforms( models );

  return models;

}
