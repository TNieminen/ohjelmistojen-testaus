import isEmpty from '@/isEmpty.js'

describe('==== isEmpty ====', () => {
  
  it('Should return true if input is undefined',() => {
    expect(isEmpty(undefined)).toEqual(true)
  })
  it('Should return true if input is null',() => {
    expect(isEmpty(null)).toEqual(true)
  })
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
  it('Should return true if input is 1',() => {
    expect(isEmpty(1)).toEqual(true)
  })
  it('Should return false if input is a function',() => {
    expect(isEmpty(() => {})).toEqual(false)
  })
  it('Should return true with Array constructor',() => {
    expect(isEmpty(new Array)).toEqual(true)
  })
  it('Should return true with Set constructor',() => {
    expect(isEmpty(new Set)).toEqual(true)
  })
  it('Should return true with Collection constructor',() => {
    expect(isEmpty(new Collection)).toEqual(true)
  })
})