// in:  ['h', 'a', 't', '\s',
//       'i', 'n', '\s',
//       'c', 'a', 't'];
//
// out: 'cat in hat'
//
// in:  ['h', 'a', 't', '', 't', 'o', 'p']
// out: 'top hat'
//
// time: O(n) - best possible run time
// space: O(1) - must be done in place
//
// solution 1
// iterate backwards until space is found - push that section
//
// solution 2 - greedy
// NO - two pointers to swap
//
// solution 3 - brute - think of simpler problem
// 1) where do words begin or end
// 2) once start, end index of words found - SWAP
// 3) what about different length words?
//
// keep incrementing/decrementing until a space is found that gives START, END of word
//
//
// swap all characters
// reverse the characters in each individual word
//
//
//          ['h', 'a', 't', '', 't', 'o', 'p']    i1  - swap entire array
//
//           ws
//          ['p', 'o', 't', '', 't', 'a', 'h']    i2  - iterate to find words - need to figure out where words start/end
//           i
//
//           ws                                         ws
//          ['p', 'o', 't', '', 't', 'a', 'h']    i3  - wordstart, wordend
//           i                                                      i - 1
//
//           ws
//          ['p', 'o', 't', '', 't', 'a', 'h']    i4  - iterate until space || end of array
//                 i
//
//           ws
//          ['p', 'o', 't', '', 't', 'a', 'h']    i5  - check for delimiter
//                      i
//
//           ws
//          ['p', 'o', 't', '', 't', 'a', 'h']    i6  -  wordEnd found
//                           i
//
//           ws         p2
//          ['t', 'o', 'p', '', 't', 'a', 'h']    i7  -  reverse the found word - swap the pointers - run helper method
//           p1              i
//
//                               ws
//          ['t', 'o', 'p', '', 't', 'a', 'h']    i8  -  set new wordstart, iterate until space||end of array
//                               i
//
//                               ws
//          ['t', 'o', 'p', '', 't', 'a', 'h']    i9  -  check for delimiter
//                                    i
//                               ws
//          ['t', 'o', 'p', '', 't', 'a', 'h']    i10  -  found end of word by finished iteration
//                                         i
//
//                               ws       p2
//          ['t', 'o', 'p', '', 'h', 'a', 't']    i11  -  reverse the word, run swap helper
//                               p1        i
//
//                               ws
//          ['t', 'o', 'p', '', 'h', 'a', 't']    i12  -  return result.toString()
//                                         i
//
// **space delimiter determines where word starts/ends**
function reverseWords(arr) {
	// 1- reverse entire string
	let result = reverseChar(arr, 0, arr.length - 1);
	// 2- finds where words start
	let wordStart = 0;

	// 3- iterate through main array
	for (let i = 0; i <= arr.length; i++) {
		// 4- find word; look for spaces or end of main array
		if (arr[i] === " " || i === arr.length) {
			// 5- reverse current word; pass index of beginning && end of word
			reverseChar(arr, wordStart, i - 1); // i is the space, so we want to swap the last char
			// 6- set new beginning of new word
			wordStart = i + 1; // i is space
		}
	}
	return arr;
}

function reverseChar(arr, p1, p2) {
	while (p1 < p2) {
		[arr[p1], arr[p2]] = [arr[p2], arr[p1]];
		p1++;
		p2--;
	}
	return arr;
}


