function isFruit({ size, redness }) {
	const fruit = [
		{ name: "grape", size: 1, redness: 0 },
		{ name: "orange", size: 2, redness: 1 },
		{ name: "grapefruit", size: 3, redness: 2 },
	];

	const { name } = fruit.reduce(
		(prev, curr) => {
			let currentCalc = euclideanDistance([[size, curr.size], [redness, curr.redness]]);
			return prev.dist < currentCalc ? prev : { name: curr.name, dist: currentCalc };
		},
		{
			name: fruit[0].name,
			dist: euclideanDistance([[size, fruit[0].size], [redness, fruit[0].redness]]),
		},
	);

	return `This is most likely a ${name}!`;
}

function euclideanDistance(data) {
	//console.log("data", data);
	// Math.sqrt
	// data.reduce
	// acc + Math.pow
	// init - test
	// 2?
	// 0
	return Math.sqrt(
		data.reduce(
			(acc, [init, test]) =>
				//console.log("ACCUMULATOR:", acc);
				//console.log("INIT", init);
				//console.log("TEST", test);
				acc + Math.pow(init - test, 2),
			0,
		),
	);
}

//console.log("SQRT of 49", Math.sqrt(49));

// KNN - K Nearest Neighbor
//console.log(isFruit({ size: 1, redness: 0 }));
//console.log(isFruit({ size: 3, redness: 2 }));
let data = [1, 2, 3, 4, 5];
let result = data.reduce((a, b) => {
	//console.log("first", a);
	//console.log("second", b);
	a + b;
}, 1);

console.log(Array.prototype.reduce.toString());
