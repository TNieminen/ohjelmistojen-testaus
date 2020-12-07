import isTypedArray from '@/isTypedArray.js'

describe('==== isTypedArray ====', () => {
  
  it('Should return false if input is undefined',() => {
    expect(isTypedArray(undefined)).toEqual(false)
  })
  it('Should return false if input is null',() => {
    expect(isTypedArray(null)).toEqual(false)
  })
  it('Should return false if input is NaN',() => {
    expect(isTypedArray(NaN)).toEqual(false)
  })
  it('Should return true if input is an Uint8Array',() => {
    expect(isTypedArray(new Uint8Array())).toEqual(true)
  })
  it('Should return true if input is an Uint8ClampedArray',() => {
    expect(isTypedArray(new Uint8ClampedArray())).toEqual(true)
  })
  it('Should return true if input is an Float64Array',() => {
    expect(isTypedArray(new Float64Array())).toEqual(true)
  })
  it('Should return true if input is an BigUint64Array',() => {
    expect(isTypedArray(new BigUint64Array())).toEqual(true)
  })
  it('Should return true if input is an Int32Array',() => {
    expect(isTypedArray(new Int32Array())).toEqual(true)
  })
  it('Should return false if input is non typed array',() => {
    expect(isTypedArray([])).toEqual(false)
  })
  it('Should return false if input is number',() => {
    expect(isTypedArray(10)).toEqual(false)
  })
})