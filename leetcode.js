//1. Two Sum
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; ++i) {
		for (let j = 1; j <= nums.length - 1; ++j) {
			if (i !== j) {
				if (nums[i] + nums[j] == target) {
					return [i, j];
				}
			}
		}
	}
};

//9. Palindrome Number

var isPalindrome = function (x) {
	asString = String(x);
	let backward = [];
	for (let i = asString.length - 1; i >= 0; --i) {
		backward.push(asString[i]);
	}

	return backward.join("") == asString;
};

//66. Plus One
var plusOne = function (digits) {
	let number = "";

	for (let i of digits) {
		number = "" + number + i;
	}

	number = BigInt(number);
	return String(++number)
		.split("")
		.map((e) => +e);
};

//58. Length of Last Word
var lengthOfLastWord = function (s) {
	let arr = s.split(" ");
	arr = arr.filter((e) => e != "");
	return arr[arr.length - 1].length;
};
