/**
 * @param {Array}
 * @returns {Array}
 */

const flatten = require('./flatten');

function flattenDepth(arr, depth = 1) {
	this.newArr = [...arr];
	for (let i = 0; i < depth; i++) {
		flatten(this.newArr);
	}
	return this.newArr;
}

module.exports = flattenDepth;
