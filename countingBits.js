var countBits = function(num) {
	let arr = [];
	for (let i = 0; i <= num; i++) {
		let binary = +i.toString(2).replace(/0/g, '').length;
		arr.push(binary);
	}
	return arr;
};
