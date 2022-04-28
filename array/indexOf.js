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

module.exports = indexOf;
