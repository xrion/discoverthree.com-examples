import SceneManager from './BirdsScene/SceneManager.js';

async function main() {

  const sceneManager = new SceneManager();
  await sceneManager.init();
  sceneManager.start();

}

main();
