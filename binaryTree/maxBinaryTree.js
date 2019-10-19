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
/*
class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = this.right = null;
	}
}

const constructMaxTree = (nums, low = 0, high = nums.length - 1) => {
	if (low > high) return null;
	let i = low;

	for (let j = low + 1; j <= high; j++) {
		console.log("J:", j);
		console.log("++++++++");
		console.log("I:", i);
		if (nums[j] > nums[i]) {
			i = j;
			console.log("REPLACING I WITH J, I IS NOW = ", i);
		}
	}

	const root = new TreeNode(nums[i]);
	console.log(i);
	root.left = constructMaxTree(nums, low, i - 1);
	root.right = constructMaxTree(nums, i + 1, high);
	return root;
const serialize = arr => {
	let root = new TreeNode(arr[0]);
	let queue = [root];

	for (let i = 1; i < arr.length; i += 2) {
		let current = queue.shift();
		if (arr[i] !== null) {
			current.left = new TreeNode(arr[i]);
			queue.push(current.left);
		}
		if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
			current.right = new TreeNode(arr[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
};
};*/
const TreeNode = val => {
	return {
		val,
		left: null,
		right: null,
	};
};

const constructMaxTree = nums => {

	function getMaxIndex(nums, start, end) {               // [3,2,1,6,0,5]
		let index = -1;                                    // [k 
		let max = -Infinity;

		for (let i = start; i <= end; i++) {
			if (nums[i] > max) {
				max = nums[i];
				index = i;
			}
		}

		return index;
	}
	// [3,2,1,6,0,5] = 6 createNode
	// [3,2,1] = 3 left(0,4-1)
	// [] X [2,1] = left(0,0-1)
	// [2,1] = right (
	//
	//

	function constructTree(nums, start, end) {
		const max = getMaxIndex(nums, start, end);

		if (max > -1) {
			const current = TreeNode(nums[max]);                        //   6   [3,2,1] [0,5]
			current.left = constructTree(nums, start, max - 1);         // 3     [] [2,1]
			current.right = constructTree(nums, max + 1, end);          //   2   [] [1]
			return current;                                             //     1 []
		} else {                                                        //   6   [0,5]
			return null;                                                //     5 [0] []
		}                                                               //   0   []
	}

	return constructTree(nums, 0, nums.length - 1);
};

const list = [3, 2, 1, 6, 0, 5];
const result = constructMaxTree(list);
console.log(JSON.stringify(result, null, 6));

//const input = serialize(list);
// 1) get max index => int
// 2) create node => new Node(arr[int])   // 6 + 3 + 2 + 1
// 3) create node.left  = recursiveCall with subArray from [start: max-1]  3 [3,2,1] => 0, -1 this breaks, now we go next line
// 4) create node.right = 3 current, recursiveCall [nums, [max + 1, end] 1,2  2,2
