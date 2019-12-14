// TIME: O(N^2)
// SPACE: O(1) - result does not grow it is always same size relative to input
// find largest number's index
// place that number in new array
let input = [6, 2, 8, 5, 9];

// INDEX IS NEEDED FOR SPLICE FUNCTION
function findLargest(input) {
	console.log("INPUT", input);
	let largest = input[0];
	let result = 0;
	for (let i = 1; i < input.length; i++) {
		const current = input[i];
		if (current > largest) {
			largest = current;
			result = i;
		}
	}
	return result;
}

function selectionSort(arr) {
	let result = [];
	let largest;
	while (arr.length) {
		// get index of largest number
		largest = findLargest(arr);
		console.log("LARGEST INDEX", largest);
		// iterate over input array find largest number and splice
		result.push(arr[largest]);
		// REASON WE USE INDEX
		arr.splice(largest, 1);
		// largest number gets put into result array
	}
	//selectionSort(arr);
	return result;
}
console.log(input);
console.log(selectionSort(input));
