describe("A suite", () => {
	/* IT IS THE TEST */
	it("contains spec with an expectation", () => {
		expect(true).toBe(true);
	});
});

describe("A suite is just a function", () => {
	let a;
	it("and so is a spec", () => {
		a = true;
		expect(a).toBe(true);
	});
});

describe("DESCRIBES THE TEST SUITE", () => {
	it("THIS IS THE TEST", () => {
		expect(3).toBe(3);
	});
});
