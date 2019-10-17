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
				this.length++;
				return;
			} else {
				this.tail.next = node;
				this.tail = node;
				this.length++;
				return;
			}
		},
	};
}
// CHECKING IF NODE IS PART OF LINKED LIST
// ALSO IS IT PART OF PREVIOUS CONNECTION - then brand new substring
// if you find the value does not exist in subString then change boolean to not connected
// return the number of substrings
function numComponents(list, g) {
	// USE A SET FOR DUPLICATE NUMBERS
	let connected = false;
	let result = 0;
	let { head } = list;

	while (head) {
		// if(set.has(head.val) && !set.has(head.next ? head.next.val : null)) result++
		if (g.includes(head.val) && !connected) {
			result++;
			connected = true;
		} else if (!g.includes(head.val)) {
			connected = false;
		}
		head = head.next;
	}
	return result;
}

let a = Node(0);
let b = Node(1);
let c = Node(2);
let d = Node(3);
let e = Node(4);

let list = LinkedList();
list.append(b);
list.append(c);
list.append(a);
list.append(e);
list.append(d);

console.log(JSON.stringify(list, null, 6));
console.log("*******************************");
console.log(JSON.stringify(numComponents(list, [3, 4, 0, 2, 1]), null, 6));
