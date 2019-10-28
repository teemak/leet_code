function Node(val) {
	return {
		val,
		parent: null,
		child: null, //LEFT AND RIGHT NEEDED
	};
}
class Heap {
	constructor() {
		this.storage = [];
		this.type = null || "min";
	}

	compare(parent, child) {
		if (this.type === "min") {
			return this.storage[parent].val <= this.storage[child].val;
		}
		return this.storage[parent].val > this.storage[child].val;
	}

	insert(node) {
		this.storage.push(node);
		this.bubbleUp();
	}

	bubbleUp() {
		let child = this.storage.length - 1; // last index
		let parent;

		parent = this.getParent(child); // prev index of last
		while (child > 0 && !this.compare(parent, child)) {
			this.swap(parent, child);
			child = parent;
			parent = this.getParent(child);
		}
	}

	getParent(childIdx) {
		/*
		 * Arr[(i-1)/2]
		 */
		const parent = ~~((childIdx - 1) / 2);
		return parent;
	}

	swap(a, b) {
		[this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a]];
		//let current = this.storage[a].val;
		//console.log("CURRENT", current);

		/*** SO SMART ***/
		//let currentIdx = this.storage.map(node => node.val).indexOf(current);
		/*** CHAIN METHODS ***/

		// left child = Arr[(2*i)+1]
		//let leftChild = this.storage[currentIdx * 2 + 1];
		//console.log(leftChild);
		//this.storage[a].child = !leftChild ? null : leftChild.val;
		// right child = Arr[(2*i)+2]
	}

	get data() {
		return this.storage;
	}
}

const heap = new Heap();
const a = Node(13);
const b = Node(8);
const c = Node(3);
const d = Node(10);
const e = Node(6);
const f = Node(1);

heap.insert(a);
heap.insert(b);
heap.insert(c);
heap.insert(d);
heap.insert(e);
heap.insert(f);

//console.log(JSON.stringify(heap, null, 6));
console.log(heap.data);
