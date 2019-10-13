//
//
// in:  [[1,2,3], [4,5,6], [7,8,9]]
// out: [[1,4,7], [2,5,8], [3,6,9]]
//
// in:  [[1,2,3], [4,5,6]]
// out: [[1,4], [2,5], [3,6]]
//
//
//
// rows * cols
// M    * N
//
// resutl = cols * rows === N * M
//
function transpose(arr) {
	// every variable is for new result
	const M = arr[0].length; // current row is prev col
	const N = arr.length; // current N === col
	const result = [];

	for (let m = 0; m < M; m++) {
		//rows
		const current = []; // edge case to always have an array
		for (let n = 0; n < N; n++) {
			//cols
			current.push(arr[n][m]);
		}
		result.push(current);
	}
	return result;
}

function transposeMatrix(arr) {
	let m = arr.length; // original row
	let n = arr[0].length; // original col

	// fill VVVV rows = prev cols
	let result = new Array(n).fill(0); // how many arrays in result - NEW ROWS
	// fill >>>> cols
	for (let i = 0; i < result.length; i++) {
		// iterate each row
		// every row make a new array using result's row length
		// COLS
		result[i] = new Array(m).fill(0); // COL WIDTH
	}

	//COLUMN IS OUTER LOOP -- ORDER MATTERS set N*M = M*N
	for (let col = 0; col < result[0].length; col++) {
		//subArray col length
		//ROWS ARE INNER LOOP
		for (let row = 0; row < result.length; row++) {
			//edge case check
			if (result[row] == null) result[row] = []; // value is not an array
			//iterate result's total rows
			//result row * col === M * N = from previous N * M
			result[row][col] = arr[col][row];
			//console.log(arr[col][row]);
		}
	}
	return result;
}

let input = [[1, 2, 3], [4, 5, 6], 0];
console.log("ORIGINAL", input);
let resultA = transposeMatrix(input);
let resultB = transpose(input);
//const expected = [[1, 4], [2, 5], [3, 6]];
console.log(resultA);
console.log(resultB);
//console.log(expected);
