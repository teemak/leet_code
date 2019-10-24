var countBits = function(num) {
	let arr = [];
	for (let i = 0; i <= num; i++) {
		let binary = +i.toString(2).replace(/0/g, "").length;
		arr.push(binary);
	}
	return arr;
};

var countBitsFast = function(num) {
	let res = [0];
	for (let i = 1; i < num + 1; i++) {
		if (i % 2 == 0) {
			res.push(res[i / 2]);
		} else {
			res.push(res[Math.floor(i / 2)] + 1);
		}
	}
	return res;
};

var countBitsBitwise = function(num) {
	var ret = [0];
	for (var i = 1; i <= num; i++) {
		ret[i] = ret[i >> 1] + (i & 1);
	}
	return ret;
};
