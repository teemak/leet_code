function vertex(key) {
	const neighbors = [];
	return {
		key,
		neighbors,
		addNeighbors(vertex) {
			neighbors.push(vertex);
		},
	};
}

// directed assumes the edges point to each other
function Graph(directed = false) {
	const vertices = [];
	const edges = [];
	return {
		directed,
		vertices,
		edges,
		addVertex(key) {
			vertices.push(vertex(key));
		},
		getVertex(key) {
			return vertices.find(vertex => vertex.key === key);
		},
		addEdge(key1, key2) {
			const node1 = this.getVertex(key1);
			const node2 = this.getVertex(key2);

			node1.addNeighbors(node2);
			edges.push(`${key1} -- ${key2}`);

			if (!directed) {
				node2.addNeighbors(node1);
			}
		},
		print() {
			return vertices
				.map(({ key, neighbors }) => {
					let result = key;
					if (neighbors.length) {
						result += ` => ${neighbors.map(neighbor => neighbor.key).join(" ")} `;
					}
					return result;
				})
				.join("\n");
		},
	};
}

const graph = Graph();
graph.addVertex(8);
graph.addVertex(10);
graph.addVertex(220);
graph.addVertex(4510);
graph.addVertex(15330);
graph.addEdge(8, 10);
graph.addEdge(8, 220);
graph.addEdge(8, 4510);
//console.log(graph);
console.log(graph.print());
