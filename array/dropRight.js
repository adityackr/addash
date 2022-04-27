/**
 * @param {Array}
 * @param {number}
 * @returns {Array}
 */

function dropRight(arr, n = 1) {
	this.newArr = [];
	for (let i = 0; i < arr.length - n; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

module.exports = dropRight;
