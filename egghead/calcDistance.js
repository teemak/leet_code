const prevResults = [
	// TWO FEATURES - weekend, temperature
	// 0 - no, lower === colder, total sold for day
	{ weekend: 0, temperature: 1, pies: 100 },
	{ weekend: 0, temperature: 2, pies: 150 },
	{ weekend: 1, temperature: 3, pies: 200 },
	{ weekend: 1, temperature: 4, pies: 300 },
];

// EUCLIDEAN DISTANCE
// compare today's data to previous results array of data
// puts a number to how similar today's data is to results
function calcDistance(data) {
	console.log("DATA INTO CALC DISTANCE", data);
	// weekend, current weekend && temp, current temp
	return Math.sqrt(data.reduce((acc, [init, test]) => acc + Math.pow(init - test, 2), 0));
}

function calcNeighbors(results, { weekend, temperature }) {
	return (
		results
			.reduce((acc, cur) => {
				// PREVIOUS DATA
				let curCalc = calcDistance([
					[weekend, cur.weekend],
					[temperature, cur.temperature],
				]);
				return [...acc, Object.assign({ dist: curCalc }, cur)];
			}, [])
			// SORT TODAY'S DATA SET AGAINST PREVIOUS DATA
			.sort((a, b) => (a.dist < b.dist ? -1 : a.dist > b.dist ? 1 : 0))
		// CLOSEST/MOST SIMILAR GETS PUT FIRST
		// K NEAREST NEIGHBOR ALGORITHM
	);
}

// CURRENT: weekend: true, temp: 2
const [first, second, ...rest] = calcNeighbors(prevResults, { weekend: 1, temperature: 2 });
console.log("WHAT IS REST:", rest);

// REGRESSION
console.log((first.pies + second.pies) / 2);
