//
// in: [3,9,20,null,null,15,7]
// out = 3
//
//                  3           DEPTH = 3
//                 / \
//                9   20        DEPTH = 2
//               /\   /\
//                   15 7       DEPTH = 1
//
//
// 1) recurse thru left
// 2) keep counter
// 3) return highest count

function maxDepth(root) {
	if (root === null) return 0;

	const left = maxDepth(root.left);
	const right = maxDepth(root.right);

	return Math.max(left, right) + 1;
}

function Node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

function serialize(arr) {
	let root = new Node(arr[0]);
	let queue = [root];

	for (let i = 1; i < arr.length; i += 2) {
		let current = queue.shift();

		if (arr[i] !== null) {
			current.left = new Node(arr[i]);
			queue.push(current.left);
		}
		if (arr[i + 1] !== null || arr[i + 1] !== undefined) {
			current.right = new Node(arr[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
}

let input = serialize([3, 9, 20, null, null, 15, 7]);
let result = maxDepth(input);
console.log(JSON.stringify(result, null, 6));
