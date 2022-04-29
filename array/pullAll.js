/**
 * @param {Array} arr
 * @param {Array} values
 * @returns {Array}
 */

function pullAll(arr, values) {
	this.filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!values.includes(arr[i])) {
			this.filteredArr.push(arr[i]);
		}
	}
	return this.filteredArr;
}

module.exports = pullAll;
