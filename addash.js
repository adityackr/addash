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
 * @returns {any}
 */

function head(arr) {
	return arr[0];
}

module.exports = {
	chunk,
	compact,
	concat,
	difference,
	drop,
	dropRight,
	fill,
	head,
};
