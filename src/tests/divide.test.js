import divide from '@/divide.js'

describe('==== divide ====', () => {
 
  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/21
  xit('Should return positive integer',() => {
    expect(divide(10,2)).toEqual(5)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/21
  xit('Should return negative integer',() => {
    expect(divide(10,-2)).toEqual(-5)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/21
  xit('Should return positive decimal',() => {
    expect(divide(6,4)).toEqual(1.5)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/21
  xit('Should return negative decimal',() => {
    expect(divide(6,-4)).toEqual(-1.5)
  })

  it('Should return positive integer when dividing two negative values',() => {
    expect(divide(-1,-1)).toEqual(1)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/22
  // Divide by 0 in Javascript returns Infinity
  xit('Dividing by zero should return Infinity',() => {
    expect(divide(10,0)).toEqual(Infinity)
  })
  
  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/22
  // Divide by -0 in Javascript returns -Infinity
  xit('Dividing by -zero should return -Infinity',() => {
    expect(divide(10,-0)).toEqual(-Infinity)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/22
  // Divide by object in Javascript returns NaN
  it('Dividing by object should return NaN',() => {
    expect(divide(10,{})).toEqual(NaN)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/22
  // Divide by null in Javascript returns Infinity
  xit('Dividing by null should return Infinity',() => {
    expect(divide(10,null)).toEqual(Infinity)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/22
  // Divide by -null in Javascript returns Infinity
  xit('Dividing by -null should return -Infinity',() => {
    expect(divide(10,-null)).toEqual(-Infinity)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/22
  // Divide by '' in Javascript returns Infinity
  xit('Dividing by empty string should return Infinity',() => {
    expect(divide(10,'')).toEqual(Infinity)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/22
  // Divide by -'' in Javascript returns -Infinity
  xit('Dividing by negative empty string should return -Infinity',() => {
    expect(divide(10,-'')).toEqual(Infinity)
  })

})