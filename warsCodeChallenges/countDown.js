function countdown(n) {
	if (n < 1) {
		return [];
	} else {
		let arr = countdown(n - 1);
		arr.unshift(n);
		return arr;
	}
}

console.log(countdown(20));
