/**
 *
 * @param {Array} array
 * @returns {Array} returns the array of unique values
 */

function xor(...array) {
	this.newArr = [];
	for (let i = 0; i < array[0].length; i++) {
		for (let j = 1; j < array.length; j++) {
			if (array[0][i] !== array[j][i]) {
				if (!this.newArr.includes(array[0][i])) {
					this.newArr.push(array[0][i], array[j][i]);
				} else {
					this.newArr.push(array[j][i]);
				}
			}
		}
	}
	return this.newArr;
}

module.exports = xor;
