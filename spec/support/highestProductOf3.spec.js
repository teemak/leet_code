const highestProductOf3 = require("../../interviewCake/highestProductOf3");

describe("Test for highest product of 3", () => {
	it("should test for all positive numbers", () => {
		let input = [1, 2, 3, 4];
		let result = 24;
		let answer = highestProductOf3(input);
		expect(answer).toBe(result);
	});

	it("array has one negative", () => {
		let input = [-5, 4, 8, 2, 3];
		let result = 96;
		let answer = highestProductOf3(input);
		expect(answer).toBe(result);
	});

	it("should test for longer array", () => {
		let input = [6, 1, 3, 5, 7, 8, 2];
		let result = 336;
		let answer = highestProductOf3(input);
		expect(answer).toBe(result);
	});

	it("should test for all negative numbers", () => {
		let input = [-5, -1, -3, -2];
		let result = -6;
		let answer = highestProductOf3(input);
		expect(answer).toBe(result);
	});

	it("should test for two negative numbers", () => {
		let input = [-10, 1, 3, 2, -10];
		let result = 300;
		let answer = highestProductOf3(input);
		expect(answer).toBe(result);
	});

	it("should only accept numbers", () => {
		let input = [1, 2, 3, 4];
		let result = typeof 24;
		let answer = typeof highestProductOf3(input);
		expect(answer).toBe(result);
	});

	it("should test for no numbers", () => {
		let input = [];
		let result = 0;
		let answer = highestProductOf3(input);
		expect(answer).toBe(result);
	});

	it("should only test for arrays of 3 or more values", () => {
		let input = [1, 2, 3];
		let result = 2;
		let answer = input.length;
		expect(answer).toBeGreaterThan(result);
	});
});
