/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [12, 345, 2, 6, 7896];
var findNumbers = function (nums) {
	let counter = 0;
	nums.forEach((e) => {
		if (e.toString().length % 2 == 0) {
			++counter;
		}
	});
	return counter;
};
console.log(findNumbers(nums));
