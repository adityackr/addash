/**
 * @param {Array} arr
 * @returns {Array}
 */

function tail(arr) {
	this.newArr = [];
	for (let i = 1; i < arr.length; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

module.exports = tail;
