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

module.exports = reverse;
