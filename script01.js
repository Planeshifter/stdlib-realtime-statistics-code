/* Run with Node.js */

'use strict';

const stdlib = require( './stdlib.js' );
const Poisson = stdlib.stats.base.dists.poisson.Poisson;

const pois = new Poisson( 30 );

let mean = pois.mean
console.log( 'Mean = %d', mean );

let p = pois.cdf( 30 );
console.log( 'P( X <= 30 ) = %d', p );

p = pois.cdf( 80 );
console.log( 'P( X <= 80 ) = %d', p );