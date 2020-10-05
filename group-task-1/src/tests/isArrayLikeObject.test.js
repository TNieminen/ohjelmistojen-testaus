import isArrayLikeObject from '@/isArrayLikeObject'

let mockArrayLikeReturn = false
let mockObjectLikeReturn = false

/**
 * @description mock sub modules to make module unit testable
 * @see https://remarkablemark.org/blog/2018/06/28/jest-mock-default-named-export/
 * @see https://medium.com/trabe/mocking-different-values-for-the-same-module-using-jest-a7b8d358d78b
 */
jest.mock('@/isArrayLike.js',() =>  ({__esModule:true,
  default:() => mockArrayLikeReturn}))
jest.mock('@/isObjectLike.js',() =>  ({__esModule:true,
  default:() => mockObjectLikeReturn}))


describe('==== isArrayLikeObject ====', () => {
  it('Should return true if input is an object and an array',() => {
    mockArrayLikeReturn = true
    mockObjectLikeReturn = true
    expect(isArrayLikeObject()).toEqual(true)
  })
  it('Should return false if input is an object but not an array', () => {
    mockArrayLikeReturn = true
    mockObjectLikeReturn = false
    expect(isArrayLikeObject()).toEqual(false)
  })
  it('Should return false if input in an array but not an object', () => {
    mockArrayLikeReturn = false
    mockObjectLikeReturn = true
    expect(isArrayLikeObject()).toEqual(false)
  })
  it('Should return false if input in an array and not an object', () => {
    mockArrayLikeReturn = false
    mockObjectLikeReturn = false
    expect(isArrayLikeObject()).toEqual(false)
  })
})