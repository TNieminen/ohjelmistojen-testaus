import divide from '@/divide.js'

describe('==== divide ====', () => {
 
  xit('Should return positive integer',() => {
    expect(divide(10,2)).toEqual(5)
  })
  xit('Should return negative integer',() => {
    expect(divide(10,-2)).toEqual(-5)
  })
  xit('Should return positive decimal',() => {
    expect(divide(6,4)).toEqual(1.5)
  })
  xit('Should return negative decimal',() => {
    expect(divide(6,-4)).toEqual(1.5)
  })

  /**
   * TODO: There is no definition in the function how special edge cases in 
   * division should be handled, we assume here standard Javascript operation.
   * However it could be argued that dividing by 0 or an object or null should
   * throw an error. At the moment the return is NaN for these cases, which
   * is sensible, however this should be then documented and these tests removed.
   */

  // Divide by 0 in Javascript returns Infinity
  xit('Dividing by zero should return Infinity',() => {
    expect(divide(10,0)).toEqual(Infinity)
  })
  // Divide by -0 in Javascript returns -Infinity
  xit('Dividing by -zero should return -Infinity',() => {
    expect(divide(10,-0)).toEqual(-Infinity)
  })
  // Divide by object in Javascript returns NaN
  it('Dividing by object should return NaN',() => {
    expect(divide(10,{})).toEqual(NaN)
  })
  // Divide by null in Javascript returns Infinity
  xit('Dividing by null should return Infinity',() => {
    expect(divide(10,null)).toEqual(Infinity)
  })
  // Divide by -null in Javascript returns Infinity
  xit('Dividing by -null should return -Infinity',() => {
    expect(divide(10,-null)).toEqual(-Infinity)
  })
  // Divide by '' in Javascript returns Infinity
  xit('Dividing by empty string should return Infinity',() => {
    expect(divide(10,'')).toEqual(Infinity)
  })
  // Divide by -'' in Javascript returns -Infinity
  xit('Dividing by negative empty string should return -Infinity',() => {
    expect(divide(10,-'')).toEqual(Infinity)
  })

})