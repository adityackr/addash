/**
 * @param {Array, ...*}
 * @returns {Array}
 */
function concat() {
	this.newArr = [];
	if (Array.isArray(arguments[0])) {
		for (let i = 0; i < arguments.length; i++) {
			if (Array.isArray(arguments[i])) {
				for (let j = 0; j < arguments[i].length; j++) {
					this.newArr.push(arguments[i][j]);
				}
			} else {
				this.newArr.push(arguments[i]);
			}
		}
	}

	return this.newArr;
}

module.exports = concat;
