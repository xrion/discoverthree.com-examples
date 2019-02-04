

// scale a 3D triangle. Each of a, b, c are Vector3
function scaleTriangle( a, b, c, scaleAmount ) {

  // center of gravity of triangle
  const xcg = ( a.x + b.x + c.x ) / 3;
  const ycg = ( a.y + b.y + c.y ) / 3;
  const zcg = ( a.z + b.z + c.z ) / 3;

  a.set(
    xcg + ( a.x - xcg ) * scaleAmount,
    ycg + ( a.y - ycg ) * scaleAmount,
    zcg + ( a.z - zcg ) * scaleAmount,
  );

  b.set(
    xcg + ( b.x - xcg ) * scaleAmount,
    ycg + ( b.y - ycg ) * scaleAmount,
    zcg + ( b.z - zcg ) * scaleAmount,
  );

  c.set(
    xcg + ( c.x - xcg ) * scaleAmount,
    ycg + ( c.y - ycg ) * scaleAmount,
    zcg + ( c.z - zcg ) * scaleAmount,
  );

}
