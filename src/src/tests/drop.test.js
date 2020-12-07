import drop from '@/drop.js'

describe('==== drop ====', () => {
 
  it('Should return all elements',() => {
    expect(drop([1,2,3,4],0)).toEqual([1,2,3,4])
  })
  it('Should return last element',() => {
    expect(drop([1,2,3,4],3)).toEqual([4])
  })
  it('Should return no elements',() => {
    expect(drop([1,2,3,4],4)).toEqual([])
  })
  it('Should return first element dropped by default drop 1 functionality',() => {
    expect(drop([1,2,3,4])).toEqual([2,3,4])
  })
  it('Should handle 0 values', () => {
    expect(drop([0,0])).toEqual([0])
  })

  /**
   * TODO: The function does not specify handling for special inputs.
   * These tests should be either fixed or the documentation updated
   */
  it('Should handle objects',() => {
    expect(drop([{},{}])).toEqual([{}])
  })
  it('Should handle undefined',() => {
    expect(drop([undefined,undefined])).toEqual([undefined])
  })
  it('Should handle null',() => {
    expect(drop([null,null])).toEqual([null])
  })
  it('Should handle NaN',() => {
    expect(drop([NaN,NaN])).toEqual([NaN])
  })
  it('Should handle empty string',() => {
    expect(drop(['',''])).toEqual([''])
  })
  it('Should handle strings',() => {
    expect(drop(['test1','test2'])).toEqual(['test2'])
  })
  it('Should handle function reference',() => {
    const func1 = () => {}
    const func2 = () => {}
    expect(drop([func1,func2])).toEqual([func2])
  })
  it('Should handle negative values in default operation',() => {
    expect(drop([-1,-2])).toEqual([-2])
  })
  it('Should handle negative values two dropped',() => {
    expect(drop([-1,-2,-3],2)).toEqual([-3])
  })
  it('Should handle negative values with none dropped',() => {
    expect(drop([-1,-2],0)).toEqual([-1,-2])
  })
})