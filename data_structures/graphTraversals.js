/**
 *
 *
 *       B    E
 *      / \  /
 *     A   D --- F
 *      \ /  \  /
 *       C    G
 *
 *
 *
 *
 */

function vertex(id) {
	return {
		value: id,
		edges: {},
	};
}

function graph() {
	return {
		breadthFirst(origin) {
			const result = [];
			const queue = [];
			const travelled = {};

			queue.push(this.vertices[origin]);
			travelled[origin] = true;
			let current;
			while (queue.length > 0) {
				current = queue.shift();

				for (let edge in current.edges) {
					if (travelled[edge] === undefined) {
						queue.push(this.vertices[edge]);
						travelled[edge] = true;
					}
				}
				result.push(current.value);
			}
			//console.log(queue);

			return result;
		},
		vertices: {},
		totalVertices: 0,
		totalEdges: 0,
		addVertex(id) {
			if (this.vertices[id] === undefined) {
				let newVertex = vertex(id);
				this.vertices[id] = newVertex;
				this.totalVertices++;
			} else {
				return `Vertex with ID ${id} already exists in graph`;
			}
		},
		getVertex(id) {
			if (this.vertices[id] !== undefined) {
				return this.vertices[id];
			} else {
				console.log("ID does not exist in graph");
			}
		},
		addEdge(id1, id2) {
			if (this.vertices[id1] !== undefined && this.vertices[id2] !== undefined) {
				if (
					this.vertices[id1].edges[id2] === undefined &&
					this.vertices[id2].edges[id1] === undefined
				) {
					this.vertices[id1].edges[id2] = id2;
					this.vertices[id2].edges[id1] = id1;
					this.totalEdges++;
					return `Edge has been added between ${id1} and ${id2}`;
				} else {
					return `Edge already exists between ${id1} and ${id2}`;
				}
			} else {
				if (this.vertices[id1] === undefined) {
					return `Vertex: ${id1} does not exist in graph`;
				} else {
					return `Vertex: ${id2} does not exist in graph`;
				}
			}
		},
	};
}

const test = graph();
let insert = ["A", "B", "C", "D", "E", "F", "G"];

insert.forEach(elem => test.addVertex(elem));

test.addEdge("A", "B");
test.addEdge("A", "C");
test.addEdge("B", "D");
test.addEdge("C", "D");
test.addEdge("D", "E");
test.addEdge("D", "F");
test.addEdge("D", "G");
test.addEdge("F", "G");

//console.log(test.vertices);
console.log(test.breadthFirst("A"));
