import keys from '@/keys.js'

describe('==== keys ====', () => {
  const object = {a: 1, b: 2, c: 3};
  function Foo() {
    this.a = 1
    this.b = 2
  }
  it('Should return undefined in list if input is undefined',() => {
    expect(keys(undefined)).toEqual([undefined])
  })
  it('Should return null in list if input is null',() => {
    expect(keys(null)).toEqual([null])
  })
  it('Should return correct values in object input',() => {
    expect(keys(object)).toEqual(['a','b','c'])
  })
  it('Should return correct values in new Foo input',() => {
    expect(keys(new Foo)).toEqual(['a','b'])
  })
  it('Should return empty list if input is empty object',() => {
    expect(keys({})).toEqual([])
  })
  it('Should return empty list in empty list if input is empty lsit',() => {
    expect(keys([])).toEqual([[]])
  })
  it('Should return 10 in list if input is number',() => {
    expect(keys(10)).toEqual([10])
  })
})