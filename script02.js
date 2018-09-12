/* Run with Node.js */

'use strict';

const stdlib = require( './stdlib.js' );
const poisson = stdlib.random.base.poisson;
const incrmax = stdlib.stats.incr.incrmax;
const incrmean = stdlib.stats.incr.incrmean;

const stats = {
	'max': incrmax(),
	'mean': incrmean()
};

// Create a "seeded" PRNG:
const rpois = poisson.factory({
	'seed': 1303
});

async function main() {
	for ( let i = 0; i < 60; i++ ) {
		await sleep( 1000 );
		let count = rpois( 30 );
		let max = stats.max( count );  
		let mean = stats.mean( count );
		console.log( 'count: %d; max: %d, mean: %d', count, max, mean );
	}
}

main();

function sleep( duration ) {
	return new Promise( ( resolve ) => {
		setTimeout( () => resolve(), duration );
	});
}