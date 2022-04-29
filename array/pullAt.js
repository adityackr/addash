/**
 * @param {Array} arr
 * @param {Array} indexes
 * @returns {Array}
 */

function pullAt(arr, indexes) {
	this.pulledArr = [];
	let spliced;
	for (let i = 0; i < indexes.length; i++) {
		if (i === 0) {
			spliced = arr.splice(indexes[i], 1);
		} else {
			spliced = arr.splice(indexes[i] - 1, 1);
		}
		this.pulledArr.push(spliced[0]);
	}
	return this.pulledArr;
}

module.exports = pullAt;
