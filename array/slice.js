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

module.exports = slice;
