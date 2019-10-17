// in: widths = [10,10,10,10,10,10,10,10,10]
// 2nd arg    S = [abcdefghijklmnopqrstuvwxyz]
//
// out: [3,60]
//
//
/*let widths = [
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
];*/
// widths index represent the amount of space a font occupies
// mapped to each english character in the alphabet
// with the string given calculate the the total lines required to write that string
// use the second index to represent the amount of spaces a non full line takes
// widths = [0=a, 1=b, 2=c, 3=d].length === 26

//let S = "abcdefghijklmnopqrstuvwxyz";
//let expected = [3, 60];

function numberOfLines(widths, S) {
	let lines = 0;
	let i = 0;
	let t = 0;
	let hash = {};

	while (i < S.length) {
		const char = S[i];
		// get the char size by checking in the widths array
		const n = widths[char.charCodeAt(0) - "a".charCodeAt()]; // returns 97
		//const n = widths[char.charCodeAt(0) - 97];
		if (!hash[char]) {
			hash[char] = n;
		} else {
			hash[char] += n;
		}
		console.log("HASH", hash);

		// current = 98
		// extra char = 4
		// so 102 satisfies this first conditional
		if (t + n > 100) {
			// 100 represents the width
			lines++;
			// t becomes the length of the last extra character
			t = n;
		} else {
			t += n;
		}
		i++;
	}
	lines++;
	return [lines, t];
}

let widths2 = [
	4,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
	10,
];
let S2 = "bbbcccdddaaa";
let expected2 = [2, 4];
console.log(numberOfLines(widths2, S2));
// first line is 98 characters 4 space char won't fit in this current line so it has to be put on next line
// so the result is two lines with the last char using 4 spaces
console.log("EXPECTED:", expected2);
