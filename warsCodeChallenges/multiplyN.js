function multiply(arr, n) {
	if (n <= 0) {
		return 1;
	} else {
		return multiply(arr, n - 1) * arr[n - 1];
	}
}
console.log(multiply([6, 4, 5], 3));
