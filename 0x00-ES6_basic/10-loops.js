export default function appendToEachArrayValue(array, appendString) {
  const items = [];
  for (const [idex, item] of array.entries()) {
    items.push(appendString + item);
  }
  return items;
}
