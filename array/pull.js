/**
 * @param {Array}
 * @param {...any} values
 * @returns {Array}
 */

function pull(arr, ...values) {
	this.filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!values.includes(arr[i])) {
			this.filteredArr.push(arr[i]);
		}
	}
	return this.filteredArr;
}

module.exports = pull;
