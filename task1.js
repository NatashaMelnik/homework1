const arr_1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
const arr_2 = [-1, -8, -2];
const arr_3 = [1, 7, 3];
const arr_4 = [1, undefined, 3, 5, -3];
const arr_5 = [1, NaN, 3, 5, -3];

const arr_ = [arr_1, arr_2, arr_3, arr_4, arr_5];

function findMax(arr) {
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
			if (arr[i] > max) {
				max = arr[i];
			}
		}
	}
	return max;
}

function findMin(arr) {
	let min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
			if (arr[i] < min) {
				min = arr[i];
			}
		}
	}
	return min;
}

function findSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
			sum = sum + arr[i];
		}
	}
	return sum;
}

function findExtremumAndSum(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minElement = findMin(arr[i]);
		let maxElement = findMax(arr[i]);
		let sumOfElements = findSum(arr[i]);
		console.log('in ' + (i + 1) + ' array min element is ' + minElement + ', max element is ' + maxElement + ', sum is ' + sumOfElements);
		console.log('');
	}
}


let result = findExtremumAndSum(arr_);
