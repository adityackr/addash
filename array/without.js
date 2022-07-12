/**
 *
 * @param {Array} array
 * @param {any} values
 * @returns {Array} returns the new array of grouped elements
 */

function without(array, ...values) {
	this.filteredArr = [];
	for (let i = 0; i < array.length; i++) {
		if (!values.includes(array[i])) {
			this.filteredArr.push(array[i]);
		}
	}
	return this.filteredArr;
}

module.exports = without;
