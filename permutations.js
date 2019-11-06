// in: [1,2,3]
//
//out: [
//     [1,2,3]
//     [1,3,2]
//     [2,1,3]
//     [2,3,1]
//     [3,1,2]
//     [3,2,1]
//
function permutations(arr) {
	const result = [];

	const findPermutation = (visited = new Set(), current = []) => {
		if (current.length === arr.length) {
			result.push(current.join(""));
			return;
		}
		for (let i = 0; i < arr.length; i++) {
			if (!visited.has(i)) {
				findPermutation(new Set([...visited, i]), [...current, arr[i]]);
			}
		}
	};
	findPermutation();
	return result.forEach(word => console.log(word));
}

let input = ["B", "A", "A", "M", "K", "E", "S", "S", "L"];
// M A K
//let input = ["B", "A", "E", "S", "S", "L"];
// B L A K A M E S S
// B L A K E M A S S
// B L A K S M E S A
// B A S E L M A S K
//let input = ["A", "M", "L", "S", "S"];
let sorted = input.sort();
//console.log(sorted);
//let input = [1, 2, 3];
let result = permutations(sorted);
console.log(result);
