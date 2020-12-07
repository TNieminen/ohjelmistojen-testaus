import keys from '@/keys.js'

describe('==== keys ====', () => {
  const object = {a: 1, b: 2, c: 3}
  function Foo() {
    this.a = 1
    this.b = 2
  }
  it('Should return empty list if input is undefined',() => {
    expect(keys(undefined)).toEqual([])
  })
  it('Should return empty list if input is null',() => {
    expect(keys(null)).toEqual([])
  })
  it('Should return empty array if input is NaN',() => {
    expect(keys(NaN)).toEqual([])
  })
  it('Should return correct values in object input',() => {
    expect(keys(object)).toEqual(['a','b','c'])
  })
  it('Should return correct values in new Foo input',() => {
    expect(keys(new Foo)).toEqual(['a','b'])
  })
  it('Should return empty array if input is empty object',() => {
    expect(keys({})).toEqual([])
  })
  it('Should return empty array in empty list if input is empty array',() => {
    expect(keys([])).toEqual([])
  })
  it('Should return positional list if input is a filled array',() => {
    expect(keys([1,2,3])).toEqual(['0','1','2'])
  })
  it('Should return empty list if input is number',() => {
    expect(keys(10)).toEqual([])
  })
  it('Should return empty list if input is an empty string',() => {
    expect(keys('')).toEqual([])
  })
  it('Should return positional list if input is a string',() => {
    expect(keys('test')).toEqual(['0','1','2','3'])
  })
})