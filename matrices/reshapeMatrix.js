//
//
// in: [[1,2], [3,4]] , 1, 4
// out: [[1,2,3,4]] == 1row, 4cols
//
// in: [[1,2], [3,4]] , 2, 4
// out: [[1,2],[3,4]] == original array because
// org size M*N 2*2
// expected out 2*4 not possible
//
// solution one
// flatten array then build result
//
// solution two
// create a buffer an push when full || buffer.length === input col
//
//
//
// 1) check if valid
// 2) set M*N array
//
// time:
// space:
//
//      M = 1, N = 4
//      // check if valid input for new array
//      // create result array
//      [[x,x,x,x]]
//      [[1,2], [3,4]]
//
//                          m,n     ? ?
//      [[1,x,x,x]]        [0,0] = [0,0]
//      [[1,2], [3,4]]
//
//      [[1,2,x,x]]        [0,1] = [0,1]
//      [[1,2], [3,4]]
//
//      [[1,2,3,x]]        [0,2] = [1,0]
//      [[1,2], [3,4]]
//
//      [[1,2,3,4]]        [0,3] = [1,1]
//      [[1,2], [3,4]]

function reshapeMatrix(arr, r, c) {
	let buffer = [];
	let result = [];
	if (r * c !== arr.length * arr[0].length) {
		return arr;
	}

	// traverse through original array
	for (let m = 0; m < arr.length; m++) {
		for (let n = 0; n < arr[0].length; n++) {
			// store values from input array
			buffer.push(arr[m][n]);

			// subArray col defined by input c
			if (buffer.length === c) {
				result.push(buffer);
				buffer = [];
			}
		}
	}
	return result;
}

let input = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let resultA = reshapeMatrix(input, 2, 6);
let resultB = reshapeMatrix(input, 4, 3);
console.log(resultA);
console.log(resultB);
