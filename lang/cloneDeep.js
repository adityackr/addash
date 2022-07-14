/**
 * creates a deep clone of the value
 * @param {*} value
 * @returns {*} Returns the deep clone value
 */

function cloneDeep(value) {
	return JSON.parse(JSON.stringify(value));
}

module.exports = cloneDeep;
