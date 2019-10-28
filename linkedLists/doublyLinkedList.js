let head = null;
let tail = null;

function Node(data, prev, next) {
	this.data = data;
	this.prev = prev;
	this.next = next;
	this.getData = () => {
		return this.data;
	};
}

function add(newNode) {
	tail.next = newNode;
	newNode.prev = tail;
	tail = newNode;
}

function init() {
	head = new Node("San Francisco");
	head.prev = null;
	head.next = null;

	const nodeOakland = new Node("Oakland");
	nodeOakland.prev = head;
	nodeOakland.enxt = null;
	head.next = nodeOakland;

	const nodeBerkeley = new Node("Berkeley");
	nodeBerkeley.prev = nodeOakland;
	nodeBerkeley.next = null;
	nodeOakland.next = nodeBerkeley;

	tail = new Node("Fremont");
	tail.prev = nodeBerkeley;
	tail.next = null;
	nodeBerkeley.next = tail;
}

function print(node) {
	let p = node;
	let end = null;

	/** moving next pointer **/
	let string = "";
	while (p !== null || p !== undefined) {
		console.log("WHAT IS P?", p);
		console.log("***********\n");
		let data = p.getData();
		string += data + " => ";
		end = p;
		p = p.next;
	}
	console.log(string + " End");
	p = end;

	/** moving prev pointer **/
	string = "";
	while (p !== null) {
		let data = p.getData();
		string += data + " => ";
		p = p.prev;
	}
	console.log(string + " Start");
}

init();
add(new Node("Walnut"));
print(head);
