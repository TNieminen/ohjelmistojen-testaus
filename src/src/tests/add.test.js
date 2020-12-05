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
  xit('Should throw an error if inputs are invalid and valid',() => {
    expect(() => add('invalid',6)).toThrow()
  })
  // TODO: The function lack input validation and will return unintended results.
  // Since the library is not typed inputs should be validated
  xit('Should throw an error if inputs are not valid numbers',() => {
    expect(() => add('invalid','invalid')).toThrow()
  })
})