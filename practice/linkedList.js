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

function reverseSection(list, m, n) {
	let { head } = list;
	// find beginning part
	let prev = head;
	let left = null;
	// FIND OUT THE BEGINNING OF SWAP INDEX
	for (let i = 1; i < m; i++) {
		left = prev;
		prev = prev.next;
	}
	// THE END RESULT START VALUE
	let right = prev;
	console.log("RIGHT SIDE", right);

	// REVERSE
	let current = prev.next; // tail
	let next = null;
	let numReverse = n - m;

	while (current !== null && numReverse-- > 0) {
		next = current.next; //temp
		current.next = prev; //head
		prev = current; //temp.next
		current = next; //newHead
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
const f = Node(6);
const g = Node(7);
const h = Node(8);
const i = Node(9);
const j = Node(10);
const list = LinkedList();

list.append(a);
list.append(b);
list.append(c);
list.append(d);
list.append(e);
list.append(f);
list.append(g);
list.append(h);
list.append(i);
list.append(j);

//reverseSection(list, 2, 9);
console.log(JSON.stringify(list, null, 6));
