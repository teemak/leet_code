function circularQueue(k) {
	return {
		storage: [],
		capacity: k,
		size: 0,
		front: 0,
		rear: -1,
		getFront() {
			return !this.size ? -1 : this.storage[this.front];
		},
		getRear() {
			return !this.size ? -1 : this.storage[this.rear];
		},
		enqueue(val) {
			// ENQUEUE RELYS ON REAR you have to move next rear position
			if (this.currentSize >= this.capacity) return false;
			// ANY NUMBER % X = will always return NUMBER
			this.rear = ++this.rear % this.capacity; // THIs will put it at 0th index
			this.storage[this.rear] = val;
			this.size++;
			return true;
		},
		dequeue() {
			// DE_QUEUE RELYS ON FRONT
			// if [2,4] dequeue.head === ['-1', 4] tail will always point before or after head
			if (!this.size) {
				return false;
			}
			this.front = ++this.front % this.capacity;
			this.size--;
			return true;
		},
		isEmpty() {
			return this.size === 0;
		},
		isFull() {
			return this.size === this.capacity;
		},
	};
}

let q = circularQueue(5);

q.enqueue(2);
q.enqueue(4);
q.dequeue();
console.log(q.getFront());
//console.log(q);
/*
q.enqueue(8);
q.enqueue(16);
q.enqueue(32);
q.dequeue();
q.enqueue(64);
console.log(q);
*/
