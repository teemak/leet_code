function Node(val) {
	return {
		val,
		left: null,
		right: null,
	};
}

function constructMaxBinary(nums) {
	if (nums.length === 0) return null;

	const max = Math.max(...nums);
	const pivot = nums.findIndex(n => n === max);

	const left = nums.slice(0, pivot);
	const right = nums.slice(pivot + 1);

	const root = Node(max);
	root.left = constructMaxBinary(left);
	root.right = constructMaxBinary(right);

	return root;
}

function maxBinary(nums, start = 0, end = nums.length - 1) {
	if (start > end) return null;
	let max = start;

	for (let i = start + 1; i <= end; i++) {
		if (nums[i] > nums[max]) {
			max = i;
		}
	}

	const root = Node(nums[max]);
	root.left = maxBinary(nums, start, max - 1);
	root.right = maxBinary(nums, max + 1, end);
	return root;

	/*
	const getMax = (nums, start, end) => {
		let maxIdx = -1;
		let maxVal = -Infinity;

		for (let i = start; i <= end; i++) {
			if (nums[i] > maxVal) {
				maxVal = nums[i];
				maxIdx = i;
			}
		}
		return maxIdx;
	};
	// construct tree
	const constructTree = (nums, start, end) => {
		let max = getMax(nums, start, end);
		//console.log(max);

		if (max > -1) {
			const current = Node(nums[max]);
			current.left = constructTree(nums, start, max - 1);
			current.right = constructTree(nums, max + 1, end);
			console.log("Bubble Up", current.val);
			return current;
		} else {
			return null;
		}
	};
	return constructTree(nums, 0, nums.length);
	*/
}

let input = [3, 2, 1, 6, 0, 5];
//let result = maxBinary(input);
let easiest = constructMaxBinary(input);
//console.log(JSON.stringify(result, null, 6));
console.log(JSON.stringify(easiest, null, 6));
