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

module.exports = takeRight;
