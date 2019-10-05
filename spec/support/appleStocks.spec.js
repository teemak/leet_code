describe("Test suite for finding maximum profit", () => {
	it("should return max value of 4 values", () => {
		let input = [1, 5, 3, 2];
		let result = 4;
		let answer = appleStocks(input);
		expect(answer).toBe(result);
	});

	it("price goes down then up", () => {
		let input = [7, 2, 8, 9];
		let result = 7;
		let answer = appleStocks(input);
		expect(answer).toBe(result);
	});

	it("price goes up all day", () => {
		let input = [1, 6, 7, 9];
		let result = 8;
		let answer = appleStocks(input);
		expect(answer).toBe(result);
	});

	it("price goes down all day", () => {
		let input = [9, 7, 4, 1];
		let result = -2;
		let answer = appleStocks(input);
		expect(answer).toBe(result);
	});

	it("price stays the same all day", () => {
		let input = [1, 1, 1, 1];
		let result = 0;
		let answer = appleStocks(input);
		expect(answer).toBe(result);
	});

	it("should return max value of 8 values", () => {
		let input = [1, 5, 3, 2, 13, 4, 17, 3, 1];
		let result = 16;
		let answer = appleStocks(input);
		expect(answer).toBe(result);
	});
});
