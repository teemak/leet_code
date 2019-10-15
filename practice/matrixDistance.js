// in: R, C, r0, c0
//     3  3  0   0
// out: [[0,0],[0,1],[1,0],[0,2],[1,1],[2,0],[1,2],[2,1],[2,2]]
//
// SOLUTION ONE
// MANHATTAN DISTANCE
//     0 X X
//     X X X
//     X X X
//
//     0    1    2    3    4
//    0,0  0,1  0,2  1,2  2,2
//         1,0  1,1  2,1
//              2,0
//
// in: 2  2  0   1
// out: [[0,1],[0,0],[1,1],[1,0]]
//
//     X 0
//     X X
//
//
// in: 2  3  0  1
// out: ?
//
// SOLUTION TWO
// breadth-first search
//
//    0  X  X
//    X  X  X
//
//
// 1) keep an array of visited indexes
// 2) keep a queue of possible nodes
// 2) while deque has a value iterate
// 3) use starting coordinates as traveler
// 4) keep result of possible paths
// 5) travel right - check if visited
//    a) skip
//    b) add to coordinates queue && change to visited
// 6) travel down - check if visited
//    a) skip
//    b) add to coordinates queue && change to visited
// 7) travel left - check if visited || out of bounds
// 8) travel up   - check if visited || out of bounds
// 9) access queue - [0,1] - [1,0]
// 10) deque becomes next traveler
// *) UP - LEFT - RIGHT - DOWN
//
function matrixDistance(R, C, r0, c0) {
	// 1)
	let visited = new Array(R);
	// 4)
	let result = [];
	for (let i = 0; i < R; i++) {
		visited[i] = new Array(C);
	}
	// 2)
	let queue = [[r0, c0]];
	//coordinates visited
	visited[r0][c0] = true;
	// 3)
	while (queue.length) {
		let current = queue.shift();
		result.push(current);
		let row = current[0];
		let col = current[1];

		// 5)
		// ^^^^^
		if (row > 0 && !visited[row - 1][col]) {
			//pushing coordinates
			queue.push([row - 1, col]);
			visited[row - 1][col] = true;
		}
		// <<<<<
		if (col > 0 && !visited[row][col - 1]) {
			//pushing coordinates
			queue.push([row, col - 1]);
			visited[row][col - 1] = true;
		}
		// >>>>>
		if (col < C - 1 && !visited[row][col + 1]) {
			// pushing coordinates
			queue.push([row, col + 1]);
			visited[row][col + 1] = true;
		}
		// VVVVV
		if (row < R - 1 && !visited[row + 1][col]) {
			// pushing coordinates
			queue.push([row + 1, col]);
			visited[row + 1][col] = true;
		}
	}
	return result;
}

let result = matrixDistance(2, 3, 1, 2);
const expected = [[1, 2], [0, 2], [1, 1], [0, 1], [1, 0], [0, 0]];
console.log(result);
console.log(expected);
