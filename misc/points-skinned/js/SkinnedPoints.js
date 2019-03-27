import {
  Matrix4,
  Points,
  Vector4,
} from './vendor/three/three.module.js';

export default class SkinnedPoints extends Points {

  constructor( geometry, material ) {

    super( geometry, material );

    this.isSkinnedMesh = true;

    this.bindMode = 'attached';
    this.bindMatrix = new Matrix4();
    this.bindMatrixInverse = new Matrix4();

    this.updateMorphTargets();

  }

  bind( skeleton, bindMatrix ) {

    this.skeleton = skeleton;

    if ( bindMatrix === undefined ) {

      this.updateMatrixWorld( true );

      this.skeleton.calculateInverses();

      bindMatrix = this.matrixWorld;

    }

    this.bindMatrix.copy( bindMatrix );
    this.bindMatrixInverse.getInverse( bindMatrix );

  }

  pose() {

    this.skeleton.pose();

  }

  normalizeSkinWeights() {

    const vector = new Vector4();

    const skinWeight = this.geometry.attributes.skinWeight;

    for ( let i = 0, l = skinWeight.count; i < l; i++ ) {

      vector.x = skinWeight.getX( i );
      vector.y = skinWeight.getY( i );
      vector.z = skinWeight.getZ( i );
      vector.w = skinWeight.getW( i );

      const scale = 1.0 / vector.manhattanLength();

      if ( scale !== Infinity ) {

        vector.multiplyScalar( scale );

      } else {

        vector.set( 1, 0, 0, 0 ); // do something reasonable

      }

      skinWeight.setXYZW( i, vector.x, vector.y, vector.z, vector.w );

    }

  }

  updateMatrixWorld( force ) {

    Points.prototype.updateMatrixWorld.call( this, force );

    if ( this.bindMode === 'attached' ) {

      this.bindMatrixInverse.getInverse( this.matrixWorld );

    } else if ( this.bindMode === 'detached' ) {

      this.bindMatrixInverse.getInverse( this.bindMatrix );

    } else {

      console.warn( 'THREE.SkinnedMesh: Unrecognized bindMode: ' + this.bindMode );

    }

  }

  updateMorphTargets() {

    const geometry = this.geometry;
    let m; let ml; let name;

    const morphAttributes = geometry.morphAttributes;
    const keys = Object.keys( morphAttributes );

    if ( keys.length > 0 ) {

      const morphAttribute = morphAttributes[ keys[ 0 ] ];

      if ( morphAttribute !== undefined ) {

        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};

        for ( m = 0, ml = morphAttribute.length; m < ml; m++ ) {

          name = morphAttribute[ m ].name || String( m );

          this.morphTargetInfluences.push( 0 );
          this.morphTargetDictionary[ name ] = m;

        }

      }

    }


  }

  clone() {

    return new this.constructor( this.geometry, this.material ).copy( this );

  }

}
