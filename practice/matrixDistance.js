// in: R, C, r0, c0
//     3  3  0   0
// out: [[0,0],[0,1],[1,0],[0,2],[1,1],[2,0],[1,2],[2,1],[2,2]]
//
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
function matrixDistance(R, C, r0, c0) {
	const result = [];
	const buffer = [];

	for (let r = 0; r < R; r++) {
		for (let c = 0; c < C; c++) {
			// get the manhattan distance
			let distance = Math.abs(r - r0) + Math.abs(c - c0);
			// set an array for that distance
			if (buffer[distance] === undefined) buffer[distance] = [];
			// push coordinates into buffer
			buffer[distance].push([r, c]);
		}
	}

	// a for in loop will get you the keys
	// use a for of loop - you want the values
	for (const chunk of buffer) {
		result.push(...chunk);
	}

	return result;
}

let result = matrixDistance(2, 3, 0, 1);
console.log(result);
