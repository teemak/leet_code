//# How do you define strong leadership?

//Should take one minute; minute and a half at most

//##### Prompt

Say: "How do you define strong leadership";

//##### Do you hear these things?

//- *Identify*: Does the interviewee discuss their competencies based on what you have asked them? Competencies include:
//- Technical Skills (libraries, languages, etc.)
//- Interpersonal Skills

//- *Prove*: Does the interviewee provide a _specific_ example (past experience or hypothetical scenario)  to showcase competencies and/or fit? Is it presented in the form of a story (punchline, beginning, middle, positive end)?

//- *Close*: Does the interviewee showcase why the company should hire them and how their skills/experience/values will add value to and align with the team/company? Does the interviewee showcase what they have learned in "Prove" and how they will apply it to the new role?

//# 215 - Search a 2D matrix

//Write an efficient algorithm that searches for a value in an M x N matrix. This matrix has the following properties:

//* Integers in each row are sorted from left to right
//* The first integer of each row is greater than the last integer of the previous row.

/*```
Input: Matrix of Integers, Target Integer
Output: Boolean
```

# Example

#### Example 1:

**Input**:

```
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

target = 3
```

**Output**: True

#### Example 2:

**Input**:

```
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
```

**Output**: False

# Constraints
```
Time Complexity: O(log (N*M)) with M being the number of rows and N being the number of columns.
Auxiliary Space Complexity: O(1)
```
# Solution

* 1) Perform a version of Binary Search on the Matrix to search for the target value.


```python

def search_matrix(matrix, target):

  if not matrix: return False

  num_of_rows, num_of_cols = len(matrix), len(matrix[0])

  front, back = 0, (num_of_rows)*(num_of_cols) - 1

  while front <= back:
    midpoint = front + ((back - front) // 2)
    number = matrix[midpoint // num_of_cols][midpoint % num_of_cols]

    if number == target: return True

    elif number < target:
      front = midpoint + 1
    else:
      back = midpoint - 1

  
return False
```


# Resources
https://leetcode.com/problems/search-a-2d-matrix/
*/
//logic
function searchMatrix(matrix, target) {
	//if no length
	if (!matrix.length) return false;

	let row = matrix.length,
		col = matrix[0].length;

	if (matrix[0][0] > target || matrix[row - 1][col - 1] < target) return false;

	let start = 0,
		end = row - 1;

	while (start <= end) {
		let mid = Math.floor((end + start) / 2);
		if (matrix[mid][col - 1] < target) start = mid + 1;
		else end = mid - 1;
	}
	//console.log(start, end);

	let arr = matrix[start];
	//WHAT DOES THIS MEAN?
	(start = 0), (end = arr.length - 1);
	while (start <= end) {
		let mid = Math.floor((end + start) / 2);
		//console.log(start, end, mid);
		if (arr[mid] === target) return true;
		else if (arr[mid] < target) start = mid + 1;
		else end = mid - 1;
	}
	//console.log(start);
	// if(arr[start]===target) return true;
	return false;
}
let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]];
let result = searchMatrix(matrix, 30);
console.log(result);
