//
// in: [1,2,3,4,5]
// out: 3
//
// the diameter is the count of the edges
//
//
function diameterTree(root) {
	let diameter = 0;

	function dfs(node) { // 1 - 2 - 4
		if (!node) return 0;

		const left = dfs(node.left); // 2 - 4
		const right = dfs(node.right); // 5

		diameter = Math.max(diameter, left + right); // 0, 0

		return Math.max(left, right) + 1;
	}
	dfs(root); // 1
	return diameter;
}

function Node(val) {
	return { val, left: null, right: null };
}

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

let input = [1, 2, 3, 4, 5, null];
let result = serialize(input);
console.log(JSON.stringify(diameterTree(result), null, 6));
