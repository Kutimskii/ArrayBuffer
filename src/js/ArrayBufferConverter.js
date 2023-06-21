export default class ArrayBufferConverter {
  static load(buffer) {
    return new Uint16Array(buffer);
  }

  static toString(loadBuffer) {
    return loadBuffer.reduce((acc, current) => acc + String.fromCharCode(current), '');
  }
}
