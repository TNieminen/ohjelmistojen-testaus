import reduce from '@/reduce.js'

describe('==== reduce ====', () => {

  it('Should call predicate function for each array element',() => {
    const callbackMock = jest.fn()
    const iterables = [1,2]
    reduce(iterables,callbackMock)
    expect(callbackMock).toHaveBeenCalledTimes(iterables.length)
    callbackMock.mockClear()
  })

  it('Should provide correct values when given sum as function',() => {
    expect(reduce([1,2], (sum, n) => sum + n, 0)).toEqual(3)
  })
                                                  
})