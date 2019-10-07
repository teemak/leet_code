// in: [3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]
// out:[1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
//
//  *while(p1 < arr1.length || p2 < arr2.length)
//
//  p1
//  [3, 4, 6, 10, 11, 15] - i0 compare p1 to p2
//  [1, 5, 8, 12, 14, 19] - push lesser value into result
//  p2                    - increment lesser value pointer
//                        - result = [1]
//
//  p1
//  [3, 4, 6, 10, 11, 15] - i1 compare p1 to p2
//  [1, 5, 8, 12, 14, 19] - push lesser value
//      p2                - increment lesser value pointer
//                        - result = [1,3]
//
//      p1
//  [3, 4, 6, 10, 11, 15] - i1 compare p1 to p2
//  [1, 5, 8, 12, 14, 19] - push lesser value
//      p2                - increment lesser value pointer
//                        - result = [1,3,4]
//
//         p1
//  [3, 4, 6, 10, 11, 15] - i1 compare p1 to p2
//  [1, 5, 8, 12, 14, 19] - push lesser value
//      p2                - increment lesser value pointer
//                        - result = [1,3,4,5]
//
//         p1
//  [3, 4, 6, 10, 11, 15] - i1 compare p1 to p2
//  [1, 5, 8, 12, 14, 19] - push lesser value
//         p2             - increment lesser value pointer
//                        - result = [1,3,4,5,6]
//
//            p1
//  [3, 4, 6, 10, 11, 15] - i1 compare p1 to p2
//  [1, 5, 8, 12, 14, 19] - push lesser value
//         p2             - increment lesser value pointer
//                        - result = [1,3,4,5,6,10]
//
function mergeArrays(arr1, arr2) {
	let result = [];
	let p1 = 0,
		p2 = 0;

	while (p1 < arr1.length || p2 < arr2.length) {
		if (arr1[p1] < arr2[p2]) {
			result.push(arr1[p1]);
			p1++;
		} else {
			result.push(arr2[p2]);
			p2++;
		}
	}

	return result;
}

let input1 = [3, 4, 6, 10, 11, 15];
let input2 = [1, 5, 8, 12, 14, 19];

let input3 = [4, 6, 11, 15];
let input4 = [1, 5, 7, 8, 12, 14, 19];

let result = mergeArrays(input3, input4);
console.log(result);
console.assert(input3.length + input4.length === result.length, "Lengths match");
