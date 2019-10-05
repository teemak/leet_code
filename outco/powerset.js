//in: 'abc'
//out: ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
//time:
//space:
// ''                     ''
//                   /                  \
// a               ''                     a
//              /     \               /        \
// b           ''      b             a          ab
//           /    \    / \         /   \       /   \
// c       ''     c    b  bc      a   ac     ab   abc
//
//
//
function powerSet(str) {
	let result = [];
	/* FOR DUPLICATES */
	let library = {};
	/* FOR DUPLICATES */

	let traverse = function(buildup, depth) {
		if (depth === str.length) {
			/* FOR DUPLICATES */
			let key = buildup
				.split("")
				.sort()
				.join("");
			if (library[key] === undefined) {
				result.push(key);
				library[key] = true;
			}
			/* FOR DUPLICATES */
			result.push(buildup);
			return;
		}
		//left - increment has to be explicit
		traverse(buildup, depth + 1);
		//right
		traverse(buildup + str[depth], depth + 1);
	};
	traverse("", 0);
	return result;
}
console.log(powerSet("abca"));
