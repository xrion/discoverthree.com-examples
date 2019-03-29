export default function pointOnSpiral( center, t, result ) {

  const radius = 5;

  result.set(
    center.x + radius * Math.sin( 2 * t ),
    center.y + 0.5 * t,
    center.z + radius * Math.cos( 2 * t ),
  );

}
