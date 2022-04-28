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

module.exports = fill;
