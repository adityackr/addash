/**
 * @param {Array} arr
 * @returns {Array}
 */

function sortedUniq(arr) {
	this.newArr = [...arr];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			this.newArr.splice(i + 1, 1);
		}
	}
	return this.newArr;
}

module.exports = sortedUniq;
