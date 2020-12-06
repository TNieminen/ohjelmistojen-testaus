import isLength from '@/isLength.js'

describe('==== isLength ====', () => {
  
  it('Should return false if input is undefined',() => {
    expect(isLength(undefined)).toEqual(false)
  })
  it('Should return false if input is null',() => {
    expect(isLength(null)).toEqual(false)
  })
  it('Should return false if input is NaN',() => {
    expect(isLength(NaN)).toEqual(false)
  })
  it('Should return true if input is an number',() => {
    expect(isLength(1)).toEqual(true)
  })
  it('Should return false if input is a Number.MIN_VALUE',() => {
    expect(isLength(Number.MIN_VALUE)).toEqual(false)
  })
  it('Should return false if input is a Number.MAX_VALUE',() => {
    expect(isLength(Number.MAX_VALUE)).toEqual(false)
  })
  it('Should return false if input is non string',() => {
    expect(isLength("3")).toEqual(false)
  })
  it('Should return false if input is negative number',() => {
    expect(isLength(-1)).toEqual(false)
  })
  it('Should return true if input is 0',() => {
    expect(isLength(0)).toEqual(true)
  })
})