function merge(firstArr, secondArr) {
	let finalArr = [];
	while (firstArr.length > 0 && secondArr.length > 0) {
		const minIndexArray = firstArr[0] < secondArr[0] ? firstArr : secondArr;
		finalArr.push(minIndexArray[0]);
		minIndexArray.shift();
	}
	return finalArr.concat(firstArr, secondArr);
}

function mergeSort(unsortedArray) {
	if (unsortedArray.length < 2) {
		return unsortedArray;
	}
	const mid = Math.floor(unsortedArray.length / 2);
	const leftArray = mergeSort(unsortedArray.slice(0, mid));
	const rightArray = mergeSort(unsortedArray.slice(mid));
	console.log(leftArray, rightArray);
	return merge(leftArray, rightArray);
}

const unsortedArray = [5, 0, 10, -3, -1, 4, 12, -5];

console.log(mergeSort(unsortedArray));
