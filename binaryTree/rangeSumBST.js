//
// in:  [10,5,15,3,7,null,18], L = 7, R = 15
// out: 32
//
//               10
//             5    15
//            3 7  nu 18
// 15 + 33
//
//
const rangeSumRecurse = (root, L, R) => {
	if (root === null) {
		return 0;
	}
	if (root.val > R) {
		return rangeSumRecurse(root.left, L, R);
	} else if (root.val < L) {
		return rangeSumRecurse(root.right, L, R);
	} else {
		return root.val + rangeSumRecurse(root.left, L, R) + rangeSumRecurse(root.right, L, R);
	}
};

const rangeSumInOrder = (root, L, R) => {
	let arr = [],
		sum = 0;
	inOrder(root, arr);

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= L && arr[i] <= R) {
			sum = sum + arr[i];
		}
	}

	return sum;
};

const rangeFast = (root, L, R) => {
	let sum = 0;
	const traverse = (root, L, R) => {
		if (!root) return;
		traverse(root.left, L, R);
		if (root.val <= R && root.val >= L) {
			sum += root.val;
		}
		traverse(root.right, L, R);
	};
	traverse(root, L, R);
	return sum;
};

const inOrder = (root, arr) => {
	console.log("ROOT: ", root);
	if (root === null) {
		return;
	}

	inOrder(root.left, arr);
	arr.push(root.val);
	console.log("RIGHT SIDE:", root);
	inOrder(root.right, arr);

	return;
};

function Node(val) {
	return {
		right: null,
		left: null,
		val: val,
	};
}

function deserialize(arr) {
	if (arr.length === 0) return null;
	let root = Node(arr[0]);
	let queue = [root];
	for (let i = 1; i < arr.length; i += 2) {
		let current = queue.shift();
		if (arr[i] !== null) {
			current.left = Node(arr[i]);
			queue.push(current.left);
		}
		if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
			current.right = Node(arr[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
}

let arr = [10, 5, 15, 3, 7, null, 18];
let input = deserialize(arr);
let result = rangeFast(input, 7, 15);
//let result = rangeSumRecurse(input, 7, 15);
//let result = rangeSumInOrder(input, 7, 15);

console.log(result);
