// node - head - tail - length
// append
// insert
// delete
// contains
//
function node(node) {
	return {
		node,
		next: null,
	};
}

// should insert if no nodes exist
// if only two elements should insert and change tail
// test for out of bounds insert
// check that tail gets moved when index === length
function linkedList() {
	return {
		head: null,
		tail: null,
		length: 0,
		insert(node, index) {
			if (index < 0 || index > this.length) return;
			// special case
			if (this.length === 0) {
				this.head = node;
				this.tail = node;
				this.length++;
				return;
			} else if (index === 0) {
				node.next = this.head;
				this.head = node;
			} else if (this.length === 1) {
				this.head.next = node;
				this.tail = node;
			} else if (index === this.length) {
				this.tail.next = node;
				this.tail = node;
			} else {
				// traverse until at correct index
				// move pointers
				let current = this.head;
				for (let i = 0; i < index - 1; i++) {
					//head.next => next => next
					//       A =>  B.next => C
					current = current.next;
					//console.log("CURRENT", current);
				}
				// move pointers in correct order
				// so that references are not lost
				node.next = current.next;
				current.next = node;
			}
			this.length++;
		},
		append(node) {
			if (this.head === null) {
				this.head = node;
				this.tail = node;
				this.length++;
				return;
			}
			this.tail.next = node;
			this.tail = node;
			this.length++;
		},
		isEmpty() {
			return this.length === 0;
		},
		pop() {
			if (!this.length) {
				return null;
			}
			let current = this.tail;
			if (this.head === this.tail) {
				this.head = null;
				this.tail = null;
				this.length--;
				return current;
			}
			let newTail;
			while (current) {
				if (current.next === this.tail) {
					newTail = current;
					break;
				}
				current = current.next;
			}
			this.tail = newTail;
			newTail.next = null;
			this.length--;
		},
		get(index) {
			if (index < 0 || index > this.length) return;
			if (index === 0) return this.head;

			let current = this.head;
			for (let i = 0; i < index; i++) {
				current = current.next;
			}
			console.log(current);
		},
		// delete at index
		remove(index) {
			if (index < 0 || index > this.length) return;
			if (index === 0) {
				this.head = this.head.next;
				this.length--;
				return;
			}
			let current = this.head;
			let previous;
			for (let i = 0; i < index; i++) {
				previous = current; // A
				current = current.next; // B
			}
			previous.next = current.next;
			current.next = null;
			this.length--;
			if (this.length === index) {
				this.tail = previous;
			}
		},
	};
}

const a = node("A");
const c = node("C");
const zero = node(0);
const last = node("Z");
const b = node("B");
const list = linkedList();
//list.append(zero);
//list.append(a);
//list.append(b);
//list.append(c);
//list.append(last);
//console.log(list.pop());

list.insert(a);
list.insert(c);
list.insert(zero, 10);
list.insert(zero, 0);
list.insert(last, 3); // inserts right before the tail
list.insert(b, 2);

//list.get(3);
list.remove(0);
list.remove(3);

//console.log(list.isEmpty());
console.log(JSON.stringify(list, null, 6));
