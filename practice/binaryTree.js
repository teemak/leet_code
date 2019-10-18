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
					if (current.val < node.val) {
						//RIGHT SIDE
						if (current.right === null) {
							current.right = node;
						} else {
							findInsert(current.right);
						}
					} else if (current.val > node.val) {
						//LEFT SIDE
						if (current.left === null) {
							current.left = node;
						} else {
							findInsert(current.left);
						}
					}
				};

				findInsert(this.root);
				this.size++;
				return;
			}
		},
		remove(node) {
			let seen = [];
			return seen;
		}
	};
}

const a = Node(88);
const b = Node(33);
const c = Node(66);
const d = Node(44);
const e = Node(11);
const f = Node(99);
const g = Node(22);

const tree = BinaryTree();
tree.insert(a);
tree.insert(b);
tree.insert(c);
tree.insert(d);
tree.insert(e);
tree.insert(f);
tree.insert(g);

console.log(JSON.stringify(tree, null, 6));
