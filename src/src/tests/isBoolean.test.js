import {setMockObjectLikeReturn, setMockTagReturn} from './testController'
import isBoolean from '@/isBoolean.js'

describe('==== isBoolean ====', () => {

  beforeEach(() => {
    setMockObjectLikeReturn(undefined)
    setMockTagReturn(undefined)
  })
  
  it('Should return true if input is true',() => {
    expect(isBoolean(true)).toEqual(true)
  })
  it('Should return true if input is false',() => {
    expect(isBoolean(false)).toEqual(true)
  })
  it('Should return false if input is undefined',() => {
    setMockObjectLikeReturn(true)
    setMockTagReturn('[object Undefined]')
    expect(isBoolean(undefined)).toEqual(false)
  })
  it('Should return false if input is null',() => {
    setMockObjectLikeReturn(true)
    setMockTagReturn('[object Null]')
    expect(isBoolean(null)).toEqual(false)
  })
  it('Should return true if input object tag is of type Boolean but not true or false',() => {
    setMockObjectLikeReturn(true)
    setMockTagReturn('[object Boolean]')
    expect(isBoolean(new Boolean)).toEqual(true)
  })
  it('Should return false if variable is not object like',() => {
    setMockObjectLikeReturn(false)
    expect(isBoolean(undefined)).toEqual(false)
  })
})