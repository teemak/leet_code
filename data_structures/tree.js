function Node(key) {
	const children = [];
	return {
		key,
		children,
		addChild(childNode) {
			children.push(childNode);
			return childNode;
		},
	};
}

function Tree(rootKey) {
	return {
		root: rootKey,
		size: 1,
	};
}

const a = Node("html");
const b = Node("head");
const c = Node("body");
const d = Node("footer");

const dom = Tree(a);
a.addChild(b);

console.log(JSON.stringify(dom, null, 4));
