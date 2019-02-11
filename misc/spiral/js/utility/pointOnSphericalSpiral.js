const vec = new Vector3();
const a = 0.009; // spiral param

// formula for a spherical spiral here: http://mathworld.wolfram.com/SphericalSpiral.html
function pointOnSphericalSpiral( t ) {


  const c = Math.atan( a * t );
  const cosC = Math.cos( c );

  const x = Math.cos( t ) * cosC;
  const y = Math.sin( t ) * cosC;
  const z = -Math.sin( c );

  return vec.set( x, y, z );

}
