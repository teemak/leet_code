// DYNAMIC PROGRAMMING
// USING MEMOIZATION
// TOP DOWN
// f(n) = f(n-1) + f(n-2)
// a = 0
// b = 1
// n = index
let fibonacci = function(n) {
	let cache = {};
	function fib(n) {
		let val;
		if (n in cache) {
			return cache[n];
		} else {
			if (n === 0 || n === 1) {
				val = n;
			} else {
				val = fib(n - 1) + fib(n - 2);
				cache[n] = val;
			}
		}
		return val;
	}
};
/*
function fib(a, b, n) {
	if (n) {
		return fib(b, a + b, n - 1);
	} else {
		return a;
	}
}
 */

console.log("10th spot", fibonacci(10));
//console.log("5th spot: ", fibonacci(5));
//console.log("50th spot", fibonacci(50));
/*
console.log("10th spot", fib(10));
console.log("5th spot: ", fib(5));
console.log("50th spot", fib(50));

console.log("10th spot", fib(0, 1, 10));
console.log("5th spot: ", fib(0, 1, 5));
console.log("50th spot", fib(0, 1, 50));
 */

//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// 0  1  2  3  4  5  6   7   8   9  10
