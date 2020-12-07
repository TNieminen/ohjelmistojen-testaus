import toInteger from '@/toInteger.js'

describe('==== toInteger ====', () => {

  describe('=== general cases ===',() => {
    
    it('Should provide correct value when casting integer',() => {
      expect(toInteger(1)).toEqual(1)
    })
  
    it('Should provide correct value when casting floating point number',() => {
      expect(toInteger(1.1)).toEqual(1)
    })
  
    it('Should provide correct value casting Number.MIN_VALUE',() => {
      expect(toInteger(Number.MIN_VALUE)).toEqual(0)
    })
  
    it('Should provide correct value with string containing number',() => {
      expect(toInteger('2')).toEqual(2)
    })
  
    it('Should provide correct value with string containing number',() => {
      expect(toInteger('2.2')).toEqual(2)
    })

    it('Should provide correct value with Infinity',() => {
      expect(toInteger(Infinity)).toEqual(1.7976931348623157e+308)
    })
  
    it('Should provide correct value with -Infinity',() => {
      expect(toInteger(-Infinity)).toEqual(-1.7976931348623157e+308)
    })

  })

  describe('=== invalid input ===', () => {
    
    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/31
    xit('Should provide NaN with string containing non number',() => {
      expect(Number.isNaN(toInteger('k'))).toEqual(true)
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/31
    xit('Should provide NaN with an empty string',() => {
      expect(Number.isNaN(toInteger(''))).toEqual(true)
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/31
    xit('Should provide NaN with undefined',() => {
      expect(Number.isNaN(toInteger(undefined))).toEqual(true)
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/31
    xit('Should provide NaN with null',() => {
      expect(Number.isNaN(toInteger(null))).toEqual(true)
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/31
    xit('Should provide NaN with object',() => {
      expect(Number.isNaN(toInteger({}))).toEqual(true)
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/31
    xit('Should provide NaN with NaN',() => {
      expect(Number.isNaN(toInteger(NaN))).toEqual(true)
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/31
    xit('Should provide NaN with function',() => {
      expect(Number.isNaN(toInteger(() => {}))).toEqual(true)
    })

  })
})