// in: ['c', 'a', 't']
// out:['t', 'a', 'c']
//
// in: ['d', 'o', 'g', 'g', 'y']
// out:['y', 'g', 'g', 'o', 'd']
//
// time:  O(logN)
// space: O(1)
//
// solution one
// use two pointers on each end to swap char
//
// need a mutable type like an array instead of immutable strings
//
// diagram
//                   p1
//                 ['d', 'o', 'g', 'g', 'y']  - a) while p1 < p2
//                                       p2
//
//                   p1
//          i1     ['y', 'o', 'g', 'g', 'd']  - b) swap at each pointer
//                                       p2
//
//                        p1
//          i2     ['y', 'g', 'g', 'o', 'd']  - c) increment p1 - decrement p2
//                                 p2
//
//                             p1
//          i3     ['d', 'o', 'g', 'g', 'y']  - d) return arr
//                             p2
//
//
// psuedocode
//   set p1 at beginning
//   set p2 at end
//   iterate forward over array
//   	only iterate to midpoint < better choice || check if pointers are at same index
//     		a) break - no need to break if midpoint is stop
//      swap values at pointers
//      decrement p2
//
// code
// time: O(n) = O(n/2) + O(n/2) = O(2n/2) = O(n)
function reverseInPlace(arr) {
	let p1 = 0;
	let p2 = arr.length - 1;

	while (p1 < p2) {
		[arr[p1], arr[p2]] = [arr[p2], arr[p1]];
		p1++;
		p2--;
	}
	return arr;
}
