/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
let arr = [1, 0, 2, 3, 0, 4, 5, 0];
var duplicateZeros = function (arr) {
	arr
		.map((e) => {
			if (e === 0) {
				return [0, 0];
			}
			return e;
		})
		.flat()
		.splice(0, arr.length)
		.forEach((e, i) => (arr[i] = e));
};
duplicateZeros(arr);
console.log(arr);
