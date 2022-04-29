/**
 * @param {Array} arr
 * @param {string} separator
 * @returns {String}
 */

function join(arr, separator = ', ') {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length - 1) {
			str += arr[i] + separator;
		} else {
			str += arr[i];
		}
	}
	return str;
}

module.exports = join;
