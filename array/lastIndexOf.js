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

module.exports = lastIndexOf;
