# Addash

addash is a library like lodash. I am creating the library on my way. Anyone can use this library. I will try to create all the features as lodash does. Brief description of all features are given below:

=> **chunk(arr, size)**  
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

=> **compact(arr)**  
Filter an array with only truthy values.

- arguments: arr(Array)
- returns: Array

Example:

```js
compact([0, 1, false, 2, '', 3]); // [1, 2, 3]
compact([0, 1, true, 'text', null, undefined, NaN, false, 2, '', 3]); // [1, true, 'text', 2, 3]
```

=> **concat(arr, ...values)**  
Creates an array by concatenating with more arrays or values.

- arguments: arr(Array), ...values(Array)
- returns: Array

Example:

```js
concat([1], 2, [3], [[4]]); // [1, 2, 3, [4]]
concat(1, 2, [3], [[4]]); // []
concat(); // []
```

=> **difference(arr, [values])**  
Creates an array by concatenating with more arrays or values.

- arguments: arr(Array), [values (Array)]
- returns: Array

Example:

```js
difference([2, 1], [2, 3]); // [1]
```

=> **drop(arr, n=1)**  
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

=> **dropRight(arr, n=1)**  
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

=> **fill(arr, value, start=0, end=arr.length)**  
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

=> **flatten(arr)**  
Flattens array a single level deep.

- arguments: arr(Array)
- returns: Array

Example:

```js
flatten([1, [2, [3, [4]], 5]]); // [1, 2, [3, [4]], 5]
```

=> **flattenDeep(arr)**  
Recursively flattens array.

- arguments: arr(Array)
- returns: Array

Example:

```js
flattenDeep([1, [2, [3, [4]], 5]]); // [1, 2, 3, 4, 5]
```

=> **flattenDepth(arr, depth=1)**  
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

=> **fromPairs(pairs)**  
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

=> **head(arr)**  
returns the first element of the array

- arguments: arr(Array)
- returns: first element of the array

Example:

```js
head([1, 2, 3]); // [1]
head(['a', 'b', 'c']); // ['a']
head([]); // undefined
```
