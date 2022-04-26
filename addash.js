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

module.exports = { chunk, compact, concat };
