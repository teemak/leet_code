// bottom up
// always start at 2 -> 3 -> 4 -> 5
function nFib(n) {
	let result = [0, 1];

	// i tracks state
	function helper(i) {
		// base case
		if (i > n) return;
		result[i] = result[i - 2] + result[i - 1];
		// recursive case
		helper(i + 1);
	}

	helper(2);
	//console.log(result);
	return result[n];
}

let result = nFib(5);
//console.log("Result", result);

// top down
function topDown(n) {
	let result;

	function searchFib(index) {
		if (index < 2) {
			return index;
		} else {
			return searchFib(index - 2) + searchFib(index - 1);
		}
	}

	result = searchFib(n);
	return result;
}

let tdResult = topDown(5);
//console.log(tdResult);

// 4 * 3 * 2 * 1  = 24
// 3 * 2 * 1 * 1  = 6
// 2 * 1 * 1 = 2
// 1 * 1 = 1
// 0 = 0

// BOTTOM UP
function factorial(n) {
	// this should be moved to helper
	//if(n <= 2) return n;
	let result = 1;

	function multiply(count) {
		//console.log("COUNT", count);
		if (count > n) return;
		result *= count;
		multiply(count + 1);
		// state will hold recursive case
		//return multiply(n - 1) * multiply(n - 2);
	}

	// first call 1 = 1*1
	// first call 2 = 1*2
	// first call 3 = 2*3
	// first call 4 = 6*4
	// first call 5 = return

	multiply(1); // because 0! && 1! === 1
	return result;
}

let fourFactorial = factorial(4);
//console.log("FACTORIAL OF FOUR: ", fourFactorial);

function serialize(arr) {
	let root = Node(arr[0]);
	let queue = [root];

	for (let i = 1; i < arr.length; i += 2) {
		let current = queue.shift();
		if (arr[i] !== null) {
			current.left = Node(arr[i]);
			queue.push(current.left);
		}
		if (arr[i + 1] !== null || arr[i + 1] !== undefined) {
			current.right = Node(arr[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
}

function dfs(root) {
	let visited = new Set();
	//let result = [];
	function traverse(current) {
		if (visited.has(current)) {
			return; // SET has null values
		}
		visited.add(current);
		//result.push(current.val);
		//console.log("current", current.val);
		//console.log("visited", visited);
		//if (current.left !== null) {
		traverse(current.left);
		//}
		//if (current.right !== null) {
		traverse(current.right);
		//}
	}
	traverse(root);
	//console.log("VISITED", JSON.stringify(visited, null, 6));
	//return result;
	return visited;
}

function Node(val) {
	return { val, left: null, right: null };
}

let input = serialize([1, 2, 3, 4, 5, 6, 9]);
//console.log(JSON.stringify(dfs(input), null, 6));
//console.log("\nExpected\n", [1, 2, 4, 5, 3, 6, 9]);

// SIDE EFFECTS
function fibSideEffects(n, i = 2, fib = [0, 1]) {
	if (n < 2) return fib[n];

	fib[i] = fib[i - 1] + fib[i - 2];
	// base case requires return statement
	if (i === n) return fib[i]; // LAST VALUE is returned up the stack
	// no scoped variable to store state

	// recursive case
	return fibSideEffects(n, i + 1, fib);
}

function pure(n) {
	if (n < 2) return n;
	return pure(n - 1) + pure(n - 2);
}

console.log(pure(6));
