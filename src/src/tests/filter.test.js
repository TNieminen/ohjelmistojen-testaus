import filter from '@/filter.js'

/**
 * TODO: In these tests we opted out to not test with different inputs, but rather
 * see if the promised operation is carried through. This is because if we were
 * to for instance pass in ({ active }) => active as predicate, we are effectively testing 
 * the predicate function in addition to the function implementation itself.
 */

describe('==== filter ====', () => {
 
  it('Should call predicate function for each array element',() => {
    const callbackMock = jest.fn()
    const iterables = [1,2]
    filter(iterables,callbackMock)
    expect(callbackMock).toHaveBeenCalledTimes(iterables.length)
    callbackMock.mockClear()
  })

  it('If all values match, should return original array',() => {
    const callbackMock = jest.fn(() => true)
    const iterables = [1,2]
    expect(filter(iterables,callbackMock)).toEqual(iterables)
    callbackMock.mockClear()
  })

  xit('If all values do not match, should return empty array',() => {
    const callbackMock = jest.fn(() => false)
    const iterables = [1,2]
    expect(filter(iterables,callbackMock)).toEqual([])
    callbackMock.mockClear()
  })

})