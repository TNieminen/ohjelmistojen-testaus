import isObject from '@/isObject.js'

describe('==== isObject ====', () => {
  
  it('Should return false if input is undefined',() => {
    expect(isObject(undefined)).toEqual(false)
  })
  it('Should return false if input is null',() => {
    expect(isObject(null)).toEqual(false)
  })
  it('Should return false if input is NaN',() => {
    expect(isObject(NaN)).toEqual(false)
  })
  it('Should return true if input is an Function',() => {
    expect(isObject(Function)).toEqual(true)
  })
  it('Should return true if input is an Array',() => {
    expect(isObject([])).toEqual(true)
  })
  it('Should return true if input is an Object',() => {
    expect(isObject({})).toEqual(true)
  })
  it('Should return true if input is an new Number',() => {
    expect(isObject(new Number(0))).toEqual(true)
  })
  it('Should return true if input is an new String',() => {
    expect(isObject(new String(''))).toEqual(true)
  })
  it('Should return false if input is string',() => {
    expect(isObject("test")).toEqual(false)
  })
  it('Should return false if input is number',() => {
    expect(isObject(10)).toEqual(false)
  })
})