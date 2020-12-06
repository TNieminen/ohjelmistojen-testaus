import memoize from '@/memoize.js'

describe('==== memoize ====', () => {

  beforeEach(() => {
    const object = {'a':1,'b':2};
    const other = {'c':3,'d':4};
  })
     
  it('Should provide correct values when given object',() => {
    const values = memoize(values)
    expect(values(object)).toEqual([1,2])
  })

  it('Should provide correct values when given other object',() => {
    const values = memoize(values)
    expect(values(other)).toEqual([3,4])
  })

  it('Should provide correct values when given object with changes',() => {
    const values = memoize(values)
    object.a = 2
    expect(values(object)).toEqual([1,2])
  })
  it('Should provide correct values when cache modified',() => {
    const values = memoize(values)
    values.cache.set(object, ['a','b'])
    expect(values(other)).toEqual(['a','b'])
  })
})