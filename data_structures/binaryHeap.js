// INSERT at minHeap
// time: O(logN)
// BINARY TREE
// time: O(log2N)
// REMOVE rule: can only remove the next breadth most position then bubble down
// bubble down will always swap will lowest value
//
// parents to child only relationships
// use an array
//
//         2                  0 1 2 3 4 5 6
//        /\                  2,5,4,9,6,8,7
//       5  4
//     /\   /\                Parent(N)              Children(M)
//     9 6  8 7                  0  2N+1,2N+2 >>     1,2
//                               1  << M-1/2, M-2/2  3,4
//                               2                   5,6
//
//
//
//

function BinaryHeap() {
	return {
		type: "min",
		storage: [],
		getParent(child) {
			/**
			 * child index
			 *   M-1/2
			 */ // HOW TO DETERMINE IF ODD OR EVEN?
			return ~~((child - 1) / 2);
		},
		peak() {
			return this.storage[0];
		},
		remove(val) {
			let removeIndex;
			for (let i = 0; i < this.storage.length; i++) {
				if (this.storage[i] === val) {
					removeIndex = i;
				}
			}
			if (removeIndex === undefined) {
				return;
			}

			this.swap(removeIndex, this.size() - 1);
			let result = this.storage.pop();

			this.bubbleUp(removeIndex);
			this.bubbleDown(removeIndex);

			return result;
		},
		removePeak() {
			this.swap(0, this.size() - 1);
			let result = this.storage.pop();
			this.bubbleDown(0);
			return result;
		},
		size() {
			return this.storage.length;
		},
		swap(a, b) {
			[this.storage[a], this.storage[b]] = [this.storage[b], this.storage[a]];
		},
		bubbleUp() {
			let child = this.storage.length - 1;
			let parent;

			parent = this.getParent(child); //GET THE INDEX OF PARENT
			// child always has parent && while the minHeap is not TRUE
			while (child > 0 && !this.compare(parent, child)) {
				this.swap(parent, child);
				child = parent;
				parent = this.getParent(child);
			}
		},
		bubbleDown(parent) {
			let child = this.getChild(parent);

			while (child < this.size() && this.storage[parent] > this.storage[child]) {
				this.swap(child, parent);
				parent = child;
				child = this.getChild(parent);
			}
		},
		getChild(parent) {
			let child1 = 2 * parent + 1;
			let child2 = 2 * parent + 2;
			if (child1 >= this.size()) {
				return child1;
			} else if (child1 >= this.size()) {
				// if child1 is valid
				// but child2 is out of bounds
				return child1;
			} else if (this.storage[child1] < this.storage[child2]) {
				// both elements are valid
				return child1;
			} else {
				// child2 <= child1
				return child2;
			}
		},
		insert(value) {
			this.storage.push(value);
			this.bubbleUp();
		},
		compare(parent, child) {
			if (this.type === "min") {
				return this.storage[parent] <= this.storage[child];
			}
			return this.storage[parent] > this.storage[child];
		},
	};
}

let heap = BinaryHeap();
heap.insert(4);
heap.insert(5);
heap.insert(9);
heap.insert(6);
heap.insert(8);
heap.insert(7);
heap.insert(2);

console.log(heap);
// time: O(n) linear time
console.log(heap.remove(6));
console.log(heap);
