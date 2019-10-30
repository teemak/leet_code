function singleNumber(nums) {
	return nums.reduce((a,b) => a ^ b);
}

let input = [1,2,3,4,5,1,2,3,4];
console.log(singleNumber(input));
