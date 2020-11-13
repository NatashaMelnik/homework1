const arr_1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
const arr_2 = [-1, -8, -2];
const arr_3 = [1, 7, 3];
const arr_4 = [1, undefined, 3, 5, -3];
const arr_5 = [1, NaN, 3, 5, -3];

const arr_ = [arr_1, arr_2, arr_3, arr_4, arr_5];

let maxElements = [];
let minElements = [];
let arrSum = [];

function findMaxElement(arr, maxElements) {
	for (let i = 0; i < arr.length; i++) {
		maxElements[i] = arr[i][0];
		for (let j = 0; j < arr[i].length; j++) {
			if (typeof arr[i][j] === 'number') {
				if (arr[i][j] > maxElements[i]) {
					maxElements[i] = arr[i][j];
				}
			}
		}
		console.log("max element in " + i + "st array is " + maxElements[i]);
		console.log("");
	}
	return maxElements;
}

function findMinElement(arr, minElements) {
	for (let i = 0; i < arr.length; i++) {
		minElements[i] = arr[i][0];
		for (let j = 0; j < arr[i].length; j++) {
			if (typeof arr[i][j] === 'number') {
				if (arr[i][j] < minElements[i]) {
					minElements[i] = arr[i][j];
				}
			}
		}
		console.log("min element in " + i + "st array is " + minElements[i]);
		console.log("");
	}
	return minElements;
}

function sumElements(arr, arrSum) {
	for (let i = 0; i < arr.length; i++) {
		arrSum[i] = 0;
		for (let j = 0; j < arr[i].length; j++) {
			if (typeof arr[i][j] === 'number') {
				arrSum[i] = arrSum[i] + arr[i][j];
			}
		}
		console.log("sum of elements in " + i + "st array is " + arrSum[i]);
		console.log("");
	}
	return arrSum;
}

let maxElementsArr = findMaxElement(arr_, maxElements);
let minElementsArr = findMinElement(arr_, minElements); 
let arrSumArr = findMaxElement(arr_, arrSum);

