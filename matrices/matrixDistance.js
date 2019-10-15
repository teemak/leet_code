// in: matrix(R, C, r0, c0)
//
// out: matrix
//
//
// in:  matrix(1,2,0,0)
// out: [ [0,0], [0,1] ]
//
//
//
function matrixDistance(R, C, r0, c0) {
	/*
	//Breadth first
	const result = [];
	const floorIdx = R - 1;
	const wallIdx = C - 1;
	// KEEPS TRACK OF VISITED INDEXES
	const visited = new Array(R);
	// CREATE MIRROR ARRAY OF POSSIBLE PATHS
	for (let i = 0; i < R; i++) {
		visited[i] = new Array(C);
	}
	let traveler, row, col;
	let left, right, top, bottom;

	let queue = [[r0, c0]];
	visited[r0][c0] = true;

	while (queue.length) {
		traveler = queue.shift();
		result.push(traveler);

		row = traveler[0];
		col = traveler[1];
		left = col - 1;
		right = col + 1;
		top = row - 1;
		bottom = row + 1;

		// CAN TRAVEL TOP
		if (row > 0 && !visited[top][col]) {
			queue.push([top, col]);
			visited[top][col] = true;
		}
		// CAN TRAVEL LEFT
		if (col > 0 && !visited[row][left]) {
			queue.push([row, left]);
			visited[row][left] = true;
		}
		// CAN TRAVEL RIGHT
		if (col < wallIdx && !visited[row][right]) {
			queue.push([row, right]);
			visited[row][right] = true;
		}
		// CAN TRAVEL BOTTOM
		if (row < floorIdx && !visited[bottom][col]) {
			queue.push([bottom, col]);
			visited[bottom][col] = true;
		}
	}
	return result;
	*/
	const result = [];
	for (let r = 0; r < R; r++) {
		for (let c = 0; c < C; c++) {
			let dist = Math.abs(r - r0) + Math.abs(c - c0);
			result.push([r, c, dist]);
		}
	}
	result.sort((a, b) => a[2] - b[2]);
	result.map(arr => arr.pop());
	return result;
}

//let result = matrixDistance(1, 2, 0, 0);
//let result = matrixDistance(2, 2, 0, 1);
let result1 = matrixDistance(1, 2, 0, 0);
let result2 = matrixDistance(2, 2, 0, 1);
let result3 = matrixDistance(3, 3, 0, 0);

//console.log("result:\t\t", result1);
const expected1 = [[0, 0], [0, 1]];
//console.log("expected:\t", expected1);
console.log("result:\t\t", result2);
const expected2 = [[0, 1], [0, 0], [1, 1], [1, 0]];
//console.log("expected:\t", expected2);
//console.log("result:\t\t", result3);
//const expected3 = [[1, 2], [0, 2], [1, 1], [0, 1], [1, 0], [0, 0]];
//console.log("expected:\t", expected3);

//   1,2
//   x  x  x
//   x  x  S
//   x  x  x
//
//   0,2
//   x  x  O
//   x  x  S
//   x  x  x
//
//   1,1
//   x  x  O
//   x  O  S
//   x  x  x
//
//   0,1
//   x  O  O
//   X  O  S
//   x  x  x
//
//   1,0
//   x  O  O
//   O  O  S
//   x  x  x
//
//   0,0
//   O  O  O
//   O  O  S
//   x  x  x
