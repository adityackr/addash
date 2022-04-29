const {
	chunk,
	compact,
	concat,
	difference,
	drop,
	dropRight,
	fill,
	head,
	flatten,
	flattenDeep,
	flattenDepth,
	fromPairs,
	indexOf,
	initial,
	join,
} = require('./addash');

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
/* console.log('----- drop -----');
console.log(drop([1, 2, 3]));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0)); */

/* * dropRight */
/* console.log('----- dropRight -----');
console.log(dropRight([1, 2, 3]));
console.log(dropRight([1, 2, 3], 2));
console.log(dropRight([1, 2, 3], 5));
console.log(dropRight([1, 2, 3], 0)); */

/* * fill */
/* console.log('----- fill -----');
const arr = [1, 2, 3];
console.log(fill(arr, 'a'));
console.log(fill(Array(3), 2));
console.log(fill([4, 6, 8, 10], '*', 1, 3)); */

/* * flatten */
/* console.log(flatten([1, [2, [3, [4]], 5]])); */

/* * flattenDeep */
/* console.log(flattenDeep([1, [2, [3, [4]], 5]])); */

/* * flattenDepth */
/* console.log(flattenDepth([1, [2, [3, [4]], 5]]));
console.log(flattenDepth([1, [2, [3, [4]], 5]], 2));
console.log(flattenDepth([1, [2, [3, [4]], 5]], 3));
console.log(flattenDepth([1, [2, [3, [4]], 5]], 4)); */

/* * fromPairs */
/* console.log(
	fromPairs([
		['a', 1],
		['b', 2],
	])
); */

/* * head */
/* console.log('----- head -----');
console.log(head([1, 2, 3]));
console.log(head(['a', 'b', 'c']));
console.log(head([])); */

/* * indexOf */
/* console.log('----- indexOf -----');
console.log(indexOf([1, 2, 1, 2], 2));
console.log(indexOf([1, 2, 1, 2], 2, 2));
console.log(indexOf([1, 2, 1, 2], 2, -1));
console.log(indexOf([1, 2, 1, 2], 3)); */

/* * initial */
/* console.log(initial([1, 2, 3])); */

/* * join */
console.log(join(['a', 'b', 'c']));
console.log(join(['a', 'b', 'c'], '~'));
