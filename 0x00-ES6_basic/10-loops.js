export default function appendToEachArrayValue(array, appendString) {
	for (let [idx, item] of array.entries()) {
		array[idx] = appendString + item
	}

  return array;
}

