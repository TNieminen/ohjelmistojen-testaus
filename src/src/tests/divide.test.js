import isBoolean from '@/divide.js'

describe('==== divide ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
   })
   beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
   })
   afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
   })
 
  it('Should return positive integer',() => {
    expect(divide(10,2)).toEqual(5)
  })
  it('Should return negative integer',() => {
    expect(divide(10,-2)).toEqual(-5)
  })
  it('Should return positive decimal',() => {
    expect(divide(6,4)).toEqual(1.5)
  })
  it('Should returnnegative decimal',() => {
    expect(divide(6,-4)).toEqual-(1.5)
  })
  it('Should return error if dividing by 0',() => {
    expect(divide(10,0)).toThrow("MathError")
  })
})