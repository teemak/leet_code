function Node(val) {
	return {
		value: val,
		next: null,
	};
}

function LinkedList() {
	return {
		head: null,
		tail: null,
		length: 0,
		append(node) {
			if (this.length === 0) {
				this.head = node;
				this.tail = node;
				this.length++;
				return;
			} else {
				this.tail.next = node;
				this.tail = node;
				this.length++;
			}
		},
		insert(node, index) {
			if (index < 0 || index > this.length) return;
			if (this.length === 0) {
				this.head = node;
				this.tail = node;
				this.length++;
				return;
			} else {
				let current = this.head;
				let previous;
				for (let i = 0; i < index; i++) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
				this.length++;
			}
		},
	};
}

const a = Node(1);
const b = Node(2);
const c = Node(3);
const list = LinkedList();

list.insert(a);
list.append(c);
list.insert(b, 1);

console.log(JSON.stringify(list, null, 6));
