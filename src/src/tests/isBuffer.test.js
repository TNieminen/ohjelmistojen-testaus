import isBuffer from '@/isBuffer.js'

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
    expect(isBuffer(new Uint8Array())).toEqual(true)
  })
  it('Should return true with Buffer constructor',() => {
    expect(isBuffer(new Buffer())).toEqual(true)
  })
})