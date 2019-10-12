// in: [ [0,0,1,1], = [1,1,1,1] = 15
//       [1,0,1,0], = [1,0,0,1] = 9
//       [1,1,0,0]  = [1,1,1,1] = 15
//     ];
// out: 39
//
// 1) flip bit
// 2) get total of row
// 3) add total of row
// 4) retun total
//
function flipMatrix(m) {
	let total = 0;
	let y = m.length;
	let x;
	// BIT FLIP
	// KEEP CHECKING ROWS ^^^^ direction
	while (y--) {
		// Look for 0 val
		if (!m[y][0]) {
			//SET COLUMN WIDTH: USE LENGTH OF FIRST ARRAY
			x = m[0].length;
			// <<< direction
			while (x--) {
				//FLIP BIT TO OPPOSITE
				//EVERY THING IN ROW GETS FLIPPED
				m[y][x] = m[y][x] === 0 ? 1 : 0;
			}
		}
	}
	//RESET COLUMN TO END
	x = m[0].length;
	let s;
	let p = 1;

	//KEEPS GOING THROUGH THIS
	while (x--) {
		s = 0;
		y = m.length;
		while (y--) {
			s += m[y][x];
		}
		//WHAT IS THE PURPOSE OF MAX
		let max = Math.max(s, m.length - s);
		total += p * max; //FIRST ITERATION ADDS THE LENGTH
		p *= 2; // BINARY # POSITION
	}

	return total;
}

let input = [[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]];
let result = flipMatrix(input);
console.log(result);
