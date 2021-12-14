let date = new Date();

console.log(date.getHours());

if(date.getHours() < 12) {
	console.log("am");
}

if (12 <= date.getHours()) {
	console.log("pm");
}
