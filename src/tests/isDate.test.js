import isDate from '@/isDate.js'

describe('==== isBuffer ====', () => {
  
  it('Should return false if input is undefined',() => {
    expect(isDate(undefined)).toEqual(false)
  })
  it('Should return false if input is null',() => {
    expect(isDate(null)).toEqual(false)
  })
  it('Should return false if input is NaN',() => {
    expect(isDate(NaN)).toEqual(false)
  })
  it('Should return false if input is an empty string',() => {
    expect(isDate('')).toEqual(false)
  })
  it('Should return false if input is a string',() => {
    expect(isDate('Mon April 23 2012')).toEqual(false)
  })
  it('Should return false if input is a ISO datestring',() => {
    expect(isDate('2020-12-07T02:34:11.707Z')).toEqual(false)
  })
  it('Should return false if input is 0',() => {
    expect(isDate(0)).toEqual(false)
  })
  it('Should return false if input is a number',() => {
    expect(isDate(1)).toEqual(false)
  })
  it('Should return false if input is a function',() => {
    expect(isDate(() => {})).toEqual(false)
  })
  it('Should return true with Date constructor',() => {
    expect(isDate(new Date)).toEqual(true)
  })
})