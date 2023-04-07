function mergesort(arr) {
	if (arr.length <= 1) {
        //if list has 1 item or 0, it is already sorted - return
		return arr;
	} else {
		//Sort left half and right half
		const leftHalf = mergesort(arr.slice(0, Math.ceil(arr.length / 2)));
		const rightHalf = mergesort(arr.slice(Math.ceil(arr.length / 2)));

		//Merge sorted halves
		const sorted = [];
		for (let i = 0; i < arr.length; i++) {
			if (leftHalf[0] < rightHalf[0]) {
				sorted.push(leftHalf.shift());
                continue;
			}
			else if (rightHalf[0] < leftHalf[0]) {
				sorted.push(rightHalf.shift());
                continue;
			}
            if (leftHalf.length === 0) sorted.push(rightHalf.shift());
            else if (rightHalf.length === 0) sorted.push(leftHalf.shift());
		}
		return sorted;
	}
}

//Example input
console.log(mergesort([4, 3, 2, 6]));

//Expected output [2, 3, 4, 6]
