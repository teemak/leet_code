// in: [1,2,3,4,3, ..n]
// out:3
//
// time:
// space: O(1)
//
// solution one - keep a set of all visited values
//
// solution two - brute force using nested loop
//
// solution three - O(n log n) sort then duplicates are next to each other
// (sort-in-place) best answer
// 1- find the amount of numbers in the input array which lie within the range [1..n/2]
// 2- compare that to the number of possible unique numbers in the same range
// 3- if the total of actual numbers is greater than the total of possible numbers, there exists a duplicate
// 4- 
// 5- at some point the range will contain just one number
//
// DO NOT DESTROY INPUT - IT CAN CAUSE BUGS ELSEWHERE IN CODE

function findDups(arr) {
	return arr;
}

let input = [1, 2, 3, 4, 5, 5];
let result = findDups(input);
console.log(result);
