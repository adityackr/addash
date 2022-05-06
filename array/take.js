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

module.exports = take;
