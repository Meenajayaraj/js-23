/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	
	let A = x2 - x1;
	let B = y2 - y1;
	let d = (A * A) + (B * B);
	let C = Math.sqrt(d)
	return parseInt(C);
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/