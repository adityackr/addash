/**
 *
 * @param {Array} array Array of arrays
 * @returns {Array} returns new array of regrouped elements
 */

function unzip(array) {
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

module.exports = unzip;
