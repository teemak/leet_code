// in:  [ [7,0], [4,4], [7,1], [5,0], [6,1], [5,2] ]
//
// out: [ [5,0], [7,0], [5,2], [6,1], [4,4], [7,1] ]
//
// h = height
// k = amount of people with greater height in front of said person
//
//
//  [5,0] 5 ft with no people
//  [7,0] 5 ft with no people
//  [5,2] 5 ft with two people in front
//  [6,1] 6 ft with one person in front
//  [4,4] 4 ft with four people in front
//  [7,1] 7 ft with one person in front
//
function reconstructQueue(people) {
	let result = [];
	people.sort((a, b) => {
		if (b[0] !== a[0]) {
			return b[0] - a[0];
		} else {
			return a[1] - b[1];
		}
	});
	people.forEach(person => {
		result.splice(person[1], 0, person);
	});
	return result;
}

let input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
let result = reconstructQueue(input);
console.log(result);
