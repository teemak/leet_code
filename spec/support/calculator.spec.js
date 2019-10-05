//let Calculator = function() {};

Calculator.prototype.add = function(a, b) {
	return a + b;
};

Calculator.prototype.subtract = function(a, b) {
	return a - b;
};

Calculator.prototype.multiply = function(a, b) {
	return a * b;
};

describe("Calculator", () => {
	beforeEach(() => {
		calculator = new Calculator();
	});

	it("Should add two numbers", () => {
		let result = calculator.add(4, 5);
		expect(result).toBe(9);
	});

	it("Should subtract two numbers", () => {
		let difference = calculator.subtract(10, 5);
		expect(difference).toBe(5);
	});

	it("Should multiply two numbers", () => {
		let product = calculator.multiply(3, 5);
		expect(product).toBe(15);
	});
});
