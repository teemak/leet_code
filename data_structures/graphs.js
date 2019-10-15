//
//
function Graph() {
	return {
		storage: {},
		addVertex(id) {
			if (this.storage[id]) return false;
			this.storage[id] = [];
			return true;
		},
		addEdge(id1, id2) {
			if (!this.storage[id1] || !this.storage[id2]) return false;
			if (this.storage[id1].indexOf(id2) >= 0) return false;
			this.storage[id1].push(id2);
			return true;
		},
	};
}

const graph = Graph();
graph.addVertex(8);
graph.addVertex(10);
graph.addEdge(8, 10);
console.log(JSON.stringify(graph, null, 6));
