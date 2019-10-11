function findRotationPoint(arr) {
	const firstWord = arr[0];
	let floorIdx = 0;
	let ceilingIdx = arr.length - 1;

	while (floorIdx < ceilingIdx) {
		let gap = ceilingIdx - floorIdx;
		// dynamic midpoint
		let midPoint = ~~(floorIdx + gap / 2);
		if (arr[midPoint] >= firstWord) {
			floorIdx = midPoint;
		} else {
			ceilingIdx = midPoint;
		}

		if (floorIdx + 1 === ceilingIdx) {
			break;
		}
	}

	return ceilingIdx;
}

let input = ["grape", "goat", "ghost", "goober", "gotcha", "gimp", "gulag"];
input = input.sort();
let result = findRotationPoint(input);

console.log(result);
