//in: [{ startTime: 0, endTime: 1 },
//	   { startTime: 3, endTime: 5 },
//	   { startTime: 4, endTime: 8 },
//	   { startTime: 10, endTime: 12 },
//	   { startTime: 9, endTime: 10 }]
//
//out:[{ startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 }]
//
//
// time: O(n)
// space: O(1)
//
// 1- look for overlap
//    a) meet[i].endTime >= meet[i+1].startTime
//    b) combine meetings
//        i- check for earliest startTime
//        ii- check for latest endTime => meet[i].endTime = meet[i+1].endTime
//        iii- push meeting into result array
//        iv- increment counter
// 2- no overlap
//    a) push meeting into result array
//    b) continue iterating until end of input
//
//
//    [{ startTime: 0, endTime: 1 },
//	   { startTime: 3, endTime: 5 }, 	i1
//	   { startTime: 4, endTime: 8 },    i2  - look for OVERLAP - set laterEndTime
//	   { startTime: 9, endTime: 10 },   i3  - no overlap just push
//	   { startTime: 10, endTime: 12 }]  i4 - current overlap or equal
//	                                                                                               *lastMeeting*
//    result = [ meeting[0] ] = [{ startTime: 0, endTime: 1 }, {startTime: 3, endTime: 8}, {startTime: 9, endTime: 12}]
//
// /************ OPTIMAL *******************/
// 1- SORT ARRAY by startTime, because we look for OVERLAP by arr[i].endTime >= arr[i+1].startTime
// 2- store 1st meeting in result array - this will be prevMeeting for overlaps
// 3- iterate @ 1st index - because first result will be checked for overlap against current = i
// 4- look for overlap (current.startTime <= prevMeeting.endTime) = result[result.length-1;last index]
//      a) set latest endTime to prevMeeting.endTime
//      b) push current to result
//
//  time: O(n)  have to iterate over every element
//  space: O(n) result array grows - worst case it makes another copy of no merged meetings
// /************ OPTIMAL *******************/
//
//
//
function mergeMeetings(meetings) {
	const meetingsCopy = JSON.parse(JSON.stringify(meetings));
	//NEED TO HAVE MEETINGS SORTED BY START TIME
	const sortedMeetings = meetingsCopy.sort((a, b) => a.startTime - b.startTime);
	//INIT RESULT ARRAY
	const result = [sortedMeetings[0]];

	let current, lastMeeting;
	for (let i = 0; i < meetings.length; i++) {
		//Pick from sorted array
		current = sortedMeeting[i];
		//SO WE CAN ALWAYS REFERENCE THE PREVIOUS
		//HELPS WITH CONSECTIVE OVERLAPS
		lastMeeting = result[result.length - 1];

		//OVERLAP
		if (lastMeeting.endTime >= current.startTime) {
			lastMeeting.endTime = Math.max(lastMeeting.endTime, current.endTime);
		} else {
			result.push(current);
			//THIS THEN BECOMES LAST_MEETING
		}
	}
	return result;

	/*
	let result = [];
	let { length } = arr;
	if (length < 2) return arr;

	for (let i = 0; i < length; i++) {
		let current = arr[i];
		let next = arr[i + 1];
		if (next === undefined) {
			result.push(current);
			return result;
		}
		if (current.endTime >= next.startTime) {
			current.startTime =
				current.startTime < next.startTime ? current.startTime : next.startTime;
			current.endTime = current.endTime > next.endTime ? current.endTime : next.endTime;
			result.push(current);
			i++;
		} else {
			result.push(current);
		}
	}
	return result;
	*/
}

// time: O(n)
// space: O(1)

let input = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];

//consecutive merge
let actual = [
	{ startTime: 1, endTime: 4 },
	{ startTime: 2, endTime: 5 },
	{ startTime: 5, endTime: 8 },
	{ startTime: 2, endTime: 3 },
];

//console.log(mergeMeetings(input));
console.log("Three elements in array:", mergeMeetings(actual));
