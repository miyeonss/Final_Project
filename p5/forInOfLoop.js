let array = ["apple", "pear", "banana", "kiwi","melon"];

for (let i in array) {
	console.log(`${i} element: ${array[i]}`);
}

console.log("------------");

for (let item of array) {
	console.log(item);
}
