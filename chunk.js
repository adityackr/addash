function chunk(arr, size = 1) {
	let firstEl = [];
	let lastEl = [];
	let newArr = [firstEl, lastEl];
	for (let i = 0; i < size; i++) {
		firstEl.push(arr[i]);
	}
	for (let i = size; i < arr.length; i++) {
		lastEl.push(arr[i]);
	}
	return newArr;
}
