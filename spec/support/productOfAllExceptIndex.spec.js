const returnProductOfAll = require("../../interviewCake/productOfAllExceptIndex");
describe("Test suite for returnProductOfAll", () => {
	//NO INPUT
	it("should return empty array if no input", () => {
		expect(returnProductOfAll()).toBe([]);
	});

	//ONE ELEMENT
	it("should return result for one element array", () => {
		let input = [1];
		let result = [1];
		expect(returnProductOfAll(input)).toBe(result);
	});

	//LARGE ARRAY
	it("should return result for array of 4 elements", () => {
		let input = [1, 7, 3, 4];
		let result = [84, 12, 28, 21];
		expect(returnProductOfAll(input)).toBe(result);
	});

	//ALL NEGATIVE NUMBERS
	it("should return result for all negative values", () => {
		let input = [-1, -7, -3, -4];
		let result = [-84, -12, -28, -21];
		expect(returnProductOfAll(input)).toBe(result);
	});

	//SOME NEGATIVE NUMBERS
	it("should return result for all some negative values", () => {
		let input = [1, 7, 3, -4];
		let result = [-84, -12, -28, 21];
		expect(returnProductOfAll(input)).toBe(result);
	});
});
