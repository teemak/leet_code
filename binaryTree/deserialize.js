function serialize(root) {
	if (root === null) return "null";
	let result = [];
	let queue = [root];
	while (queue.length > 0) {
		let current = queue.shift();
		if (current === null) {
			result.push("null");
			continue;
		}
		result.push(current.val);
		queue.push(current.left);
		queue.push(current.right);
	}
	for (let i = result.length - 1; i >= 0; i--) {
		if (result[i] === "null") {
			result.splice(i, 1);
		} else {
			break;
		}
	}
	return result;
}
var deserialize = function(data) {
	if (!data.length) return;
	let root = Node(data[0]);
	let queue = [root];
	for (let i = 1; i < data.length; i += 2) {
		let current = queue.shift();
		if (data[i] !== null) {
			current.left = Node(data[i]);
			queue.push(current.left);
		}
		if (data[i + 1] !== null || data[i + 1] !== undefined) {
			current.right = Node(data[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
};

function Node(val) {
	return { val, left: null, right: null };
}

let input = [1, 2, 3, null, null, 4, 5];
let result = deserialize(input);
console.log(JSON.stringify(result));

let normal = serialize(result);
console.log(normal);
