// in: 'IDID' I = increase, D = decrease
// out: [0,4,1,3,2];
//
// [0]
// [0,4]
// [0,4,1]
// [0,4,1,3]
//
// in: 'III'
// out: [0,1,2,3]
//
//
//
// in: 'DDI'
// out: [3,2,0,1]
//
// 1) two counters
// 2) I = 0      and increases on subsequent appearance
// 3) D = length and decreases for every appearance
// 4) push the counters in result array
//
//
//
//
function DIStringMatch(s) {
	let result = [];
	let I = 0;
	let D = s.length;

	for (let i = 0; i <= s.length; i++) {
		if (s[i] === "I") {
			result.push(I);
			I++;
		} else if (s[i] === "D") {
			result.push(D);
			D--;
		}
	}
	result.push(I);
	return result;
}

let input = "IDID";
let result = DIStringMatch(input);
console.log(result);
