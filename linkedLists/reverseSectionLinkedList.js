//
// in: linked_list.head, m = start, n = end
// 1 -> 4 -> 3 -> 2 -> 5 -> null
//      m         n
//
// out:
// 1 -> 2 -> 3 -> 4 -> 5 -> null
//
//
//
//
// initialize
//      m         n
// 1 -> 4 -> 3 -> 2 -> 5 -> null
// left           right
//
//
// 1) result of first iteration
//    left starts out as null
//    iterate until m - while moving node
//    head is prev     === 1
//    set left as prev === null => 1
//
//      m         n
// left=null 1 -> 4 -> 3 -> 2 -> 5 -> null
//           left           right
//           prev
//
//      m         n
// 1 -> 4 -> 3 -> 2 -> 5 -> null
// left           right
//     prev

function reverseSection(list, m, n) {
	if(m === n) return list;
	let { head } = list;
	let left = null; // WILL POINT TO M
	let prev = head;
	// This loop is for setting the LEFT
	// M, N are 1-index instead of 0-index
	for (let i = 1; i < m; i++) {
		left = prev;
		prev = prev.next;
	}
	// THIS WILL BE THE END
	let right = prev; // WILL BE USED TO POINT TO N+1
	//console.log("** LEFT", left.value);
	//console.log("*** RIGHT", right.value);

	// REVERSE INDICES ITERATIVELY
	let current = prev.next; // THE STARTING M+1 === 3
	let next = null; // DUMMY NODE
	let loops = n - m; // === 3
	//console.log("LOOPS", loops); // CURRENT STARTS AT 3
	while (current !== null && loops-- > 0) {
		next = current.next; // MOVES NODE FORWARD === 2 ** moves forward
		current.next = prev; // 3 -> 4       ** moves forward
		prev = current; // 3 becomes prev - before it was 4    ** moves backward
		current = next; // 2 becomes current - before it was 3 ** moves forward
	}

	right.next = next; // next was ? points to 5
	// N points to correct spot
	// Left needs to point to M
	if (left === null) {
		// IF LEFT WAS THE VERY BEGINNING
		return prev;
	} else {
		left.next = prev; // LEFT WILL POINT TO N
		return list;
	}
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
			} else {
				this.tail.next = node;
				this.tail = node;
			}
			this.length++;
			return;
		},
	};
}
let a = Node(1);
let b = Node(2);
let c = Node(3);
let d = Node(4);
let e = Node(5);
let list = LinkedList();
list.append(a);
list.append(d);
list.append(c);
list.append(b);
list.append(e);

let input = list;
//console.log(JSON.stringify(list, null, 6));
let result = reverseSection(input, 2, 4);
console.log(JSON.stringify(result, null, 6));
