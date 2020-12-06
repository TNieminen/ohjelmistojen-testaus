import map from '@/map.js'

describe('==== map ====', () => {
  it('Should call predicate function for each array element',() => {
    const callbackMock = jest.fn()
    const iterables = [1,2]
    map(iterables,callbackMock)
    expect(callbackMock).toHaveBeenCalledTimes(iterables.length)
    callbackMock.mockClear()
  })

  it('Should have same length as input',() => {
    const callbackMock = jest.fn((n) => n)
    const iterables = [1,2]
    expect(map(iterables,callbackMock)).length.toEqual(iterables.length)
    callbackMock.mockClear()
  })
})