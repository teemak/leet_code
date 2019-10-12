// in: n
// out: n x n array
//
//
//
//
function spiralMatrix(n) {
	let result = [];
	let counter = 1;
	let startCol = 0;
	let startRow = 0;
	let endCol = n - 1;
	let endRow = n - 1;

	// create subarrays
	for (let i = 0; i < n; i++) {
		result.push([]);
	}

	while (startCol <= endCol && startRow <= endRow) {
		//right direction
		for (let i = startCol; i <= endCol; i++) {
			result[startRow][i] = counter;
			counter++;
		}
		startRow++;

		//down direction
		for (let i = startRow; i <= endRow; i++) {
			result[i][endCol] = counter;
			counter++;
		}
		endCol--;

		//left direction backwards
		for (let i = endCol; i >= startCol; i--) {
			result[endRow][i] = counter;
			counter++;
		}
		endRow--;

		//going up top backwards
		for (let i = endRow; i >= startRow; i--) {
			result[i][startCol] = counter;
			counter++;
		}
		startCol++;
	}

	return result;
}

let input = 4;
let result = spiralMatrix(input);
console.log(result);
