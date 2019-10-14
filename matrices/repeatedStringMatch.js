//
// in: 'abcd', 'cdabcdab'
// out: 3
//               --------
// abcd * 3 => abcdabcdabcd
// substring     --------
//
//
// 1) find first char in A that matches B
// 2) keep iterating from start of B that matches A
// 3) check that A pointer resets after reaching the end
// 4) increment counter for every reset
// 5) if entire B string is incremented return counter
//
//
//
//
//
//
function repeatedString(a, b) {
	let result = 0;
	for (let i = 0; i < a.length; i++) {
		if (a.charAt(i) === b.charAt(0)) {
			result = 1;
			let j = 0;
			let k = i;

			while (j < b.length && a.charAt(k) === b.charAt(j)) {
				j++;
				k++;
				// check j < b.length
				// for a = 'a' b = 'aa'
				if (k >= a.length && j < b.length) {
					k = k % a.length;
					result++;
				}
			}
			if (j === b.length) return result;
		}
	}
	return -1;
}
let inputA = "abcd";
let inputB = "cdabcdab";
let c = "a";
let d = "aa";
let resultA = repeatedString(inputA, inputB);
let resultB = repeatedString(c, d);
console.log(resultA);
console.log(resultB);
