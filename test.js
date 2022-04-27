const { chunk, compact, concat, difference, drop } = require('./addash');

/* * chunk */
/* console.log('----- chunk -----');
console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));
console.log(chunk(['a', 'b', 'c', 'd'], 5));
console.log(chunk([('a', 'b', 'c', 'd')], -5));
console.log(chunk([], 3)); */

/* * compact */
/* console.log('----- compact -----');
console.log(compact([0, 1, false, 2, '', 3]));
console.log(
	compact([0, 1, true, 'text', null, undefined, NaN, false, 2, '', 3])
); */

/* * concat */
/* console.log('----- concat -----');
console.log(concat([1], 2, [3], [[4]]));
console.log(concat(1, 2, [3], [[4]]));
console.log(concat()); */

/* * difference */
/* console.log('----- difference -----');
console.log(difference([2, 1], [2, 3])); */

/* * drop */
// const drop = require('./array/drop.js');
console.log('----- drop -----');
console.log(drop([1, 2, 3]));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));
