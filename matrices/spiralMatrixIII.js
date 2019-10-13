// in: R, C, r, c
//  R == row
//  C == column
//  r = startRowCoordinate
//  c = startColCoordinate
//
// out: spiralMatrix
//
//
// directions always begin
// east
// south
// west
// north
// repeat
//
//
// time: O(nm)
// space: O(nm)
//
//
//
//
//
//

function spiralMatrixIII(R, C, r0, c0) {
	let r = r0;
	let c = c0;
	let start = [r, c];
	const result = [start];

	const directions = ["+c", "+r", "-c", "-r"];
	let directionIndex = 0;
	let parsedSpaces = 1;
	let spiralLength = 2;

	const changeDirection = () => {
		directionIndex = directionIndex + 1 > 3 ? 0 : directionIndex + 1;
	};
	let areaOfSpiral,
		counter = 0;
	while (result.length < R * C) {
		areaOfSpiral = spiralLength ** 2;

		while (parsedSpaces <= areaOfSpiral) {
			const isLastSpace = parsedSpaces === areaOfSpiral - 1;
			counter++;

			switch (directions[directionIndex]) {
				case "+c": //VVVVVVVV
					c++;
					if (!isLastSpace && c + 1 >= start[1] + spiralLength) {
						changeDirection();
					}
					break;
				case "-c": //^^^^^^^^
					c--;
					if (!isLastSpace && c - 1 <= start[1] - spiralLength) {
						changeDirection();
					}
					break;
				case "+r":
					r++; // ???
					if (!isLastSpace && r + 1 >= start[0] + spiralLength) {
						changeDirection();
					}
					break;
				case "-r":
					r--; //<<<<<<<<<<<
					if (!isLastSpace && r - 1 <= start[0] - spiralLength) {
						changeDirection();
					}
					break;
				default:
					return;
			}
			if (c >= 0 && c < C && r >= 0 && r < R) {
				result.push([r, c]);
			}
			parsedSpaces++;
		}
		start = [r, c];
		spiralLength++;
	}
	console.log("TIME COMPLEXITY: ", counter);
	console.log("SPACE COMPLEXITY: ", R * C);
	return result;
}

//const result = spiralMatrixIII(1, 2, 0, 0);     //2^2
//const result = spiralMatrixIII(1, 4, 0, 0);   //6^2
const result = spiralMatrixIII(5, 6, 1, 4); //9^2
console.log(result);
