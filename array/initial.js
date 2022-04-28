/**
 * @param {Array} arr
 * @returns {Array} all but last element of the array
 */

function initial(arr) {
	this.newArr = [];
	for (let i = 0; i < arr.length - 1; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

module.exports = initial;
