# Table of Contents

- [Table of Contents](#table-of-contents)
	- [Addash](#addash)
		- [chunk(arr, size)](#chunkarr-size)
		- [compact(arr)](#compactarr)
		- [concat(arr, ...values)](#concatarr-values)
		- [difference(arr, [values])](#differencearr-values)
		- [drop(arr, n=1)](#droparr-n1)
		- [dropRight(arr, n=1)](#droprightarr-n1)
		- [fill(arr, value, start=0, end=arr.length)](#fillarr-value-start0-endarrlength)
		- [flatten(arr)](#flattenarr)
		- [flattenDeep(arr)](#flattendeeparr)
		- [flattenDepth(arr, depth=1)](#flattendeptharr-depth1)
		- [fromPairs(pairs)](#frompairspairs)
		- [head(arr)](#headarr)
		- [indexOf(arr, value, fromIndex=0)](#indexofarr-value-fromindex0)
		- [initial(arr)](#initialarr)
		- [join(arr, separator=', ')](#joinarr-separator-)
		- [last(arr)](#lastarr)
		- [lastIndexOf(arr, value, fromIndex=arr.length-1)](#lastindexofarr-value-fromindexarrlength-1)
		- [nth(arr, n=0)](#ntharr-n0)
		- [pull(arr, ...values)](#pullarr-values)
		- [pullAll(arr, values](#pullallarr-values)
		- [pullAt(arr, indexes)](#pullatarr-indexes)
		- [reverse(arr)](#reversearr)
		- [slice(arr, start=0, end=arr.length)](#slicearr-start0-endarrlength)
		- [sortedIndex(arr, value)](#sortedindexarr-value)
		- [sortedIndexOf(arr, value)](#sortedindexofarr-value)
		- [sortedLastIndex(arr, value)](#sortedlastindexarr-value)
		- [sortedLastIndexOf(arr, value)](#sortedlastindexofarr-value)
		- [sortedUniq(arr)](#sorteduniqarr)
		- [tail(arr)](#tailarr)
		- [take(arr, n=1)](#takearr-n1)
		- [takeRight(arr, n=1)](#takerightarr-n1)
		- [union(...arrays)](#unionarrays)
		- [uniq(array)](#uniqarray)
		- [unzip(array)](#unziparray)

## Addash

addash is a library like lodash. I am creating the library on my way. Anyone can use this library. I will try to create all the features as lodash does. Brief description of all features are given below:

### chunk(arr, size)

Split an array into groups the length of size. Remaining elements are stored in a new array.

- arguments: arr(Array), size(number)
- returns: Array

Example:

```js
chunk(['a', 'b', 'c', 'd'], 2); // [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3); // [['a', 'b', 'c'], ['d']]
chunk(['a', 'b', 'c', 'd'], 5); // []
chunk(['a', 'b', 'c', 'd'], -5); // []
chunk([], 3); // []
```

### compact(arr)

Filter an array with only truthy values.

- arguments: arr(Array)
- returns: Array

Example:

```js
compact([0, 1, false, 2, '', 3]); // [1, 2, 3]
compact([0, 1, true, 'text', null, undefined, NaN, false, 2, '', 3]); // [1, true, 'text', 2, 3]
```

### concat(arr, ...values)

Creates an array by concatenating with more arrays or values.

- arguments: arr(Array), ...values(Array)
- returns: Array

Example:

```js
concat([1], 2, [3], [[4]]); // [1, 2, 3, [4]]
concat(1, 2, [3], [[4]]); // []
concat(); // []
```

### difference(arr, [values])

Creates an array by concatenating with more arrays or values.

- arguments: arr(Array), [values (Array)]
- returns: Array

Example:

```js
difference([2, 1], [2, 3]); // [1]
```

### drop(arr, n=1)

Creates a slice of array with n elements dropped from the beginning.

- arguments: arr(Array), n=1(number)
- returns: Array

Example:

```js
drop([1, 2, 3]); // [2, 3]
drop([1, 2, 3], 2); // [2,3]
drop([1, 2, 3], 5); // []
drop([1, 2, 3], 0); // [1, 2, 3]
```

### dropRight(arr, n=1)

Creates a slice of array with n elements dropped from the end.

- arguments: arr(Array, n=1)
- returns: Array

Example:

```js
dropRight([1, 2, 3]); // [1, 2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 5); // []
dropRight([1, 2, 3], 0); // [1, 2, 3]
```

### fill(arr, value, start=0, end=arr.length)

Fills elements of array with value from start up to, but not including end.

- arguments: arr(Array), value(any), start=0(number), end=arr.length(number)
- returns: Array

Example:

```js
const arr = [1, 2, 3];
fill(arr, 'a'); // ['a', 'a', 'a']
fill(Array(3), 2); // [2, 2, 2]
fill([4, 6, 8, 10], '*', 1, 3); // [4, '*', '*', 10]
```

### flatten(arr)

Flattens array a single level deep.

- arguments: arr(Array)
- returns: Array

Example:

```js
flatten([1, [2, [3, [4]], 5]]); // [1, 2, [3, [4]], 5]
```

### flattenDeep(arr)

Recursively flattens array.

- arguments: arr(Array)
- returns: Array

Example:

```js
flattenDeep([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
```

### flattenDepth(arr, depth=1)

Recursively flatten array up to depth times.

- arguments: arr(Array), depth=1(number)
- returns: Array

Example:

```js
flattenDepth([1, [2, [3, [4]], 5]]); // [ 1, 2, [ 3, [ 4 ] ], 5 ]
flattenDepth([1, [2, [3, [4]], 5]], 2); // [ 1, 2, 3, [ 4 ], 5 ]
flattenDepth([1, [2, [3, [4]], 5]], 3); // [ 1, 2, 3, 4, 5 ]
flattenDepth([1, [2, [3, [4]], 5]], 4); // [ 1, 2, 3, 4, 5 ]
```

### fromPairs(pairs)

Returns an object composed from key-value pairs.

- arguments: pairs(Array)
- returns: Object

Example:

```js
fromPairs([
	['a', 1],
	['b', 2],
]); // { a: 1, b: 2}
```

### head(arr)

returns the first element of the array

- arguments: arr(Array)
- returns: first element of the array

Example:

```js
head([1, 2, 3]); // [1]
head(['a', 'b', 'c']); // ['a']
head([]); // undefined
```

### indexOf(arr, value, fromIndex=0)

returns the index number of the value

- arguments: arr(Array), value(any), fromIndex=0(number)
- returns: index number of the value

Example:

```js
indexOf([1, 2, 1, 2], 2); // 1
indexOf([1, 2, 1, 2], 2, 2); // 3
indexOf([1, 2, 1, 2], 2, -1); // 3
indexOf([1, 2, 1, 2], 3); // -1
```

### initial(arr)

get all but the last element of the array

- arguments: arr(Array)
- returns: Array of the all element but the last.

Example:

```js
initial([1, 2, 3]); // [1, 2]
```

### join(arr, separator=', ')

Converts all elements in array into a string separated by `separator`.

- arguments: arr(Array), separator=', '(string)
- returns: (string) Returns the joined string

Example:

```js
join(['a', 'b', 'c']); // a, b, c
join(['a', 'b', 'c'], '~'); // a~b~c
```

### last(arr)

Returns the last element of the array.

- arguments: arr(Array)
- returns: (any) the last element of the array

Example:

```js
last([1, 2, 3]); // 3
```

### lastIndexOf(arr, value, fromIndex=arr.length-1)

This method is like `indexOf` except that it iterates over elements of array from right to left.

- arguments: arr(Array), value(any), fromIndex=arr.length-1(number)
- returns: (number) Returns the index of the matched value, else -1.

Example:

```js
lastIndexOf([1, 2, 1, 2], 2); // 3
lastIndexOf([1, 2, 1, 2], 2, 2); // 1
lastIndexOf([1, 2, 1, 2], 3); // -1
```

### nth(arr, n=0)

Gets the element at index n of array. If n is negative, the nth element from the end is returned.

- arguments: arr(Array), n=0(number)
- returns: (any) Returns the nth element of array.

Example:

```js
nth(['a', 'b', 'c', 'd'], 1); // b
nth(['a', 'b', 'c', 'd'], -2); // c
```

### pull(arr, ...values)

Removes all given values from array

- arguments: arr(Array), ...values(any)
- returns: (Array) Removes all given values from array

Example:

```js
const array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(array, 'a', 'c')); // [b, b]
```

### pullAll(arr, values

This method is like pull except that it accepts an array of values to remove.

- arguments: arr(Array), values(Array)
- returns: (Array) Removes all given values from array

Example:

```js
const array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(array, ['a', 'c'])); // [b, b]
```

### pullAt(arr, indexes)

Removes elements from array corresponding to indexes and returns an array of removed elements.

**N.B.:**
This method mutates array

- arguments: arr(Array), indexes(Array)
- returns: (Array) Returns the new array of removed elements.

Example:

```js
const array = ['a', 'b', 'c', 'd'];
console.log(pullAt(array, [1, 3])); // [b, d]
console.log(array); // [a, c]
```

### reverse(arr)

Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.

**N.B.:**
This method mutates array

- arguments: arr(Array)
- returns: (Array) Returns array

Example:

```js
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
reverse(array1);
reverse(array2);
console.log(array1); // [3, 2, 1]
console.log(array2); // [c, b, a]
```

### slice(arr, start=0, end=arr.length)

Creates a slice of `array` from `start` up to, but not including, `end`.

- arguments: arr(Array), start=0(number), end=arr.length(number)
- returns: (Array) Returns array

Example:

```js
console.log(slice([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(slice([1, 2, 3, 4, 5], 2)); // [3, 4, 5]
console.log(slice([1, 2, 3, 4, 5], 2, 4)); // [3, 4]
```

### sortedIndex(arr, value)

determine the lowest index at which value should be inserted into `array` in order to maintain its sort order.

- arguments: arr(Array), value(any)
- returns: (number) Returns sorted index

Example:

```js
console.log(sortedIndex([30, 50], 40)); // 1
console.log(sortedIndex([30, 50], 20)); // 0
console.log(sortedIndex([30, 50], 60)); // 2
console.log(sortedIndex([30, 50], 30)); // 0
console.log(sortedIndex(['a', 'c'], 'b')); // 1
console.log(sortedIndex(['a', 'c'], 'd')); // 2
```

### sortedIndexOf(arr, value)

Returns the index of the matched value, else -1.

- arguments: arr(Array), value(any)
- returns: (number) Returns the index of the matched value, else -1.

Example:

```js
console.log(sortedIndexOf([4, 5, 5, 5, 6], 4)); // 0
console.log(sortedIndexOf([4, 5, 5, 5, 6], 5)); // 1
console.log(sortedIndexOf([4, 5, 5, 5, 6], 6)); // 4
console.log(sortedIndexOf([4, 5, 5, 5, 6], 7)); // -1
```

### sortedLastIndex(arr, value)

This method is like `sortedIndex` except that it returns the highest index at which value should be inserted into array in order to maintain its sort order.

- arguments: arr(Array), value(any)
- returns: (number) Returns the index at which value should be inserted into array.

Example:

```js
console.log(sortedLastIndex([4, 5, 5, 5, 6], 5)); // 4
console.log(sortedLastIndex([4, 5, 5, 5, 6], 3)); // 0
console.log(sortedLastIndex([4, 5, 5, 5, 6], 4)); // 1
console.log(sortedLastIndex([4, 5, 5, 5, 6], 6)); // 5
console.log(sortedLastIndex([4, 5, 5, 5, 6], 7)); // 5
```

### sortedLastIndexOf(arr, value)

Returns the last index of the matched value, else -1.

- arguments: arr(Array), value(any)
- returns: (number) Returns the last index of the matched value, else -1.

Example:

```js
console.log(sortedLastIndexOf([4, 5, 5, 5, 6], 5)); // 3
```

### sortedUniq(arr)

Returns the new duplicate free array.

- arguments: arr(Array)
- returns: (Array) Returns the new duplicate free array.

Example:

```js
console.log(sortedUniq([1, 1, 2])); // [1, 2]
```

### tail(arr)

Get all elements except first

- arguments: arr(Array)
- returns: (Array) Returns the sliced array

Example:

```js
console.log(tail([1, 2, 3])); // [2, 3]
```

### take(arr, n=1)

Creates a slice of array with n elements taken from the beginning.

- arguments: arr(Array), n=1(Number)
- returns: (Array) Returns the sliced array

Example:

```js
console.log(take([1, 2, 3])); // [1]
console.log(take([1, 2, 3], 2)); // [1, 2]
console.log(take([1, 2, 3], 5)); // [1, 2, 3]
console.log(take([1, 2, 3], 0)); // []
```

### takeRight(arr, n=1)

Creates a slice of array with n elements taken from the end.

- arguments: arr(Array), n=1(Number)
- returns: (Array) Returns the sliced array

Example:

```js
console.log(takeRight([1, 2, 3])); // [3]
console.log(takeRight([1, 2, 3], 2)); // [2, 3]
console.log(takeRight([1, 2, 3], 5)); // [1, 2, 3]
console.log(takeRight([1, 2, 3], 0)); // []
```

### union(...arrays)

Creates an array of unique values.

- arguments: ...arrays(Array)
- returns: (Array) Returns the new array of combined values

Example:

```js
console.log(union([2], [1, 2])); // [2, 1]
```

### uniq(array)

Creates a duplicate-free version of an array

- arguments: array (Array)
- returns: (Array) Returns the new duplicate free array

Example:

```js
console.log(uniq([2, 1, 2, 3, 3, 3])); // [2, 1, 3]
```

### unzip(array)

It accepts an array of grouped elements and creates an array regrouping the elements to their pre-zip configuration.

- arguments: array (Array)
- returns: (Array) Returns the regrouped elements

```js
console.log(
	unzip([
		['a', 1, true],
		['b', 2, false],
	])
);
```
