import memoize from '@/memoize.js'

describe('==== memoize ====', () => {
     
  beforeEach(() => {
    memoize.Cache = undefined
    memoize.cache = undefined
  })
  it('Should handle single input and return correct value',() => {
    const memoized = memoize(a => Math.pow(a,2))
    expect(memoized(2)).toEqual(4)
  })

  it('Should handle single input and save it in cache',() => {
    const memoized = memoize(a => Math.pow(a,2))
    memoized(2)
    expect(memoized.cache.has(2)).toEqual(true) // cache is documented as freely accessible and modifiable
  })

  it('Should handle single input and return it from cache in the future',() => {
    const mockFunc = jest.fn(a => Math.pow(a,2))
    const memoized = memoize(mockFunc)
    memoized(2)
    expect(memoized(2)).toEqual(4)
    expect(mockFunc).toHaveBeenCalledTimes(1)    
    mockFunc.mockClear()
  })

  it('Should allow changing the Cache constructor',() => {
    class testCache {
      constructor() {
        this.test = true
      }
    }
    memoize.Cache = testCache
    const memoized = memoize(a => Math.pow(a,2))
    expect(memoized.cache.test).toEqual(true)
  })

  it('Should throw error if Cache constructor is invalid',() => {
    class testCache {
      constructor() {
        this.test = true
      }
    }
    memoize.Cache = testCache
    const memoized = memoize(a => Math.pow(a,2))
    expect(() => memoized(2)).toThrow()
  })

})