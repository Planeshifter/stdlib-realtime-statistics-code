/* Run with Node.js */

'use strict';

const stdlib = require( './@tdlib.js' );
const pois = stdlib.stats.base.dists.poisson.Poisson( 30 );
const poisson = stdlib.random.base.poisson;

// Create a "seeded" PRNG:
const rpois = poisson.factory({
	'seed': 1303
});

// Compute our anomaly detection threshold:
const threshold = pois.quantile( 0.99 );
console.log( 'threshold: %s', threshold );

async function main() {
	for ( let i = 0; i < 60; i++ ) {
		console.log( '%s iteration', i );
		await sleep( 1000 );
		let count = rpois( 30 );
		if ( count > threshold ) {
			console.log( 'ALERT! Possible anomaly detected. Count: %d.', count );
		}
	}
}

main();

function sleep( duration ) {
	return new Promise( ( resolve ) => {
		setTimeout( () => resolve(), duration );
	});
}