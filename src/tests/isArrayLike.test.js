import isArrayLike from '@/isArrayLike.js'

describe('==== isArrayLike ====', () => {

  describe('=== general cases ===', () => {
    it('Should return true if object has property length equal to zero',() => {
      expect(isArrayLike({length:0})).toEqual(true)
    })
    it('Should return false if object has negative property length',() => {
      expect(isArrayLike({length:-1})).toEqual(false)
    })
    it('Should return false if object has property length greater than Number.MAX_SAFE_INTEGER',() => {
      expect(isArrayLike({length:Number.MAX_SAFE_INTEGER + 1})).toEqual(false)
    })
    it('Should return false if object has no property length',() => {
      expect(isArrayLike({})).toEqual(false)
    })    
  })

  describe('=== type based tests ===',() => {
    it('Should return true with arrays',() => {
      expect(isArrayLike([])).toEqual(true)
    })
    it('Should return true with HTMLCollections',() => {
      expect(isArrayLike(document.body.children)).toEqual(true)
    })
    it('Should return true with Nodelists',() => {
      expect(isArrayLike(document.querySelectorAll('body'))).toEqual(true)
    })
    it('Should return false when passed a function',() => {
      expect(isArrayLike(() => {})).toEqual(false)
    })
    it('Should return false when passed a NaN',() => {
      expect(isArrayLike(NaN)).toEqual(false)
    })
    it('Should return false when passed a null',() => {
      expect(isArrayLike(null)).toEqual(false)
    })
    it('Should return false when passed a undefined',() => {
      expect(isArrayLike(undefined)).toEqual(false)
    })
    it('Should return true with strings',() => {
      expect(isArrayLike('test')).toEqual(true)
    })
    it('Should return true with empty strings',() => {
      expect(isArrayLike('')).toEqual(true)
    })
    it('Should return false with numbers',() => {
      expect(isArrayLike(0)).toEqual(false)
    })
  })
})