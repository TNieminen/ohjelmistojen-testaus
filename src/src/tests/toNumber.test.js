import toNumber from '@/toNumber.js'

describe('==== toNumber ====', () => {

  describe('=== general cases ====',() => {

    it('Should provide correct value when casting number',() => {
      expect(toNumber(1)).toEqual(1)
    })
  
    it('Should provide correct value casting Number.MIN_VALUE',() => {
      expect(toNumber(Number.MIN_VALUE)).toEqual(5e-324)
    })
  
    it('Should provide correct value with string containing integer',() => {
      expect(toNumber('2')).toEqual(2)
    })

    it('Should provide correct value with string containing number',() => {
      expect(toNumber('2.2')).toEqual(2.2)
    })
  
    it('Should provide correct value with Infinity',() => {
      expect(toNumber(Infinity)).toEqual(Infinity)
    })
    
  })
  
  describe('=== invalid input ===', () => {
    
    // TODO: Since this not otherwise documented, we'd expect a non castable to return NaN
    it('Should provide NaN with string containing non number',() => {
      expect(Number.isNaN(toNumber('k'))).toEqual(true)
    })

    // TODO: Since this not otherwise documented, we'd expect a non castable to return NaN
    xit('Should provide NaN with an empty string',() => {
      expect(Number.isNaN(toNumber(''))).toEqual(true)
    })

    // TODO: Since this not otherwise documented, we'd expect a non castable to return NaN
    it('Should provide NaN with undefined',() => {
      expect(Number.isNaN(toNumber(undefined))).toEqual(true)
    })

    // TODO: Since this not otherwise documented, we'd expect a non castable to return NaN
    xit('Should provide NaN with null',() => {
      expect(Number.isNaN(toNumber(null))).toEqual(true)
    })

    // TODO: Since this not otherwise documented, we'd expect a non castable to return NaN
    it('Should provide NaN with object',() => {
      expect(Number.isNaN(toNumber({}))).toEqual(true)
    })

    // TODO: Since this not otherwise documented, we'd expect a non castable to return NaN
    it('Should provide NaN with NaN',() => {
      expect(Number.isNaN(toNumber(NaN))).toEqual(true)
    })

    // TODO: Since this not otherwise documented, we'd expect a non castable to return NaN
    it('Should provide NaN with function',() => {
      expect(Number.isNaN(toNumber(() => {}))).toEqual(true)
    })

  })
})