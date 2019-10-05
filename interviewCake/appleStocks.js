// Keep track of lowest price
// See if there is better profit
//                      i
//in: [10, 7, 5, 8, 11, 9]
//
//    0 /* INITIALIZE */
//    current =  7
//    currentProfit = current - minPrice => -3
//    * set this after
//    minPrice = 10 || 7 => 7
//    maxProfit = currentProfit || maxProfit => -3
//
//    1
//    current =  5
//    currentProfit = current - minPrice => -2
//    * set this after
//    minPrice = 5
//    maxProfit = 7 - 5 => -2
//
//    2
//    current =  8
//    currentProfit = current - minPrice => 8 - 5 = 3
//    * set this after
//    minPrice = 5
//    maxProfit = 8 - 5 => 3
//
//    3
//    current =  11
//    currentProfit = current - minPrice => 11 - 5 = 6
//    * set this after
//    minPrice = 5 //minPrice < current ? minPrice : current
//    maxProfit = currentProfit || maxProfit : currentProfit
//
//    4
//    current =  9
//    currentProfit = current - minPrice => 9 - 5 = 4
//    * set this after
//    minPrice = 5 //minPrice < current ? minPrice : current
//    maxProfit = currentProfit || maxProfit : maxProfit
//
//out: 6
//in: [9, 7, 4, 1]
//out: -2

// BRUTE FORCE O(n^2)
// Try every pair
//
// NAIVE APPROACH O(n)
// Look at following value and try profit/loss
// Will not work for every case
//
//
//time: O(n^2)
//space: O(1)

function appleStocks(arr) {
	let minPrice = arr[0];
	//BUY THEN SELL
	let maxProfit = arr[1] - arr[0];

	//START AT ONE - SO WE LOOP LENGTH - 1 ALREADY
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let currentProfit = current - minPrice;
		minPrice = Math.min(current, minPrice);
		maxProfit = Math.max(currentProfit, maxProfit);
	}
	return maxProfit;
}
