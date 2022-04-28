/**
 * @param {Array}
 * @returns {Array}
 */

function flatten(arr) {
	this.newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			for (let j = 0; j < arr[i].length; j++) {
				this.newArr.push(arr[i][j]);
			}
		} else {
			this.newArr.push(arr[i]);
		}
	}
	return this.newArr;
}

module.exports = flatten;
