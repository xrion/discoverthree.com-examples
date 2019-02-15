// Create some shapes from the Font we just loaded
function createGlyphsFromText( font ) {

  const glyphs = font.generateShapes(
    'Discover three.js! \n :)',
    1, // size
  );

  return glyphs;

}

export default function createShapes( fonts ) {

  return {

    glyphs: createGlyphsFromText( fonts.droidSerifRegular ),

  };

}
