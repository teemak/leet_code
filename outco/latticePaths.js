/*
const paths = n => {
	let count = 0; // of paths
	let traverse = (x, y) => {
		//base case
		if (x === n && y === n) {
			//valid path
			count++;
			return;
		} else if (x > n || y > n) {
			//out of bounds
			return;
		}
		//recursive case
		//right
		traverse(x + 1, y);
		//down
		traverse(x, y + 1);
	};
	traverse(0, 0); // increases
	return count;
};
*/
// side effects recursion
// more parameters
/*
const paths = (n, x, y) => {
	if (x === undefined) {
		x = 0;
		y = 0;
	}

	if (x === n && y === n) {
		return 1; // valid case
	} else if (x > n || y > n) {
		return 0;
	}
	//return the sum of all valid paths
	return paths(n, x + 1, y) + paths(n, x, y + 1);
};
*/

// pure recursion
// bottom up approach
// works for rectangles
// time: number of iterations O(m*n)
// space: stack size
const paths = (x, y) => {
	if (x === 0 && y === 0) {
		return 1;
	} else if (x < 0 || y < 0) {
		return 0;
	}
	return paths(x - 1, y) + paths(x, y - 1); //WHAT IS TIME COMPLEXITY HERE? O(m*n)
};

//const input = 4;
const result = paths(2, 2);

console.log(result);
