import endsWith from '@/endsWith.js'

describe('==== endsWith ====', () => {
 
  it('Should return true when ends with same with no position stated',() => {
    expect(endsWith('1234','4')).toEqual(true)
  })
  it('Should return false when not same end with no position stated',() => {
    expect(endsWith('1234','3')).toEqual(false)
  })
  it('Should return true when position stated',() => {
    expect(endsWith('1234','3',3)).toEqual(true)
  })
  it('Should return false when position is wrong',() => {
    expect(endsWith('1234','4',3)).toEqual(false)
  })


  it('Should throw error with null input',() => {
    expect(() => endsWith(null,'4')).toThrow()
  })
  it('Should throw error with undefined input',() => {
    expect(() => endsWith(undefined,'4')).toThrow()
  })
  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/23
  it('Should throw error with NaN input',() => {
    expect(() => endsWith(NaN,'4')).toThrow()
  })
  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/23
  it('Should throw error with object input',() => {
    expect(() => endsWith({},'4')).toThrow()
  })
  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/23
  it('Should throw error with function input',() => {
    const testFunc = () => {}
    expect(() => endsWith(testFunc,'4')).toThrow()
  })
})