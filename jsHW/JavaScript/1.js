/**
*
*/

var arr1 = [3, 'a', 'a', 'a', 2,'a', 3, 'a', 3, 'a', 2, 4, 9, 3]; 

function getMostFrequent (array){
	if(array.length == 0)
		return null;
	var map = {};
	var el, maxElement, maxCount = 1;
	for (var i = 0; i < array.length; i++){
		el = array[i];
		if (map[el] == null){
			map[el] = 1;
		} else {
			map[el]++;
		}
		if (map[el] > maxCount){
			maxEl = el;
			maxCount = map[el];
		}
	}
	return maxEl + ' (' + maxCount + ' times)';
}

console.log(getMostFrequent(arr1));