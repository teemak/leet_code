//
// root1 = t1.val
// root2 = t2.val
// root = root1 + root2
//
// newRoot = new TreeNode(root);
// newRoot.left = new TreeNode(t1.left + t2.left)
// newRoot.right = new TreeNode(t1.right + t2.right)
//
// root1 + root2 = root3
// root1.left + root2.left = root3.left
// root1.right + root2.right = root3.right
//
//
//
//
//
//
//
//
function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

const mergeTrees = (t1, t2) => {
	if (!t1) return t2;
	if (!t2) return t1;

	const root = new TreeNode(t1.val + t2.val);
	root.left = mergeTrees(t1.left, t2.left);
	root.right = mergeTrees(t1.right, t2.right);
	return root;
};

function serialize(arr) {
	let root = new TreeNode(arr[0]);
	let queue = [root];

	for (let i = 1; i < arr.length; i += 2) {
		let current = queue.shift();
		if (arr[i] !== null) {
			current.left = new TreeNode(arr[i]);
			queue.push(current.left);
		}
		if (arr[i + 1] !== null || arr[i + 1] !== undefined) {
			current.right = new TreeNode(arr[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
}

let t1 = serialize([1, 3, 2, 5]);
let t2 = serialize([2, 1, 3, null, 4, null, 7]);
let result = mergeTrees(t1, t2);
let expected = serialize([3, 4, 5, 5, 4, null, 7]);
console.log(JSON.stringify(result, null, 6));
console.log("******************************");
console.log(JSON.stringify(expected, null, 6));
