/**
 * @param {Array}
 * @returns {Array}
 */

function compact(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

module.exports = compact;
