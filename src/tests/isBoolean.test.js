import isBoolean from '@/isBoolean.js'

describe('==== isBoolean ====', () => {
  
  it('Should return true if input is true',() => {
    expect(isBoolean(true)).toEqual(true)
  })
  it('Should return true if input is false',() => {
    expect(isBoolean(false)).toEqual(true)
  })
  it('Should return false if input is undefined',() => {
    expect(isBoolean(undefined)).toEqual(false)
  })
  it('Should return false if input is null',() => {
    expect(isBoolean(null)).toEqual(false)
  })
  it('Should return false if input is NaN',() => {
    expect(isBoolean(NaN)).toEqual(false)
  })
  it('Should return false if input is an empty string',() => {
    expect(isBoolean('')).toEqual(false)
  })
  it('Should return false if input is a string',() => {
    expect(isBoolean('test')).toEqual(false)
  })
  it('Should return false if input is 0',() => {
    expect(isBoolean(0)).toEqual(false)
  })
  it('Should return false if input is a number',() => {
    expect(isBoolean(1)).toEqual(false)
  })
  it('Should return false if input is a function',() => {
    expect(isBoolean(() => {})).toEqual(false)
  })
  it('Should return true with Boolean constructor',() => {
    expect(isBoolean(new Boolean)).toEqual(true)
  })
})