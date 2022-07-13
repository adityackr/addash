/**
 * Casts value as an array if it's not one.
 * @param {any} value
 * @returns {Array}
 */

function castArray(value) {
	if (arguments.length === 0) {
		return [];
	} else if (!Array.isArray(value)) {
		return [value];
	} else {
		return value;
	}
}

module.exports = castArray;
