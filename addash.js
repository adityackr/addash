/**
 * @param {Array}
 * @param {number}
 * @returns {Array}
 */

function chunk(arr, size = 1) {
	this.firstEl = [];
	this.lastEl = [];
	this.newArr = [firstEl, lastEl];
	if (arr.length === 0 || size >= arr.length || size < 1) {
		return [];
	}
	for (let i = 0; i < size; i++) {
		this.firstEl.push(arr[i]);
	}
	for (let i = size; i < arr.length; i++) {
		this.lastEl.push(arr[i]);
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @returns {Array}
 */

function compact(arr) {
	this.newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			this.newArr.push(arr[i]);
		}
	}
	return this.newArr;
}

/**
 * @param {Array, ...*}
 * @returns {Array}
 */
function concat() {
	this.newArr = [];
	if (Array.isArray(arguments[0])) {
		for (let i = 0; i < arguments.length; i++) {
			if (Array.isArray(arguments[i])) {
				for (let j = 0; j < arguments[i].length; j++) {
					this.newArr.push(arguments[i][j]);
				}
			} else {
				this.newArr.push(arguments[i]);
			}
		}
	}

	return this.newArr;
}

/**
 * @param {Array}
 * @param {...Array}
 * @returns {Array}
 */

function difference() {
	this.newArr = [];
	for (let i = 1; i < arguments.length; i++) {
		for (let j = 0; j < arguments[0].length; j++) {
			if (arguments[0][j] !== arguments[i][j]) {
				this.newArr.push(arguments[0][j]);
			}
		}
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @param {number}
 * @returns {Array}
 */

function drop(arr, n = 1) {
	this.newArr = [];
	for (let i = n; i < arr.length; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @param {number}
 * @returns {Array}
 */

function dropRight(arr, n = 1) {
	this.newArr = [];
	for (let i = 0; i < arr.length - n; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @param {any}
 * @param {number}
 * @param {number}
 * @returns {Array}
 */

function fill(arr, value, start = 0, end = arr.length) {
	this.newArr = [...arr];
	for (let i = start; i < end; i++) {
		this.newArr[i] = value;
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @returns {Array}
 */

function flatten(arr) {
	this.newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			for (let j = 0; j < arr[i].length; j++) {
				this.newArr.push(arr[i][j]);
			}
		} else {
			this.newArr.push(arr[i]);
		}
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @returns {Array}
 */

function flattenDeep(arr) {
	this.newArr = [...arr];
	for (let i = 0; i < this.newArr.length; i++) {
		flatten(this.newArr);
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @returns {Array}
 */

function flattenDepth(arr, depth = 1) {
	this.newArr = [...arr];
	for (let i = 0; i < depth; i++) {
		flatten(this.newArr);
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @returns {Object}
 */

function fromPairs(pairs) {
	this.obj = {};
	for (let i = 0; i < pairs.length; i++) {
		this.obj[pairs[i][0]] = pairs[i][1];
	}
	return this.obj;
}

/**
 * @param {Array}
 * @returns {any}
 */

function head(arr) {
	return arr[0];
}

/**
 * @param {Array} arr
 * @param {any} value
 * @param {number} fromIndex
 * @returns {number}
 */

function indexOf(arr, value, fromIndex = 0) {
	let index = -1;
	if (fromIndex < 0) {
		fromIndex += arr.length;
	}
	for (let i = fromIndex; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}
	return index;
}

/**
 * @param {Array} arr
 * @returns {Array} all but last element of the array
 */

function initial(arr) {
	this.newArr = [];
	for (let i = 0; i < arr.length - 1; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

/**
 * @param {Array} arr
 * @param {string} separator
 * @returns {String}
 */

function join(arr, separator = ', ') {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length - 1) {
			str += arr[i] + separator;
		} else {
			str += arr[i];
		}
	}
	return str;
}

/**
 * @param {Array} arr
 * @returns {any} last element of the array
 */

function last(arr) {
	return arr[arr.length - 1];
}

/**
 * @param {Array} arr
 * @param {any} value
 * @param {number} fromIndex
 * @returns {number}
 */

function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
	let index = -1;
	for (let i = fromIndex; i >= 0; i--) {
		if (arr[i] === value) {
			index = i;
			break;
		}
	}
	return index;
}

/**
 * @param {Array} arr
 * @param {number} n
 * @returns {any}
 */

function nth(arr, n = 0) {
	return n >= 0 ? arr[n] : arr[n + arr.length];
}

/**
 * @param {Array}
 * @param {...any} values
 * @returns {Array}
 */

function pull(arr, ...values) {
	this.filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!values.includes(arr[i])) {
			this.filteredArr.push(arr[i]);
		}
	}
	return this.filteredArr;
}

/**
 * @param {Array} arr
 * @param {Array} values
 * @returns {Array}
 */

function pullAll(arr, values) {
	this.filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!values.includes(arr[i])) {
			this.filteredArr.push(arr[i]);
		}
	}
	return this.filteredArr;
}

/**
 * @param {Array} arr
 * @param {Array} indexes
 * @returns {Array}
 */

function pullAt(arr, indexes) {
	this.pulledArr = [];
	let spliced;
	for (let i = 0; i < indexes.length; i++) {
		if (i === 0) {
			spliced = arr.splice(indexes[i], 1);
		} else {
			spliced = arr.splice(indexes[i] - 1, 1);
		}
		this.pulledArr.push(spliced[0]);
	}
	return this.pulledArr;
}

/**
 * @param {Array} arr
 * @returns {Array}
 */

function reverse(arr) {
	this.newArr = [...arr];
	for (let i = this.newArr.length - 1; i >= 0; i--) {
		arr[arr.length - 1 - i] = this.newArr[i];
	}
	return arr;
}

/**
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 * @returns {Array}
 */

function slice(arr, start = 0, end = arr.length) {
	this.newArr = [];
	for (let i = start; i < end; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

/**
 * @param {Array} arr
 * @param {any} value
 * @returns {number}
 */

function sortedIndex(arr, value) {
	let index = -1;
	for (let i = 0; i < arr.length; i++) {
		if (value <= arr[i]) {
			index = i;
			break;
		}
		if (value > arr[i]) {
			index = i + 1;
		}
	}
	return index;
}

/**
 * @param {Array} arr
 * @param {any} value
 * @returns {number}
 */

function sortedIndexOf(arr, value) {
	let index = -1;
	for (let i = 0; i < arr.length; i++) {
		if (value === arr[i]) {
			index = i;
			break;
		}
	}
	return index;
}

/**
 * @param {Array} arr
 * @param {any} value
 * @returns {number}
 */

function sortedLastIndex(arr, value) {
	let index = -1;
	for (let i = 0; i < arr.length; i++) {
		if (value < arr[i]) {
			index = i;
			break;
		}
		if (value >= arr[i]) {
			index = i + 1;
		}
	}
	return index;
}

/**
 * @param {Array} arr
 * @param {any} value
 * @returns {number}
 */

function sortedLastIndexOf(arr, value) {
	let index = -1;
	for (let i = 0; i < arr.length; i++) {
		if (value === arr[i]) {
			index = i;
		}
	}
	return index;
}

/**
 * @param {Array} arr
 * @returns {Array}
 */

function sortedUniq(arr) {
	this.newArr = [...arr];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			this.newArr.splice(i + 1, 1);
		}
	}
	return this.newArr;
}

/**
 * @param {Array} arr
 * @returns {Array}
 */

function tail(arr) {
	this.newArr = [];
	for (let i = 1; i < arr.length; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

/**
 * @param {Array} arr
 * @param {Number} n
 * @returns {Array}
 */

function take(arr, n = 1) {
	this.newArr = [];
	for (let i = 0; i < n; i++) {
		if (n > arr.length) {
			n = arr.length;
		}
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

/**
 * @param {Array} arr
 * @param {Number} n=1
 * @returns {Array}
 */

function takeRight(arr, n = 1) {
	this.newArr = [];
	if (n > arr.length) {
		n = arr.length;
	}
	for (let i = arr.length - n; i < arr.length; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

/**
 *
 * @param  {...Array} arrays
 * @returns {Array}
 */

function union(...arrays) {
	this.newArr = [];
	arrays.forEach((array) => {
		array.forEach((item) => {
			if (!this.newArr.includes(item)) {
				this.newArr.push(item);
			}
		});
	});
	return this.newArr;
}

/**
 * @param {Array} array
 * @returns {Array}
 */
function uniq(array) {
	this.newArr = [];
	array.forEach((item) => {
		if (!this.newArr.includes(item)) {
			this.newArr.push(item);
		}
	});
	return this.newArr;
}

/**
 *
 * @param {Array} array arrays
 * @returns {Array} returns new array of regrouped elements
 */

function unzip(...array) {
	this.newArr = [];
	for (let i = 0; i < array[0].length; i++) {
		if (!Array.isArray(this.newArr[i])) {
			this.newArr[i] = [];
		}
		for (let arr of array) {
			this.newArr[i].push(arr[i]);
		}
	}
	return this.newArr;
}

/**
 *
 * @param {Array} array
 * @param {any} values
 * @returns {Array} returns the new array of grouped elements
 */

function without(array, ...values) {
	this.filteredArr = [];
	for (let i = 0; i < array.length; i++) {
		if (!values.includes(array[i])) {
			this.filteredArr.push(array[i]);
		}
	}
	return this.filteredArr;
}

/**
 *
 * @param {Array} array
 * @returns {Array} returns the array of unique values
 */

function xor(...array) {
	this.newArr = [];
	for (let i = 0; i < array[0].length; i++) {
		for (let j = 1; j < array.length; j++) {
			if (array[0][i] !== array[j][i]) {
				if (!this.newArr.includes(array[0][i])) {
					this.newArr.push(array[0][i], array[j][i]);
				} else {
					this.newArr.push(array[j][i]);
				}
			}
		}
	}
	return this.newArr;
}

/**
 *
 * @param {Array} array arrays
 * @returns {Array} returns the new array of grouped elements
 */

function zip(...array) {
	this.newArr = [];
	for (let i = 0; i < array[0].length; i++) {
		if (!Array.isArray(this.newArr[i])) {
			this.newArr[i] = [];
		}
		for (let arr of array) {
			this.newArr[i].push(arr[i]);
		}
	}
	return this.newArr;
}

module.exports = {
	chunk,
	compact,
	concat,
	difference,
	drop,
	dropRight,
	fill,
	flatten,
	flattenDeep,
	flattenDepth,
	fromPairs,
	head,
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
	without,
	zip,
	xor,
};
