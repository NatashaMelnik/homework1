function maxWater(arr, n) {
    let res = 0;
    for (let i = 1; i < n - 1; i++) {
        let left = arr[i];
        for (let j = 0; j < i; j++) {
            left = Math.max(left, arr[j]);
        }
        let right = arr[i];
        for (let j = i + 1; j < n; j++) {
            right = Math.max(right, arr[j]);
        }

        res += Math.min(left, right) - arr[i];
    }
    console.log(res);
    //return res;
}

let arr_1 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; 
let arr_2 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
let arr_3 = [7, 0, 1, 3, 4, 1, 2, 1];
let arr_4 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];
let arr_5 = [2, 2, 1, 2, 2, 3, 0, 1, 2];
let arr_6 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];
let arr_7 = [2, 2, 2, 2, 2];

let answer_1 = maxWater(arr_1, arr_1.length);
let answer_2 = maxWater(arr_2, arr_2.length);
let answer_3 = maxWater(arr_3, arr_3.length);
let answer_4 = maxWater(arr_4, arr_4.length);
let answer_5 = maxWater(arr_5, arr_5.length);
let answer_6 = maxWater(arr_6, arr_6.length);
let answer_7 = maxWater(arr_7, arr_7.length);
