let arr_1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
let arr_2 = [-1, -8, -2];
let arr_3 = [1, 7, 3];
let arr_4 = [1, undefined, 3, 5, -3];
let arr_5 = [1, NaN, 3, 5, -3];

let arr_ = [arr_1, arr_2, arr_3, arr_4, arr_5];

let maxElements = [];
let minElements = [];
let arrSum = [];

function findElements(arr,maxElements, minElements, arrSum) {
	for (let i = 0; i < arr.length; i++) {
		maxElements[i] = arr[i][0];
		minElements[i] = arr[i][0];
		arrSum[i] = 0;
		for (let j = 0; j < arr[i].length; j++) {
			if(isNaN(arr[i][j]) || typeof arr[i][j] === 'undefined'){ 
				continue;
			}
			if (arr[i][j] > maxElements[i]) {	
				maxElements[i] = arr[i][j];
			}
			if (arr[i][j] < minElements[i]) {
				minElements[i] = arr[i][j];
			}
			arrSum[i] = arrSum[i] + arr[i][j];
		}
		console.log("max element in " + i + "st array is "+ maxElements[i]);
		console.log("min element in " + i + "st array is "+ minElements[i]);
		console.log("sum of elements in " + i + "st array is "+ arrSum[i]);
		console.log("");
	}
}

let answer = findElements(arr_, maxElements, minElements, arrSum);
