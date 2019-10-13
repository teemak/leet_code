//  in:  array of ints
//  $ % ^ &
//  # $ % ^
//  @ # $ %
//  ! @ # $
//
//  > > > > cols
//  V V V V
//  V V V
//  V V
//  V
//  rows             ** you never have to check next once you go to the next row!! **
//
//  time: O(MN) size of array
//  space: O(1) boolean

//  0) wall => col.length
//    floor => # rows
//    row = 0
//    floor = 0
//    start
//
/*******************************/
//  //BEST SOLUTION
//  1) iterate over m
//  2) inside outer loop iterate over n
//  3) value check for match
//     a) false return
//  *) The last col never needs to be checked
//  *) last row never checked
//  *) so iterate length - 1;

function toeplitz(arr) {
	for (let m = 0; m < arr.length - 1; m++) {
		for (let n = 0; n < arr[0].length - 1; n++) {
			if (arr[m][n] !== arr[m + 1][n + 1]) {
				return false;
			}
		}
	}
	return true;
}
let input = [[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]];
let result = toeplitz(input);
console.log(result);

//  $ % ^ &    1) iterate over columns of first row comparing next diagonal
//  # $ % ^    2) increment row - check each column's diagonal
//  @ # $ %    *) go over each row instead of traversing entire diagonal
//  ! @ # $

/*******************************/
//  //WORST SOLUTION
//  1) WHILE iterate within bounds of array what is break condition? reach floor
//  2) set prev = current // current = arr[row][col]
//  3) WHILE check if current matches previous
//     a)travel diagonally row++ col++
//     b) break return false
//  4) check next value in row -- only runs on the first row === 0 then prev = [row][i+1]
//     go to step 3
//  5) out of bounds
//  6) increment row
//     go to step 3
//
//
//  [0,0] - [1,1] - [2,2] - [3,3] - row|col => undefined
//  X % ^ &
//  $ X ^ &
//  # $ X ^
//  @ # $ X

//  **every index traveled will be true
//
//  [0,1] - [1,2] - [2,3] - row|col => undefined
//  X X ^ &
//  $ X X &
//  # $ X X
//  @ # $ X
//
//  [0,2] - [1,3] - row|col => undefined
//  X X X &
//  $ X X X
//  # $ X X
//  @ # $ X

//  [0,3] - row|col => undefined - *reached col end increment row
//  X X X X    * every row > 0 next node has always been visited
//  $ X X X
//  # $ X X
//  @ # $ X

//  [1,0] - [2,1] - [3,2] - row|col => undefined
//  [1,1] = *** true(visited) => increment row
//  X X X X
//  X X X X
//  # X X X
//  @ # X X

//  [2,0] - [3,1] - out of bounds
//  [2,1] === true => increment row
//  X X X X
//  X X X X
//  X X X X
//  @ X X X

//  [3,0] - out of bounds increment row
//  X X X X
//  X X X X
//  X X X X
//  X X X X
