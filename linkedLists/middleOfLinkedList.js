//
// in: [1,2,3,4,5]
// out: 3
//
//
// IF even return 2nd value
// in: [1,2,3,4,5,6]
// out: 4 => [4,5,6]
//
//
// 1) use two pointers
// 2) slow pointer increments by one
// 3) fast pointer is double speed
// 4) when fast pointer reaches the tail
//    slow pointer is at the middle
//
//
function middleLinkedList(list) {
	let slow = list.head;
	let fast = list.head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow.value;
}

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
			if (!this.length) {
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
	};
}

const a = Node(1);
const b = Node(2);
const c = Node(3);
const d = Node(4);
const e = Node(5);
const f = Node(6);
//const g = Node(7);
const list = LinkedList();
list.append(a);
list.append(b);
list.append(c);
list.append(d);
list.append(e);
list.append(f);
//list.append(g);

const result = middleLinkedList(list);
console.log(JSON.stringify(list, null, 6));
console.log(result);
