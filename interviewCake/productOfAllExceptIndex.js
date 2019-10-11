//in:  [1,  7,   3, 4]
//out: [84, 12, 28, 21]
//
//time:  O(n^2)
//space: O(1) ? can I do this in place
//
// BRUTE FORCE
// O(n^n)
//
//
//
function returnProductOfAll(arr) {
	let { length } = arr;
	if (length < 2) throw new Error("Not enough elements");
	let prodSoFar = 1;
	let result = [];

	//product of all elements BEFORE index
	for (let i = 0; i < length; i++) {
		result[i] = prodSoFar;
		prodSoFar *= arr[i];
	}

	//product of all elements AFTER index
	prodSoFar = 1;
	for (let i = length - 1; i >= 0; i--) {
		result[i] *= prodSoFar;
		prodSoFar *= arr[i];
	}
	return result;
}

module.exports = returnProductOfAll;

/*
let input = [1, 7, 3, 4];
let result = JSON.stringify(returnProductOfAll(input));
let expected = JSON.stringify([84, 12, 28, 21]);
console.assert(
	expected == result,
	`expected [1, 7, 3, 4] to return [84, 12, 28, 21] instead of ${result}`,
);

input = [8, 2, 4, 3, 1, 5];
result = JSON.stringify(returnProductOfAll(input));
expected = JSON.stringify([120, 480, 240, 320, 960, 192]);

console.assert(expected == result, `expected ${result} to return ${expected} instead of ${result}`);
*/
