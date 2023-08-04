let leftArr = [1, 3, 5, 7, 9, 11, 13];
let rightArr = [2, 4, 6, 8, 10];
let mergedArr = [];

function merge(firstArr, secondArr) {
	let finalArr = [];
	while (firstArr.length > 0 && secondArr.length > 0) {
		const minIndexArray = firstArr[0] < secondArr[0] ? firstArr : secondArr;
		finalArr.push(minIndexArray[0]);
		minIndexArray.shift();
	}
	mergedArr = finalArr.concat(firstArr, secondArr);
}

merge(leftArr, rightArr);
console.log(mergedArr);
