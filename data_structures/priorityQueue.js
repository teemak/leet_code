function Qelement(element, priority) {
	return {
		element,
		priority,
	};
}

function PriorityQueue(k) {
	return {
		size: 0,
		storage: [],
		capacity: k,
		enqueue(element, priority) {
			let block = Qelement(element, priority);
			let contain = false;

			for (let i = 0; i < this.storage.length; i++) {
				if (this.storage[i].priority > block.priority) {
					this.storage.splice(i, 0, element);
					contain = true;
					break;
				}
			}
			if (!contain) {
				this.storage.push(block);
			}
			this.size++;
		},
		dequeue() {
			if (!this.size) {
				return "Underflow";
			}
			this.size--;
			let result = this.storage.shift();
			console.log("DE_QUEUE THIS: ", result);
			return result;
		},
		getFront() {
			if (!this.size) console.log("NO FRONT, NO ELEMENTS IN QUEUE");
			console.log("FRONT: ", this.storage[0]);
			return this.storage[0];
		},
		getRear() {
			if (!this.size) console.log("NO REAR, NO ELEMENTS IN QUEUE");
			console.log("REAR: ", this.storage[this.storage.length - 1]);
			return this.storage[this.storage.length - 1];
		},
	};
}

let q = PriorityQueue(10);
q.enqueue("Tee", 3);
q.enqueue("Erza", 1);
q.enqueue("Cash Money", 6);
q.dequeue();
q.getFront();
q.getRear();
console.log(q);
