const { performance } = require("perf_hooks");
// higher up code has priority
// ordered by timer
// await pauses that line and goes to next loop
// IIFE runs first
let t0, t1;
(function() {
	console.log("** 1");

	setTimeout(function() {
		t0 = performance.now();
		debugger;
		console.log("** 2");
		// 5 milliseconds makes it race condition
	}, 500); //IF SAME TIME THIS WILL RUN FIRST BECAUSE IT HITS LOOP FIRST

	setTimeout(async () => {
		debugger;
		console.log("** 3");
		await aFunction(); //WAITS for X seconds PAUSES
		debugger;
		console.log("** 4");
		console.log("RUN TIME DIFFERENCE FOR PROMISE: \t", t0 - t1);
		//has to wait for promise to finish in 10 seconds
	}, 0);

	debugger;
	console.log("** 5");
})();

function aFunction() {
	return new Promise(resolve => {
		debugger;
		console.log("** CAT");
		setTimeout(resolve, 500); //PAUSES LINE 12
		t1 = performance.now();
	});
}
//
//1
//5
//3
//CAT
//2
//4
//
