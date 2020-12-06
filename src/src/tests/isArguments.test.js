import isArguments from '@/isArguments'

describe('==== isArguments ====', () => {
  it('Should return true when passed an arrow function', () => {
    const testFunc = () => { return arguments }
    expect(isArguments(testFunc())).toEqual(true)
  })
  it('Should return true when passed a function', () => {
    const testFunc = function() { return arguments }
    expect(isArguments(testFunc())).toEqual(true)
  })
  it('Should return false when function does not return arguments', () => {
    const testFunc = () => { }
    expect(isArguments(testFunc())).toEqual(false)
  })
  it('Should return false when passed an object', () => {
    expect(isArguments({})).toEqual(false)
  })
  it('Should return false when passed a null', () => {
    expect(isArguments(null)).toEqual(false)
  })
  it('Should return false when passed a string', () => {
    expect(isArguments(' ')).toEqual(false)
  })
  it('Should return false when passed a [object Arguments]', () => {
    expect(isArguments('[object Arguments]')).toEqual(false)
  })
  it('Should return false when passed undefined', () => {
    expect(isArguments(undefined)).toEqual(false)
  })
})