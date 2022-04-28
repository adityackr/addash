/**
 * @param {Array}
 * @returns {Array}
 */

const flatten = require('./flatten');

function flattenDeep(arr) {
	this.newArr = [...arr];
	for (let i = 0; i < this.newArr.length; i++) {
		flatten(this.newArr);
	}
	return this.newArr;
}

module.exports = flattenDeep;
