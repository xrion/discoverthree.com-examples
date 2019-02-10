function createAmbientLight() {

  // we'll measure the ambient light's intensity in Lux, which means
  // "luminous flux per unit area". Of course, luminous flux is another
  // unit, and understanding these leads down a long rabbit hole of defintions
  // which you SHOULD go down at some point.
  // For now, just think of it as amount of light per unit area

  // You can use the chart here as a shortcut:
  // https://en.wikipedia.org/wiki/Lux#Illuminance

  // There are two kinds of ambient light
  // const ambientLight = new THREE.AmbientLight(  0x666666,  1  );

  const ambientLight = new THREE.HemisphereLight(

    // sky color ( dim blue, evening )
    0xddeeff,

    // ground color ( dim grey)
    0x0f0e0d,

    //

    // intensity( irradiance )
    // here, we'll assume a dim twilight value
    1

    // increasing this even a little bit - say to around 5

  );

  return ambientLight;

}

function initAmbientLight() {

  // we'll measure the ambient light's intensity in Lux, which means
  // "luminous flux per unit area". Of course, luminous flux is another
  // unit, and understanding these leads down a long rabbit hole of defintions
  // which you SHOULD go down at some point.
  // For now, just think of it as amount of light per unit area

  // You can use the chart here as a shortcut:
  // https://en.wikipedia.org/wiki/Lux#Illuminance

  // There are two kinds of ambient light
  // const ambientLight = new THREE.AmbientLight(  0x666666,  1  );

  const ambientLight = new THREE.HemisphereLight(

    // sky color ( dim blue, evening )
    0xddeeff,

    // ground color ( dim grey)
    0x0f0e0d,

    //

    // intensity( irradiance )
    // here, we'll assume a dim twilight value
    5

    // increasing this even a little bit - say to around 5

  );

  return ambientLight;

}

function createDirectionalLight() {

  // AKA "distant light" or "direct light", "point light at infinity"
  // directional light represents a far away light source like the sun
  // there is no fallof or decay, since for any "normal"
  // scale scene - that is, less than 100,000km or so across,
  // the strength of the light will not change noticeably
  const directionalLight = new THREE.DirectionalLight(

    0xddeeff,

    // intensity/ irradiance in lux
    10,

  );

  directionalLight.position.set( -12, 10, -12 );

  return directionalLight;

}

function createLights() {

  const ambient = createAmbientLight();

  const main = createDirectionalLight();

  return { ambient, main };

}