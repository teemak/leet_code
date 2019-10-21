//
// in: MxN 3,2
//
// out: 3

function uniquePaths(m, n) {
	// DYNAMIC PROGRAMMING
	let row = new Array(n);
	let paths = new Array(m).fill(row);

	function helper(memo, m, n) {
		if (m === 0 || n === 0) {
			memo[m][n] = 1;
			return 1;
		}
		if (memo[m][n] === undefined) {
			memo[m][n] = helper(memo, m - 1, n) + helper(memo, m, n - 1);
		}
		return memo[m][n];
	}

	let result = helper(paths, m - 1, n - 1);
	return result;
	/*
	let paths = Array.from(Array(n), () => Array(m).fill(1));

	for (let i = 1; i < n; i++) {
		for (let j = 1; j < m; j++) {
			paths[i][j] = paths[i][j - 1] + paths[i - 1][j];
			//paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
		}
	}
	return paths[n - 1][m - 1];
	*/

	/*
	let memo = new Array(n);
	for (let i = 0; i < n; i++) {
		memo[i] = new Array(m);
	}
	//console.log(memo);

	function traverse(m, n, memo) {
		if (m < 0 || n < 0) {
			return 0;
		} else if (m == 0 || n == 0) {
			return 1;
		} else if (memo[n][m] > 0) {
			return memo[n][m];
		} else {
			memo[n][m] = traverse(m - 1, n, memo) + traverse(m, n - 1, memo);
			return memo[n][m];
		}
	}

	traverse(m - 1, n - 1);
	return memo[n][m];
	*/
}

let result = uniquePaths(2, 3);
console.log(result);
