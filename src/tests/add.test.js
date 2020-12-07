import add from '@/add.js'

describe('==== add ====', () => {
 
  it('Should return 10 if inputs are 4 and 6',() => {
    expect(add(4,6)).toEqual(10)
  })
  it('Should return -10 if input is -4 and -6',() => {
    expect(add(-4,-6)).toEqual(-10)
  })
  it('Should return -2 if input is 4 and -6',() => {
    expect(add(4,-6)).toEqual(-2)
  })
  it('Should return 2 if input -4 and 6',() => {
    expect(add(-4,6)).toEqual(2)
  })
  it('Should work with floating point numbers',() => {
    expect(add(1.1,1.9)).toEqual(3)
  })
  // TODO: The function lack input validation and will return unintended results.
  // Since the library is not typed inputs should be validated
  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/7
  xit('Should throw an error if inputs are invalid and valid',() => {
    expect(() => add('invalid',6)).toThrow()
  })

  // TODO: The function lack input validation and will return unintended results.
  // Since the library is not typed inputs should be validated
  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/7
  xit('Should throw an error if inputs are valid and invalid',() => {
    expect(() => add(6,'invalid')).toThrow()
  })
  // TODO: The function lack input validation and will return unintended results.
  // Since the library is not typed inputs should be validated
  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/7
  xit('Should throw an error if inputs are not valid numbers',() => {
    expect(() => add('invalid','invalid')).toThrow()
  })
})

/**
 * The philosophy behind when we should require input validation in a non-ts environment is as follows:
 * 1. If I don't do input validation, can it lead to unintended results and hard to debug cases?
 * 2. If yes, does adding input validation with custom errors increase the amount of information to the user of the function?
 * For instance if we expect an array as input and we call forEach on it, we don't need to verify if the input is an array because
 * forEach is only defined for arrays and will throw a well defined error.
 * 3. If yes, add input validation
 * 
 * At the very least the lack of input validation and default returns in those cases should be documented in the function
 */