//
// in:  [4,2,7,1,3,6,9]
//
// out: [4,7,2,9,6,3,1]
//
//
//
//
//
const Node = val => {
	return { val, left: null, right: null };
};

const serialize = arr => {
	const root = Node(arr[0]);
	const queue = [root];

	for (let i = 1; i < arr.length; i += 2) {
		const current = queue.shift();

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
};

const invertTreeRec = root => {
	if (root === null) return root;

	[root.left, root.right] = [invertTreeRec(root.right), invertTreeRec(root.left)];
	return root;
};

const invertTreeDfs = root => {
	const stack = [root];

	while (stack.length) {
		const top = stack.pop();

		if (top !== null) {
			[top.left, top.right] = [top.right, top.left];
			if (top.right) stack.push(top.right);
			if (top.left) stack.push(top.left);
		}
	}
	return root;
};

const invertTreeBfs = root => {
	const queue = [root];
	while (queue.length) {
		const front = queue.shift();
		if (front !== null) {
			[front.left, front.right] = [front.right, front.left];
			queue.push(front.left, front.right);
		}
	}
	return root;
};

const invertFast = root => {
	if (!root) return root;

	let temp = root.left;
	root.left = root.right;
	root.right = temp;

	invertFast(root.left);
	invertFast(root.right);

	return root;
};

let input = serialize([4, 2, 7, 1, 3, 6, 9]);
let fastResult = invertFast(input);
console.log(JSON.stringify(fastResult, null, 6));
