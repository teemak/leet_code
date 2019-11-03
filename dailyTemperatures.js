// in:  T = [73, 74, 75, 71, 69, 72, 76, 73]
// out:     [ 1,  1,  4,  2,  1,  1,  0,  0]
//  i=2               s   x   x   x  YES
//  2nd index had to wait four days for temperature increase
//
//
// the output is #days until increase in temp from that day
// 1) init result array with default values
// 2) init stack - used for temp comparison
// 3) iterate over input
// 4) push current temp to stack
// 5) check while prev temp is increase from prev temp
// 6) get difference of prev temp index and current temp index
// 7) set index difference as value in result of prev temp index

function dailyTemp(arr) {
	let { length } = arr;
	let result = Array(arr.length).fill(0);
	let stack = [];

	for (let i = 0; i < length; i++) {
		while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
			let j = stack.pop();
			result[j] = i - j;
		}
		stack.push(i);
	}
	return result;
}

let input = [73, 74, 75, 71, 69, 72, 76, 73];
let result = dailyTemp(input);
const expected = [1, 1, 4, 2, 1, 1, 0, 0];
console.log(result);

console.log("EXPECTED: ", expected);
