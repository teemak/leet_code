function Node(val) {
	return {
		val,
		left: null,
		right: null,
	};
}

function BinaryTree() {
	return {
		root: null,
		size: 0,
		insert(node) {
			if (!this.root) {
				this.root = node;
				this.size++;
				return;
			} else {
				const findInsert = current => {
					if (current.val > node.val) {
						// LEFT
						if (current.left === null) {
							current.left = node;
						} else {
							findInsert(current.left);
						}
					} else {
						if (current.right === null) {
							current.right = node;
						} else {
							findInsert(current.right);
						}
					}
					return;
				};
				findInsert(this.root);
				this.size++;
				return;
			}
		},
		bfs(node) {
			let result = [];
			if (node === null) {
				return result;
			}
			let queue = [node];
			let current;

			while (queue.length > 0) {
				current = queue.shift();
				if (current.left !== null) {
					queue.push(current.left);
				}
				if (current.right !== null) {
					queue.push(current.right);
				}
				result.push(current.val);
			}
			return result;
		},
		dfsIn(node) {
			let result = [];
			function traverse(current) {
				if (current === null) {
					return;
				}
				console.log(current.val);
				traverse(current.left);
				console.log("PUSHING", current.val);
				result.push(current.val);
				traverse(current.right);
			}
			traverse(node);
			return result;
		},
		dfsPre(node) {
			let result = [];
			function traverse(current) {
				if (current === null) {
					return;
				}
				// Action
				result.push(current.val);
				// left
				traverse(current.left);
				// right
				traverse(current.right);
			}
			traverse(node);
			return result;
		},
		dfsPost(node) {
			let result = [];
			function traverse(current) {
				if (current === null) return;
				traverse(current.left);
				traverse(current.right);
				result.push(current.val);
			}
			traverse(node);
			return result;
		},
	};
}

const a = Node(51);
const b = Node(32);
const c = Node(84);
const d = Node(22);
const e = Node(97);
const f = Node(83);
const g = Node(44);

const tree = BinaryTree();
tree.insert(a);
tree.insert(b);
tree.insert(c);
tree.insert(d);
tree.insert(e);
tree.insert(f);
tree.insert(g);

//console.log(JSON.stringify(tree.dfsPost(a), null, 6));
//console.log(JSON.stringify(tree.inOrder(), null, 6));
//console.log(JSON.stringify(tree, null, 6));

// build out tree from an array
function deserialize(arr) {
	if (arr.length === 0) {
		return null;
	}
	let root = Node(arr[0]);
	let queue = [root]; // 51
	for (let i = 1; i < arr.length; i += 2) {
		// i === 3  || 5 || 7
		// increment by 2
		let current = queue.shift(); // 51 -> 32 == [84] === 84 is current   [22,44] || LAST current is 22
		if (arr[i] !== null) {
			//next val in array 32 --- 22  --- 83 is put left of 84 || LAST not run
			current.left = Node(arr[i]); // create node 32 || create node 22 || 83 created
			queue.push(current.left); // queue 32 queue == [84,22] || [22,44,83]
		}
		if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
			// 84 && 84 || 44 && 44 || 97 && 97 || undefined && undefined LAST NOT RUN
			current.right = Node(arr[i + 1]); // create Node 84 || create node 44 || 84.right => 97
			queue.push(current.right); // queue === [32,84] || [84,22,44] || [22,44,83,97]
		}
	}
	return root;
}

let input = [51, 32, 84, 22, 44, 83, 97];
let result = deserialize(input);
console.log("Deserialize\n", JSON.stringify(result, null, 6));
