function Node(val) {
	return {
		val,
		left: null,
		right: null,
	};
}

function binaryTree() {
	return {
		root: null,
		size: 0,
		insert(node) {
			if (!this.size) {
				this.root = node;
				this.size++;
			} else {
				// node already exists
				const findInsert = currentNode => {
					// right
					if (node.val > currentNode.val) {
						if (currentNode.right === null) {
							currentNode.right = node;
						} else {
							findInsert(currentNode.right);
						}
					} else if (node.val < currentNode.val) {
						if (currentNode.left === null) {
							currentNode.left = node;
						} else {
							findInsert(currentNode.left);
						}
					}
				};
				findInsert(this.root);
				this.size++;
			}
		},
		search(node) {
			let check = false;

			const traverse = currentNode => {
				if (currentNode === null) return;
				if (currentNode.val === node.val) {
					check = true;
					return;
				}
				// RIGHT SIDE
				if (node.val > currentNode.val) {
					traverse(currentNode.right);
				} else if (node.val < currentNode.val) {
					traverse(currentNode.left);
				}
			};
			traverse(this.root);
			return check;
		},
		remove(node) {
			let temp = [];
			let roundUp = currentNode => {
				// base case
				if (currentNode === null) return;
				if (currentNode.val !== node.val) {
					temp.push(currentNode.val);
				}
				// recursive case
				roundUp(currentNode.right);
				roundUp(currentNode.left);
			};
			roundUp(this.root);
			if (temp.length === this.size) {
				console.log("NODE DOES NOT EXIST");
				return;
			}
			// Create new tree without the deleted node
			this.root = null;
			this.size = 0;
			let toInsert;
			// iterate over temp array and insert
			for (let i = 0; i < temp.length; i++) {
				toInsert = temp[i];
				this.insert(toInsert);
			}
			console.log("DELETED NODE", node);
			return;
			//console.log(temp);
		},
	};
}

const a = Node(5);
const b = Node(3);
const c = Node(8);
const d = Node(1);
const e = Node(4);
const f = Node(10);
const g = Node(9);
const h = Node(88);

const tree = binaryTree();
tree.insert(a);
tree.insert(b);
tree.insert(c);
tree.insert(h);
tree.insert(d);
tree.insert(e);
tree.insert(f);
tree.insert(g);

console.log(JSON.stringify(tree, null, 6));
console.log("SEARCHING VALUE IN TREE: ", tree.remove(e));
console.log(JSON.stringify(tree, null, 6));
