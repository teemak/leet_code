//
//
//
//
//
//
// in: 'aA', 'aAAbbbb'
// out: 3
//
// in: 'z', 'ZZ'
// out: 0
//
//
// looking for the character in a string
// return the occurrences

function jewelsAndStones(J, S) {
	const jewels = new Set(J);
	let result = 0;

	for (let i = 0; i < S.length; i++) {
		if (jewels.has(S.charAt(i))) {
			result++;
		}
	}

	return result;
}

let result = jewelsAndStones("aA", "aAAbbbb");
let result2 = jewelsAndStones("z", "ZZ");

console.log(result);
console.log(result2);
