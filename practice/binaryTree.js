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
		// iterative
		insert(node) {
			if (!this.root) {
				this.root = node;
				this.size++;
				return;
			}
			let parent = null;
			let child = this.root;
			// looking for spot to insert
			// looking for a null spot
			while (child !== null) {
				parent = child;
				// which direction should the search traverse
				child = parent.val > node.val ? parent.left : parent.right;
			}

			// which side to insert
			if (parent.val > node.val) {
				parent.left = node;
			} else {
				parent.right = node;
			}
			this.size++;
			return;
		},
		// recursive
		findInsert(node) {
			// EMPTY EDGE CASE
			if (!this.size) {
				this.root = node;
				this.size++;
			} else {
				// helper function
				const travelInsert = current => {
					// RIGHT
					if (node.val > current.val) {
						// IS IT EMPTY?
						if (current.right === null) {
							current.right = node;
						} else {
							// keep traveling to the right
							travelInsert(current.right);
						}
					} else if (node.val < current.val) {
						// LEFT
						// Keep looking for an empty spot
						if (current.left === null) {
							current.left = node;
						} else {
							travelInsert(current.left);
						}
					}
				};
				travelInsert(this.root);
				this.size++;
			}
			return;
		},
	};
}

let a = Node(11);
let b = Node(8);
let c = Node(13);
let d = Node(23);

let tree = BinaryTree();
tree.insert(a);
tree.insert(b);
tree.insert(c);
tree.findInsert(d);

console.log(JSON.stringify(tree, null, 6));
