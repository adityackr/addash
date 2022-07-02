/**
 * @param {Array} array
 * @returns {Array}
 */
function uniq(array) {
	this.newArr = [];
	array.forEach((item) => {
		if (!this.newArr.includes(item)) {
			this.newArr.push(item);
		}
	});
	return this.newArr;
}

module.exports = uniq;
