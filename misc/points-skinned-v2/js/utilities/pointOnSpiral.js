export default function pointOnSpiral( center, t, result ) {

  const radius = 1;

  result.set(

    radius * Math.sin( 2 * t ),

    0,
    radius * Math.cos( 2 * t ),

  );

  result.y += center.y * 0.75;
  // result.z -=  t;

}
