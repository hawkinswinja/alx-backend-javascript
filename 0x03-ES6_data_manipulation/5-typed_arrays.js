export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  try {
    view[position] = value;
  }
  catch(err) {
    throw new Error('Position outside range');
  }
  return buffer;
}
