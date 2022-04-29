/**
 * @param {Array} arr
 * @param {number} n
 * @returns {any}
 */

function nth(arr, n = 0) {
	return n >= 0 ? arr[n] : arr[n + arr.length];
}

module.exports = nth;
