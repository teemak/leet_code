// Given an array of coins and a target total, return the amount of unique ways
// there are to use the coins to make up that total
//
//in: [1,2,3], 4 arr, total
//out: 4
// 1+1+1+1
// 1+3
// 1+1+2
// 2+2
//
// in: [2,5,3,6], 10 arr, total
// out: 5
// 2+3+5
// 5+5
// 2+3+2+3
// 2+2+6
// 2+2+2+2+2
//
// if amount >= coin then                 index  - coin
//   combinations[amount] += combinations[amount - coin]
//                 0 1 2 3 <= amount
// combination =>  0 1 2 2
//
//  /* ASCENDING ORDER
//  v-iterations-v   0  1  2  3  4  5  6  7  8  9  10  - <<<index || total amount<<<
//  coin val 2       1  0  1  0  1  0  1  0  1  0  1 #9 iteration
//  coin val 3       X  X  X  1  1  1  2  1  2  2  2 #17
//  coin val 5       X  X  X  X  X  2  2  2  3  3  4 #23
//  coin val 6       X  X  X  X  X  X  3  2  4  4  5 #24 - 28 total iterations
//
//  /* RANDOM ORDER
//  v-iterations-v   0  1  2  3  4  5  6  7  8  9  10  - <<<index || total amount<<<
//  coin val 3       X  X  X  1  0  0  1  0  0  1  0 #8 iteration
//  coin val 6       X  X  X  X  X  X  2  0  0  2  0 #13
//  coin val 5       X  X  X  X  X  1  2  0  1  2  1 #19
//  coin val 2       X  X  1  1  1  2  3  2  4  4  5 #20 - 28 total iterations
//
// time:  O(NK) - N target total, K length of coins -- because not every index is iterated
// /******************************************************************/
// space: O(N) // CORRECT - because table size scales from input
// /******************************************************************/
// WRONG
// space: O(1) // constant time because result never grows
//             // table length is relative to total
// space complexity calculation
function coinSum(arr, total) {
	let counter = 0; //constant
	//LET INDEXES REPRESENT AGGREGATE
	let table = new Array(total + 1).fill(0); //SCALES WITH THE SIZE OF INPUT
	let { length } = table; //constant
	//table.fill(0);
	table[0] = 1; //There will always be one combination to get nothing

	arr.forEach(coin => {
		//COIN IS SET AS INDEX SO WE BYPASS
		for (let i = coin; i < length; i++) {
			table[i] = table[i] + table[i - coin];
			counter++;
			console.log("** ITERATION #", counter);
			console.log("TABLE\n", table);
		}
	});
	//LAST ELEMENT OF ARRAY
	return table[length - 1];
}

let one = [1, 2, 3];
let two = [3, 6, 5, 2];

//console.log(coinSum(one, 4));
console.log(coinSum(two, 10));
