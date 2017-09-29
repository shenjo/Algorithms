/**
 * Created by SHENJO on 8/4/2017.
 */

'use strict';

/**
 *  bubble sort
 *
 */

function bubble_sort(arr) {
	for (let i = 0, len = arr.length; i < len - 1; i++) {
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[i]) {
				arr[i] = arr[i] + arr[j];
				arr[j] = arr[i] - arr[j];
				arr[i] = arr[i] - arr[j];
			}
		}
	}
	return arr;
}

// console.log(bubble_sort([16,2,19,234,1,23,97,4353,35]));

function select_sort(arr) {
	for (let i = 0, len = arr.length; i < len - 1; i++) {
		let index = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[index]) {
				index = j;
			}
		}
		if (index !== i) {
			arr[i] = arr[i] + arr[index];
			arr[index] = arr[i] - arr[index];
			arr[i] = arr[i] - arr[index];
		}
	}
	return arr;
}

// console.log(select_sort([16,2,19,234,1,23,97,4353,35]));


function insert_sort(arr) {
	for (let i = 1, len = arr.length; i < len; i++) {
		const val = arr[i];
		let j = i - 1;
		for (; j >= 0; j--) {
			if (val < arr[j]) {
				arr[j + 1] = arr[j]
			}else{
				arr[j+1] = val;
			}
		}

	}
	return arr;
}

// console.log(insert_sort([16,2,19,234,1,23,97,4353,35]));
// console.log(insert_sort([2,3,1]));