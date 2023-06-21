import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('ArrayBufferConverter load(buffer)', () => {
  const buffer = getBuffer();

  const result = ArrayBufferConverter.load(buffer);
  expect(result.byteLength).toEqual(106);
});

test('ArrayBufferConverter tostring', () => {
  const buffer = getBuffer();
  const buff = ArrayBufferConverter.load(buffer);
  const result = ArrayBufferConverter.toString(buff);
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
