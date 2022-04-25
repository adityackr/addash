function chunk(arr, size = 1) {
	this.firstEl = [];
	this.lastEl = [];
	this.newArr = [firstEl, lastEl];
	if (arr.length === 0 || size >= arr.length || size < 1) {
		return [];
	}
	for (let i = 0; i < size; i++) {
		this.firstEl.push(arr[i]);
	}
	for (let i = size; i < arr.length; i++) {
		this.lastEl.push(arr[i]);
	}
	return this.newArr;
}

module.exports = chunk;
