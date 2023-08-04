const fibonacciSequence = [];

function fibonacci(num) {
	if (num === 0) {
		return 0;
	} else if (num === 1) {
		return 1;
	} else {
		return fibonacci(num - 2) + fibonacci(num - 1);
	}
}

function updateFibonacciSequence(num) {
	if (num === 0) {
		fibonacciSequence.unshift(0);
	} else {
		fibonacciSequence.unshift(fibonacci(num));
		updateFibonacciSequence(num - 1);
	}
}
