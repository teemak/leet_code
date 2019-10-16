//
// in: head = [4,5,1,9]  4 -> 5 -> 1 -> 9 -> null
//     2nd input = 5
//
// out: 4 -> 1 -> 9
//
// 1) deleting the value
// 2) travel the list until I find the value
// 3) iterative => time: O(n)
//
//
//
//
//
//
//
//

function Node(val) {
	return {
		val,
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
			} else {
				this.tail.next = node;
				this.tail = node;
			}
			this.length++;
			return;
		},
		delete(node) {
			let prev = node;
			while (node.next) {
				// replace current node's value with next's
				node.val = node.next.val;
				// need this so it points to null at end
				prev = node;
				console.log("PREV", prev.value);
				// move forward
				node = node.next;
			}
			prev.next = null;
			this.tail = prev;
			this.length--;
		},
	};
}

/*if(node.val !== undefined && node.next !== undefined) {
	node.val = node.next.val;
	node.next = node.next.next;
}*/

let a = Node(4);
let b = Node(5);
let c = Node(1);
let d = Node(9);
let list = LinkedList();
list.append(a);
list.append(b);
list.append(c);
list.append(d);

list.delete(5);
console.log(JSON.stringify(list, null, 6));
