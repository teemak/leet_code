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

function reverseSection(head, m, n) {
	if (m == n) return head;

	// find beginning part
	let prev = head;
	let left = null;
	for (let i = 1; i < m; i++) {
		left = prev;
		prev = prev.next;
	}
	let right = prev;

	// REVERSE
	let current = prev.next;
	let next = null;
	let numReverse = n - m;
	while (current != -null && numReverse-- > 0) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	// fix connections
	right.next = next;
	if (left === null) {
		return prev;
	} else {
		left.next = prev;
		return head;
	}
}

const a = Node(1);
const b = Node(2);
const c = Node(3);
const d = Node(4);
const e = Node(5);
const list = LinkedList();

list.append(a);
list.append(d);
list.append(c);
list.append(b);
list.append(e);

reverseSection(list, 2, 4);
console.log(JSON.stringify(list, null, 6));
