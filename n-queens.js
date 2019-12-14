//
// RULES - 1 queen on every row
//       - 2 queen on every col
//       - check diagonals for any new piece
//
// [ [Q], [ ], [ ], [ ], [ ], [ ] ,[ ] ,[ ]
//   [ ], [ ], [Q], [ ], [ ], [ ] ,[ ] ,[ ]
//   [ ], [ ], [ ], [ ], [ ], [ ] ,[ ] ,[ ]
//   [ ], [Q], [ ], [ ], [ ], [ ] ,[ ] ,[ ]
//   [ ], [ ], [ ], [ ], [Q], [ ] ,[ ] ,[ ]
//   [ ], [ ], [ ], [ ], [ ], [ ] ,[ ] ,[ ]
//   [ ], [ ], [ ], [ ], [ ], [ ] ,[ ] ,[ ]
//   [ ], [ ], [ ], [ ], [ ], [ ] ,[ ] ,[ ] ]
//
// BASE CASE - 1 intersection of queens
//           - 2 reach last column without queen placement
//           - 3 all queens have been placed
//

function queenAbove(matrix, x, y) {
	for (let yCoor = 0; yCoor < y; y++) {
		if (matrix[yCoor][x] === 1) {
			return true;
		}
	}
	return false;
}

function queenDiagonal(matrix, x, y) {
	//check diagonal above left
	return upToLeftDiag(matrix, x, y) || upToRightDiag(matrix, x, y);
	//check diagonal above right
	//check diagonal below left
	//check diagonal below right
}

function upToLeftDiag(matrix, x, y) {
	y--;
	x--;
	while (x > -1 && y > -1) {
		if (matrix[y][x] === 1) {
			return true;
		}
		y--;
		x--;
	}
	return false;
}
function upToRightDiag(matrix, x, y) {
	y--;
	x++;
	while (x < matrix.length && y > -1) {
		if (matrix[y][x] === 1) {
			return true;
		}
		y--;
		x++;
	}
	return false;
}

function queenIntersect(matrix, x, y) {
	return queenAbove(matrix, x, y) + queenDiagonal(matrix, x, y);
}

function nQueens(n) {
	let matrix = new Array(n).fill(new Array(n).fill(0));
	//matrix[1][0] = 1;
	//matrix[0][3] = 1;
	printMatrix(matrix);
	//console.log(queenAbove(matrix, 3, 3));
	let count = 0;
	let matrixLen = matrix.length;
	function placeQueens(y) {
		// SOLUTION BASE CASE
		if (y === matrixLen) {
			count++;
			return;
		}
		// INTERSECTION OF QUEENS
		for (let x = 0; x < matrixLen; x++) {
			if (queenIntersect(matrix, x, y)) {
				continue;
			}
			matrix[y][x] = 1;
			placeQueens(y + 1);
			matrix[y][x] = 0;
		}
		// NO QUEEN PLACEMENT
	}
	// ONLY CHECKS Y
	placeQueens(0);
	return count;
}

function printMatrix(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		console.log(JSON.stringify(matrix[i]));
	}
}

const result = nQueens(4);
console.time("N Queens: ");
console.log(result);
console.timeEnd("N Queens: ");
