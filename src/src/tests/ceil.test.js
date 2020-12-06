import ceil from '@/ceil.js'

// TODO: Method documentation is incorrect, namely:
// "(Round up: the smallest integer greater than or equal to a given number.)"
// when a floating point input ceil(6.004, 2) returns a float 6.01 not a integer
// should be fixed to 
// "Round up: the smallest number, float or integer given precision, greater or equal to given number"

// * ceil(4.006)
//  * // => 5
//  *
//  * ceil(6.004, 2)
//  * // => 6.01
//  *
//  * ceil(6040, -2)
//  * // => 6100
//  */

//  TODO:GET BACK TO THIS LATER
describe('==== ceil ====', () => {

  describe('=== precision -1 ===',() => {
    
    it('Should return 10 with input 9.5 with -1 precision',() => {
      expect(ceil(9.5,-1)).toEqual(10)
    })

    it('Should return 0 with input -9.5 with -1 precision',() => {
      expect(ceil(-9.5,-1)).toEqual(0)
    })

  })

  describe('=== precision 0 ===', () => {

    it('Should return 10 with input 9.4 with 0 precision',() => {
      expect(ceil(9.4,0)).toEqual(10)
    })
  
    it('Should return 10 with input 9.5 with 0 precision',() => {
      expect(ceil(9.5,0)).toEqual(10)
    })

    it('Should return 0 with input -9.5 with 0 precision',() => {
      expect(ceil(-9.5,0)).toEqual(-9)
    })

  })

  describe('=== precision 1 ===', () => {

    it('Should return 9.5 with input 9.44 with 1 precision',() => {
      expect(ceil(9.44,1)).toEqual(9.5)
    })
  
    it('Should return 9.5 with input 9.45 with 1 precision',() => {
      expect(ceil(9.45,1)).toEqual(9.5)
    })
    
    it('Should return -9.4 with input -9.45 with 1 precision',() => {
      expect(ceil(-9.45,1)).toEqual(-9.4)
    })

  })

  describe('=== special values ===', () => {

    it('Should handle exponential operations',() => {
      expect(ceil(5E10,-11)).toEqual(10E10)
    })

    // TODO: there is no documentation around how invalid values are handled
    // nor is there inbuilt validation. Expect to return NaN.
    it('Should return NaN if input is undefined', () => {
      expect(ceil(undefined)).toEqual(NaN)
    })

    // TODO: there is no documentation around how invalid values are handled
    // nor is there inbuilt validation. Expect to return NaN.
    xit('Should return NaN if input is null', () => {
      expect(ceil(null)).toEqual(NaN)
    })

    // TODO: there is no documentation around how invalid values are handled
    // nor is there inbuilt validation. Expect to return NaN.
    it('Should return NaN if input is NaN', () => {
      expect(ceil(NaN)).toEqual(NaN)
    })

    // TODO: there is no documentation around how invalid values are handled
    // nor is there inbuilt validation. Expect to return NaN.
    xit('Should return NaN if input is an empty string', () => {
      expect(ceil('')).toEqual(NaN)
    })

    // TODO: there is no documentation around how invalid values are handled
    // nor is there inbuilt validation. Expect to return NaN.
    it('Should return NaN if input is a string', () => {
      expect(ceil('test')).toEqual(NaN)
    })

    // TODO: there is no documentation around how invalid values are handled
    // nor is there inbuilt validation. Expect to return NaN.
    it('Should return NaN if input is an object', () => {
      expect(ceil({})).toEqual(NaN)
    })

    // TODO: there is no documentation around how invalid values are handled
    // nor is there inbuilt validation. Expect to return NaN.
    it('Should return NaN if input is a function', () => {
      expect(ceil(() => {})).toEqual(NaN)
    })

  })
  
 
  
  

  
  // it('Should return 10 with input 9.5 with 0 precision',() => {
  //   expect(ceil(9.5)).toEqual(10)
  // })

  // it('Should return 10 with input 9.4 with 0 precision',() => {
  //   expect(ceil(9.4)).toEqual(10)
  // })

  

  // it('Should return 10 with input 9.4 with 0 precision',() => {
  //   expect(ceil(9.4,1)).toEqual(9)
  // })


  // it('Should return 10 with input 9.1',() => {
  //   expect(ceil(10)).toEqual(9.1)
  // })

  // it('Should return -9 with input -9.9',() => {
  //   expect(ceil(-9)).toEqual(-9.9)
  // })

  // it('Should return -9 with input -9.1',() => {
  //   expect(ceil(-9)).toEqual(-9.1)
  // })

  // // neg cases
  // it('Should return "" with invalid input',() => {
  //   expect(ceil('invalid')).toEqual('')
  // })

})