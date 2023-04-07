//Iterative Solution
function fibs(n) {
	const arr = [0];
	let a = 1;
	let b = 0;
	for (let i = 1; i < n; i++) {
		let tmp = a;
		a = b;
		b += tmp;
		arr.push(b);
	}
	return arr;
}

console.log(fibs(4));
// === [0, 1, 1, 2]

//Recursive Solution
function fibsRec(n) {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    else {
        const fibs = fibsRec(n - 1);
        return [...fibs, fibs[n - 2] + fibs[n - 3]]
    }
}

console.log(fibsRec(4));
// === [0, 1, 1, 2]