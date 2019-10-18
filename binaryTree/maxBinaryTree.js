//
//
//
//
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
//
//
//
// in: [3,2,1,6,0,5]
// out:
//
const TreeNode = val => {
	this.val = val;
	this.left = this.right = null;
};

const constructMaxTree = (nums, low = 0, high = nums.length - 1) => {
	if (low > high) return null;
	let i = low;
	for (let j = low + 1; j <= high; j++) {
		if (nums[j] > nums[i]) i = j;
	}
	const root = TreeNode(nums[i]);
	console.log(root);
	root.left = constructMaxTree(nums, low, i - 1);
	root.right = constructMaxTree(nums, i + 1, high);
	return root;
};

const list = [3, 2, 1, 6, 0, 5];
const result = constructMaxTree(list);
console.log(result);
