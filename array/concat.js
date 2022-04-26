/**
 * @param {Array, ...*}
 * @returns {Array}
 */
function concat() {
	this.newArr = [];
	for (let i = 0; i < arguments.length; i++) {
		if (Array.isArray(arguments[i])) {
			for (let j = 0; j < arguments[i].length; j++) {
				this.newArr.push(arguments[i][j]);
			}
		} else {
			this.newArr.push(arguments[i]);
		}
	}

	return this.newArr;
}

module.exports = concat;
