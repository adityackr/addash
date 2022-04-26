/**
 * @param {Array}
 * @param {...Array}
 * @returns {Array}
 */

function difference() {
	this.newArr = [];
	for (let i = 1; i < arguments.length; i++) {
		for (let j = 0; j < arguments[0].length; j++) {
			if (arguments[0][j] !== arguments[i][j]) {
				this.newArr.push(arguments[0][j]);
			}
		}
	}
	return this.newArr;
}

module.exports = difference;
