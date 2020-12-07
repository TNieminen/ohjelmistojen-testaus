import isObjectLike from '@/isObjectLike.js'

describe('==== isObjectLike ====', () => {
  
  it('Should return false if input is undefined',() => {
    expect(isObjectLike(undefined)).toEqual(false)
  })
  it('Should return false if input is null',() => {
    expect(isObjectLike(null)).toEqual(false)
  })
  it('Should return false if input is NaN',() => {
    expect(isObjectLike(NaN)).toEqual(false)
  })
  it('Should return false if input is a function',() => {
    expect(isObjectLike(() => {})).toEqual(false)
  })
  it('Should return true if input is an array',() => {
    expect(isObjectLike([])).toEqual(true)
  })
  it('Should return true if input is an object',() => {
    expect(isObjectLike({})).toEqual(true)
  })
  it('Should return true if input is an new Number',() => {
    expect(isObjectLike(new Number(0))).toEqual(true)
  })
  it('Should return true if input is an new String',() => {
    expect(isObjectLike(new String(''))).toEqual(true)
  })
  it('Should return false if input is string',() => {
    expect(isObjectLike('test')).toEqual(false)
  })
  it('Should return false if input is number',() => {
    expect(isObjectLike(10)).toEqual(false)
  })
})