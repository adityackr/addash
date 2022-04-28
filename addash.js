/**
 * @param {Array}
 * @param {number}
 * @returns {Array}
 */

const chunk = (arr, size = 1) => {
    if(size === 1) {
        return arr.map((value) => [value])
    }
    if(size <= 0) {
        return [];
    };
    if(size >= arr.length) {
        return [arr]
    }
    let arrayToBeReturned = [];
    let index = 0;
    let temp = size;
    while(index < arr.length) {
       let tempArray = [];

       for(index; index < size; index++) {
          tempArray.push(arr[index]);
          if(arr.length - 1 === index) {
              arrayToBeReturned.push(tempArray)
              return arrayToBeReturned
          }
       };

       arrayToBeReturned.push(tempArray);
       size += temp;
    }
    return arrayToBeReturned
};

/**
 * @param {Array}
 * @returns {Array}
 */

function compact(arr) {
	this.newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i]) {
			this.newArr.push(arr[i]);
		}
	}
	return this.newArr;
}

/**
 * @param {Array, ...*}
 * @returns {Array}
 */
function concat() {
	this.newArr = [];
	if (Array.isArray(arguments[0])) {
		for (let i = 0; i < arguments.length; i++) {
			if (Array.isArray(arguments[i])) {
				for (let j = 0; j < arguments[i].length; j++) {
					this.newArr.push(arguments[i][j]);
				}
			} else {
				this.newArr.push(arguments[i]);
			}
		}
	}

	return this.newArr;
}

/**
 * @param {Array}
 * @param {...Array}
 * @returns {Array}
 */

function difference() {
	this.newArr = [];
	for (let i = 1; i < arguments.length; i++) {
		for (let j = 0; j < arguments[0].length; j++) {
			if (arguments[0][j] !== arguments[i][j]) {
				this.newArr.push(arguments[0][j]);
			}
		}
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @param {number}
 * @returns {Array}
 */

function drop(arr, n = 1) {
	this.newArr = [];
	for (let i = n; i < arr.length; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @param {number}
 * @returns {Array}
 */

function dropRight(arr, n = 1) {
	this.newArr = [];
	for (let i = 0; i < arr.length - n; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @param {any}
 * @param {number}
 * @param {number}
 * @returns {Array}
 */

function fill(arr, value, start = 0, end = arr.length) {
	this.newArr = [...arr];
	for (let i = start; i < end; i++) {
		this.newArr[i] = value;
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @returns {Array}
 */

function flatten(arr) {
	this.newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			for (let j = 0; j < arr[i].length; j++) {
				this.newArr.push(arr[i][j]);
			}
		} else {
			this.newArr.push(arr[i]);
		}
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @returns {Array}
 */

function flattenDeep(arr) {
	this.newArr = [...arr];
	for (let i = 0; i < this.newArr.length; i++) {
		flatten(this.newArr);
	}
	return this.newArr;
}

/**
 * @param {Array}
 * @returns {Array}
 */

function flattenDepth(arr, depth = 1) {
	this.newArr = [...arr];
	for (let i = 0; i < depth; i++) {
		flatten(this.newArr);
	}
	return this.newArr;
}

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

/**
 * @param {Array}
 * @returns {any}
 */

function head(arr) {
	return arr[0];
}

/**
 * @param {Array} arr
 * @param {any} value
 * @param {number} fromIndex
 * @returns {number}
 */

function indexOf(arr, value, fromIndex = 0) {
	let index = -1;
	if (fromIndex < 0) {
		fromIndex += arr.length;
	}
	for (let i = fromIndex; i < arr.length; i++) {
		if (arr[i] === value) {
			return i;
		}
	}
	return index;
}

/**
 * @param {Array} arr
 * @returns {Array} all but last element of the array
 */

function initial(arr) {
	this.newArr = [];
	for (let i = 0; i < arr.length - 1; i++) {
		this.newArr.push(arr[i]);
	}
	return this.newArr;
}

module.exports = {
	chunk,
	compact,
	concat,
	difference,
	drop,
	dropRight,
	fill,
	flatten,
	flattenDeep,
	flattenDepth,
	fromPairs,
	head,
	indexOf,
	initial,
};
