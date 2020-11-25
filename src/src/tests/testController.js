let mockObjectLikeReturn
let mockTagReturn
export function setMockObjectLikeReturn(newValue) {
  mockObjectLikeReturn = newValue
}

export function setMockTagReturn(newValue) {
  mockTagReturn = newValue
}

if (process.env.NODE_ENV === 'unit') {
  console.info('Mocking modules getTag and isObjectLike, using test variables')
  /**
 * @description mock sub modules to make module unit testable
 * @see https://remarkablemark.org/blog/2018/06/28/jest-mock-default-named-export/
 * @see https://medium.com/trabe/mocking-different-values-for-the-same-module-using-jest-a7b8d358d78b
 */
  jest.doMock('@/.internal/getTag.js',() =>  ({__esModule:true,
    default:() => mockTagReturn}))
  jest.doMock('@/isObjectLike.js',() =>  ({__esModule:true,
    default:() => mockObjectLikeReturn}))
}
else {
  console.info('Running in integration mode, using original getTag and isObjectLike implementations')
}

