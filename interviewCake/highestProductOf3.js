//FIND HIGHEST PRODUCT OF THREE
//in: [1, 2, 3, 4]
//out: 24
//in: [-10, 1, 3, 2, -10]
//out: 300

//time: O(n) linear time
//space: O(1) constant space

// BRUTE FORCE (n^3)
// three nested loops
// compare result to the max variable

// LOGARITHMIC O(n log n)
// SORT the array and multiply last three numbers
// 1 * 2 * 3 * 4
//    -i   i   i+

// LINEAR TIME O(n)
//           i
// -10 * 1 * 3 * 2 * -10
//  i-                i+
//
//  max = -30
//  max = 6
//  max = -60
//  answer = 300

// 1- check if length is greater than 4
// 2- keep track of MAX so far
// 3- lowest product of 2
// 4- highest product of 2
// 5- lowest single value
// 6- highest single value
// 7- highest product of 3

function highestProductOf3(arr) {
	if (arr.length < 3) return 0;

	//ONLY GET FIRST TWO INDICES BECUASE OF WHERE INDEX STARTS FROM LOOP
	let lowestOf2 = arr[0] * arr[1];
	//NEED TO ITERATE 2nd INDEX
	let lowestValue = Math.min(arr[0], arr[1]);
	let highestOf2 = arr[0] * arr[1];
	//NEED TO ITERATE 2nd INDEX
	let highestValue = Math.max(arr[0], arr[1]);
	let max = arr[0] * arr[1] * arr[2];

	for (let i = 2; i < arr.length; i++) {
		let current = arr[i];
		//check for highestOf3
		max = Math.max(highestOf2 * current, lowestOf2 * current, max);
		//check for highestOf2
		highestOf2 = Math.max(current * highestValue, current * lowestValue, highestOf2);
		//check for lowestOf2
		lowestOf2 = Math.min(current * lowestValue, current * highestValue, lowestOf2);
		//check for highestValue
		highestValue = Math.max(current, highestValue);
		//check for lowestValue
	}
	return max;
}
