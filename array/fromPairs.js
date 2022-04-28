/**
 * @param {Array}
 * @returns {Object}
 */

function fromPairs(pairs) {
	this.obj = {};
	for (let i = 0; i < pairs.length; i++) {
		this.obj[pairs[i][0]] = pairs[i][1];
	}
	return this.obj;
}

module.exports = fromPairs;
