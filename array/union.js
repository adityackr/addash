/**
 *
 * @param  {...Array} arrays
 * @returns {Array}
 */

function union(...arrays) {
	this.newArr = [];
	arrays.forEach((array) => {
		array.forEach((item) => {
			if (!this.newArr.includes(item)) {
				this.newArr.push(item);
			}
		});
	});
	return this.newArr;
}

module.exports = union;
