export default function updateUniqueItems(mymap) {
  if (mymap instanceof Map) {
    for (const [k, v] of mymap) {
      if (v === 1) {
        mymap.set(k, 100);
      }
    }
    return mymap;
  }
  throw new Error('Cannot process');
}
