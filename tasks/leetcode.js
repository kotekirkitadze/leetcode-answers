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

//27. Remove Element
var removeElement = function (nums, val) {
	let index = 0;
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] != val) {
			nums[index] = nums[i];
			++index;
		}
	}
	return index; //nums.splice(0, index);
};

//35. Search Insert Position

var searchInsert = function (nums, target) {
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] == target) {
			return i;
		}
	}

	let index = 0;
	for (let i = 0; i < nums.length; ++i) {
		if (nums[i] < target) {
			++index;
		}
	}
	return index;
};

// 83. Remove Duplicates from Sorted List
var deleteDuplicates = function (head) {
	return head.filter((e, i) => e !== head[i + 1]);
};

//217. Contains Duplicate
var containsDuplicate = function (nums) {
	for (let i = 0; i < nums.length; ++i) {
		for (let j = i + 1; j < nums.length; ++j) {
			if (nums[i] == nums[j]) {
				return true;
			}
		}
	}
	return false;
};

// 169. Majority Element
var majorityElement = function (nums) {
	majority = Math.floor(nums.length / 2);
	count = 1;
	counts = [];
	if (nums.length == 1) {
		return nums[0];
	}
	for (let i = 0; i < nums.length; ++i) {
		for (let j = i + 1; j < nums.length; ++j) {
			if (nums[i] == nums[j]) {
				++count;
			}
		}
		counts.push([nums[i], count]);
		count = 1;
	}

	let max = Math.max(...counts.map((el) => el[1]));
	let garkveva = counts.filter((el) => el[1] == max);

	return garkveva[0][0];
};
