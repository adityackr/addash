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
	last,
	lastIndexOf,
	nth,
	pull,
	pullAll,
	pullAt,
	reverse,
	slice,
	sortedIndex,
	sortedIndexOf,
	sortedLastIndex,
	sortedLastIndexOf,
	sortedUniq,
	tail,
	take,
	takeRight,
	union,
	uniq,
	unzip,
	zip,
	without,
	xor,
	castArray,
	clone,
	cloneDeep,
	eq,
	gt,
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
/* console.log(join(['a', 'b', 'c']));
console.log(join(['a', 'b', 'c'], '~')); */

/* * last */
/* console.log(last([1, 2, 3])); */

/* * lastIndexOf */
/* console.log(lastIndexOf([1, 2, 1, 2], 2));
console.log(lastIndexOf([1, 2, 1, 2], 2, 2));
console.log(lastIndexOf([1, 2, 1, 2], 3)); */

/* * nth */
/* console.log(nth(['a', 'b', 'c', 'd'], 1));
console.log(nth(['a', 'b', 'c', 'd'], -2)); */

/* * pull */
/* const array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(array, 'a', 'c')); */

/* * pullAll */
/* const array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pullAll(array, ['a', 'c'])); */

/* * pullAt */
/* const array = ['a', 'b', 'c', 'd'];
console.log(pullAt(array, [1, 3]));
console.log(array); */

/* * reverse */
/* const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
reverse(array1);
reverse(array2);
console.log(array1);
console.log(array2); */

/* * slice */
/* console.log(slice([1, 2, 3, 4, 5]));
console.log(slice([1, 2, 3, 4, 5], 2));
console.log(slice([1, 2, 3, 4, 5], 2, 4)); */

/* * sortedIndex */
/* console.log(sortedIndex([30, 50], 40));
console.log(sortedIndex([30, 50], 20));
console.log(sortedIndex([30, 50], 60));
console.log(sortedIndex([30, 50], 30));
console.log(sortedIndex(['a', 'c'], 'b'));
console.log(sortedIndex(['a', 'c'], 'd')); */

/* * sortedIndexOf */
/* console.log(sortedIndexOf([4, 5, 5, 5, 6], 4));
console.log(sortedIndexOf([4, 5, 5, 5, 6], 5));
console.log(sortedIndexOf([4, 5, 5, 5, 6], 6));
console.log(sortedIndexOf([4, 5, 5, 5, 6], 7)); */

/* * sortedLastIndex */
/* console.log(sortedLastIndex([4, 5, 5, 5, 6], 5));
console.log(sortedLastIndex([4, 5, 5, 5, 6], 3));
console.log(sortedLastIndex([4, 5, 5, 5, 6], 4));
console.log(sortedLastIndex([4, 5, 5, 5, 6], 6));
console.log(sortedLastIndex([4, 5, 5, 5, 6], 7)); */

/* * sortedLastIndexOf */
/* console.log(sortedLastIndexOf([4, 5, 5, 5, 6], 5)); */

/* * sortedUniq */
// console.log(sortedUniq([1, 1, 2]));

/* * tail */
// console.log(tail([1, 2, 3]));

/* * take */
/* console.log(take([1, 2, 3]));
console.log(take([1, 2, 3], 2));
console.log(take([1, 2, 3], 5));
console.log(take([1, 2, 3], 0)); */

/* * takeRight */
// console.log(takeRight([1, 2, 3]));
// console.log(takeRight([1, 2, 3], 2));
// console.log(takeRight([1, 2, 3], 5));
// console.log(takeRight([1, 2, 3], 0));

// * union
// console.log(union([2], [1, 2]));

// * uniq
// console.log(uniq([2, 1, 2, 3, 3, 3]));

// * unzip
// console.log(unzip(['a', 1, true], ['b', 2, false]));

// * without
// console.log(without([2, 1, 2, 3], 1, 2));

// * xor
// console.log(xor([2, 1], [2, 3], [2, 5]));

// * zip
// console.log(zip(['a', 'b'], [1, 2], [true, false]));

// * castArray
// console.log(castArray(1));
// console.log(castArray({ a: 1 }));
// console.log(castArray('abc'));
// console.log(castArray(null));
// console.log(castArray(undefined));
// console.log(castArray());

// const arr = [1, 2, 3];
// console.log(castArray(arr) === arr);

// * clone
// const objects = [{ a: 1 }, { b: 2 }];
// const shallow = clone(objects);
// console.log(shallow[0] === objects[0]);

// * cloneDeep
// const objects = [{ a: 1 }, { b: 2 }];
// const deep = cloneDeep(objects);
// console.log(deep[0] === objects[0]);

// * eq
// const object = { a: 1 };
// const other = { a: 1 };

// console.log(eq(object, object));
// console.log(eq(object, other));
// console.log(eq('a', 'a'));
// console.log(eq('a', Object('a')));
// console.log(eq(NaN, NaN));
// console.log(eq(undefined, undefined));
// console.log(eq([1], [1]));

// * gt
console.log(gt(3, 1));
console.log(gt(3, 3));
console.log(gt(1, 3));
