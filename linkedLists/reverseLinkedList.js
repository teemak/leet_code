//
//  in: 1->2->3->4->5->null
// out: 5->4->3->2->1->null
//
//
//
// solution one
// iterate and cache values
//
// solution two
// recursive?
//
function reverseLinkedList(list) {
	let temp = null;
	let newHead = null;
	let { head } = list;
	while (head !== null) {
		temp = head;
		head = head.next;
		temp.next = newHead;
		newHead = temp;
		list.head = temp;
		if (temp.next === null) {
			list.tail = newHead;
		}
		if (head === null) {
			list.head = newHead;
		}
	}
	return list;
}

function ListNode(value) {
	return {
		value,
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
			}
			this.length++;
		},
	};
}

const a = ListNode(1);
const b = ListNode(2);
const c = ListNode(3);
const d = ListNode(4);
const e = ListNode(5);
const list = LinkedList();
list.append(a);
list.append(b);
list.append(c);
list.append(d);
list.append(e);

console.log(JSON.stringify(list, null, 6));
console.log("**********************\n");
const result = reverseLinkedList(list);
console.log(JSON.stringify(result, null, 4));
