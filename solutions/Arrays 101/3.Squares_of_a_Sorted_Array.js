/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums = [-7, -3, 2, 3, 11];

var sortedSquares = function (nums) {
	return nums.map((e) => e * e).sort((a, b) => a - b);
};

console.log(sortedSquares(nums));
