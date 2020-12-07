import isEmpty from '@/isEmpty.js'

/**
 * These tests make the assumption (potentially incorrectly so) that 
 * the caller of this function wants to strictly know if they have and empty object, collection, map or set
 * or an array like item with length or size of 0.
 * 
 * This decision is then reflected on items such as undefined, which "is empty", but does not meet the 
 * criteria defined in the function. If this decisions is made incorrectly, the documentation should be updated
 * and skipped tests removed.
 */
describe('==== isEmpty ====', () => {
  
  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/27
  it('Should return false if input is undefined',() => {
    expect(isEmpty(undefined)).toEqual(false)
  })
  // TODO: Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/28 
  it('Should return true if input is null',() => {
    expect(isEmpty(null)).toEqual(true)
  })
  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/29
  it('Should return false if input is NaN',() => {
    expect(isEmpty(NaN)).toEqual(false)
  })
  it('Should return true if input is an empty string',() => {
    expect(isEmpty('')).toEqual(true)
  })
  it('Should return false if input is a string',() => {
    expect(isEmpty('test')).toEqual(false)
  })
  it('Should return true if input is empty list',() => {
    expect(isEmpty([])).toEqual(true)
  })
  it('Should return false if input is non empty list',() => {
    expect(isEmpty([1])).toEqual(false)
  })
  it('Should return true if input is empty object',() => {
    expect(isEmpty({})).toEqual(true)
  })
  it('Should return false if input is non empty object',() => {
    expect(isEmpty({1:''})).toEqual(false)
  })
  // TODO: https://github.com/TNieminen/ohjelmistojen-testaus/issues/29
  it('Should return false if input is 1',() => {
    expect(isEmpty(1)).toEqual(false)
  })
  // In javascript functions are also objects and an empty function had no string properties matching the description
  // https://developer.mozilla.org/en-US/docs/Glossary/Function
  it('Should return true if input is a function',() => {
    expect(isEmpty(() => {})).toEqual(true)
  })
  it('Should return true with Array constructor',() => {
    expect(isEmpty(new Array(0))).toEqual(true)
  })
  it('Should return true with an empty Set constructor',() => {
    expect(isEmpty(new Set([]))).toEqual(true)
  })
  it('Should return false with a none-empty Set constructor',() => {
    expect(isEmpty(new Set([1]))).toEqual(false)
  })
  it('Should return true with Map constructor',() => {
    expect(isEmpty(new Map())).toEqual(true)
  })
  it('Should return false with non-empty Map constructor',() => {
    expect(isEmpty(new Map([['test','test']]))).toEqual(false)
  })
  it('Should return true with an empty Buffer constructor',() => {
    expect(isEmpty(Buffer.alloc(0))).toEqual(true)
  })
  it('Should return true with a non-empty empty Buffer constructor',() => {
    expect(isEmpty(Buffer.alloc(1))).toEqual(false)
  })
})