let powerset = str => {
	const result = [];
	// **for dups
	const library = {};

	const traverse = (buildUp, depth) => {
		// **for dups
		//base case
		if (depth === str.length) {
			// **for dups
			const key = buildUp // ba !== ab || aba !== aab
				.split("")
				.sort()
				.join("");
			console.log("KEY:", key);
			// **for dups
			if (library[key] === undefined) {
				result.push(buildUp);
				// **for dups
				library[key] = true;
			}
			return;
		}
		//left side
		traverse(buildUp, depth + 1);

		//right side
		traverse(buildUp + str[depth], depth + 1);

		//recursive case
	};
	traverse("", 0);
	return result;
};

//const input = "abc";
const dup = "abca";
//console.log(powerset(input));
console.log(powerset(dup));
