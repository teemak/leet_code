// higher up code has priority
// ordered by timer
// await pauses that line and goes to next loop
// IIFE runs first
(function() {
	console.log("** 1");

	setTimeout(function() {
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
		//has to wait for promise to finish in 10 seconds
	}, 0);

	debugger;
	console.log("** 5");
})();

function aFunction() {
	return new Promise(resolve => {
		debugger;
		console.log("** CAT");
		setTimeout(resolve, 400); //PAUSES LINE 12
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
