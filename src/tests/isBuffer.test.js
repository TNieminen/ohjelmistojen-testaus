import isBuffer from '@/isBuffer.js'

/**
 * Buffer is a nodejs class and not available in the target environment. 
 * To make this class work user would have to use a polyfill
 * @see https://github.com/feross/buffer
 * @see https://nodejs.org/api/buffer.html#buffer_buffer
 */
describe('==== isBuffer ====', () => {
  
  it('Should return false if input is undefined',() => {
    expect(isBuffer(undefined)).toEqual(false)
  })
  it('Should return false if input is null',() => {
    expect(isBuffer(null)).toEqual(false)
  })
  it('Should return false if input is NaN',() => {
    expect(isBuffer(NaN)).toEqual(false)
  })
  it('Should return false if input is an empty string',() => {
    expect(isBuffer('')).toEqual(false)
  })
  it('Should return false if input is a string',() => {
    expect(isBuffer('test')).toEqual(false)
  })
  it('Should return false if input is 0',() => {
    expect(isBuffer(0)).toEqual(false)
  })
  it('Should return false if input is a number',() => {
    expect(isBuffer(1)).toEqual(false)
  })
  it('Should return false if input is a function',() => {
    expect(isBuffer(() => {})).toEqual(false)
  })
  it('Should return false if input is a Uint8Array',() => {
    expect(isBuffer(new Uint8Array(2))).toEqual(false)
  })
  it('Should return true with deprecated Buffer constructor',() => {
    expect(isBuffer(new Buffer(2))).toEqual(true)
  })
  it('Should return true with Buffer.alloc constructor',() => {
    expect(isBuffer(Buffer.alloc(2))).toEqual(true)
  })
  it('Should return true with Buffer.from constructor',() => {
    expect(isBuffer(Buffer.from('2'))).toEqual(true)
  })
  it('Should return false with ArrayBuffer constructor',() => {
    expect(isBuffer(new ArrayBuffer(2))).toEqual(false)
  })
})