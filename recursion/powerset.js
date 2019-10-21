// in: 'abc'
// out: ['', 'a','b','c','ab','ac','bc','abc']
//
//                      ''                               0 = ''
//            /                  \
//          ''                   'a'                     1 = 'a'
//          /   \            /          \
//        ''    'b'        'a'          'ab'             2 = 'b'
//        /\     /\       /  \            /\
//       '' c  b   bc   'a'  ac       'ab'  'abc'        3 = 'c'
//
//
//
//

function powersetDfs(s) {
	const result = [];

	function dfs(current, index) {
		result.push(current);
		for (let i = index; i < s.length; i++) {
			dfs(current.concat(s[i]), i + 1);
		}
	}
	dfs([], 0);
	return result;
}

// BOTTOM UP
function powerset(s) {
	let result = [];
	//let library = {};
	//let set = new Set();

	function traverse(build, depth) {
		//if (set.has(build)) return;

		if (depth === s.length) {
			/*
			let key = build
				.split("")
				.sort()
				.join("");
			if (library[key] === undefined) {
			*/
			result.push(build);
			//library[key] = true;
			//console.log("library:", library);
			return;
		}
		//set.add(build);
		// build is current node's letters
		traverse(build, depth + 1);
		// each right side we add another character
		traverse(build.concat(s[depth]), depth + 1);
		//traverse(build + s[depth], depth + 1);
	}
	traverse([], 0);
	return result;
}

function subsets(s) {
	if (s.length === 0) {
		return [[]];
	} else {
		let rest = subsets(s.slice(1));
		let newSets = rest.map(set => [s[0], ...set]);
		return [...rest, ...newSets];
	}
}

let input = [1, 2, 3];
//let result = subsets(input);
let result = powerset(input);
console.log(result);
