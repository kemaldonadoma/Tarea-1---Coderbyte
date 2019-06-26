function ScaleBalancing(strArr) {
	//convert the array to something more workable
	let newArr = strArr.map(val => {
		return val.replace(/[\[\]]/g, "").split(',').map(val2 => {
			return parseInt(val2, 10);
		}).sort((a, b) => {
			return a - b;
		});
	});
	
	let diff = newArr[0][1] - newArr[0][0];
	let weights = newArr[1];

	//do the single-weight solution test
	if (weights.includes(diff)) {
		return diff.toString();
	}
    //do the two-weights, one-side test
	let weight1 = weights.find((val, ind) => {
		let newWeights = weights.slice(0);
		newWeights.splice(ind, 1);
		return newWeights.includes (diff - val)
	});
	if (weight1) {
		return `${weight1},${diff - weight1}`
	}
    //do the twp-weights, different sides, test
	weight1 = weights.find(val => {
		return weights.includes(diff + val);
	});
	if (weight1) {
		return `${weight1},${diff + weight1}`
	}
    //if nothing is returned yet . . .
	return `not possible`;

}
   
// keep this function call here 
ScaleBalancing(readline());