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

module.exports = sortedIndexOf;
