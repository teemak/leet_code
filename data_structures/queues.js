function Queue(capacity) {
	return {
		front: null,
		rear: null,
		size: 0,
		capacity,
		enqueue(val) {
			if (this.capacity === this.size) {
				let message = "Queue is full";
				console.log(message);
				return;
			}
			if (!this.rear) {
				this.rear = val;
				this.front = val;
			} else if (this.front) {
				this.rear = val;
			}
			this.size++;
		},
		dequeue() {
			if (!this.front) {
				let message = "Queue is empty";
				console.log(message);
				return;
			} else {
				let result = this.front;
				console.log("DEQUEUED FRONT", result);
				this.size--;
				return result;
			}
		},
		isEmpty() {
			return this.size === 0;
		},
		isFull() {
			return this.size === this.capacity;
		},
	};
}

const q = Queue(5);
//console.log(q.isEmpty());
q.enqueue(4);
q.enqueue(8);
q.enqueue(16);
q.enqueue(32);
q.enqueue(64);
q.dequeue();
//console.log(q.isFull());
q.enqueue(128);
//console.log(q.isFull());

console.log(q);
