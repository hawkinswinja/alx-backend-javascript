export default function cleanSet(set, startString) {
  if (startString.length <= 0) {
    return '';
  }
  const result = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      result.push(str.slice(startString.length));
    }
  }
  return result.join('-');
}
