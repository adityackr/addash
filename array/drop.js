/**
 * @param {Array}
 * @param {number}
 * @returns {Array}
 */

function drop(arr, n = 1) {
	this.newArr = [];
	for (let i = n; i < arr.length; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

module.exports = drop;
