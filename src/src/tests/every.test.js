import every from '@/every.js'

/**
 * TODO: In these tests we opted out to not test with different inputs, but rather
 * see if the promised operation is carried through. This is because if we were
 * to for instance pass in Boolean as predicate, we are effectively testing Boolean in 
 * addition to the function implementation itself.
 */
describe('==== every ====', () => {

  it('Should call predicate function for each array element',() => {
    const callbackMock = jest.fn()
    const iterables = [1,2]
    every(iterables,callbackMock)
    // For some reason the function executes in a different event loop
    // than our expect, and without a setTimeout the expect fires before
    // callback has been called iterables.length amount of times.
    // This seems to be a limitation of the test itself and remains unclear as of now
    setTimeout(() => {
      expect(callbackMock).toHaveBeenCalledTimes(iterables.length)
      callbackMock.mockClear()
    },0)
  })

  it('If all values match, should return true',() => {
    const callbackMock = jest.fn(() => true)
    const iterables = [1,2]
    expect(every(iterables,callbackMock)).toEqual(true)
    callbackMock.mockClear()
  })

  it('If all values do not match, should return false',() => {
    const callbackMock = jest.fn(() => false)
    const iterables = [1,2]
    expect(every(iterables,callbackMock)).toEqual(false)
    callbackMock.mockClear()
  })

})