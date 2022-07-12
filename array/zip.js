/**
 *
 * @param {Array} array arrays
 * @returns {Array} returns the new array of grouped elements
 */

function zip(...array) {
	this.newArr = [];
	for (let i = 0; i < array[0].length; i++) {
		if (!Array.isArray(this.newArr[i])) {
			this.newArr[i] = [];
		}
		for (let arr of array) {
			this.newArr[i].push(arr[i]);
		}
	}
	return this.newArr;
}

console.log(zip(['a', 'b'], [1, 2], [true, false]));

module.exports = zip;
