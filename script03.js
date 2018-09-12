/* Run with Node.js */

'use strict';

const stdlib = require( './stdlib.js' );
const poisson = stdlib.random.base.poisson;
const incrvmr = stdlib.stats.incr.incrvmr;
const stats = {
    'vmr': incrvmr()
};

// Create a "seeded" PRNG:
const rpois = poisson.factory({
    'seed': 1303
});

async function main() {
    for ( let i = 0; i < 60; i++ ) {
        await sleep( 1000 );
        let count = rpois( 30 );
        let vmr = stats.vmr( count );
        console.log( 'count: %d, vmr: %d', count, vmr );
    }
}

main();

function sleep( duration ) {
	return new Promise( ( resolve ) => {
		setTimeout( () => resolve(), duration );
	});
}