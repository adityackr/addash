/**
 * @param {Array} arr
 * @param {any} value
 * @returns {number}
 */

function sortedLastIndex(arr, value) {
	let index = -1;
	for (let i = 0; i < arr.length; i++) {
		if (value < arr[i]) {
			index = i;
			break;
		}
		if (value >= arr[i]) {
			index = i + 1;
		}
	}
	return index;
}

module.exports = sortedLastIndex;
