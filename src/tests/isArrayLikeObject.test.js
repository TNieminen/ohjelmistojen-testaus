import isArrayLikeObject from '@/isArrayLikeObject'

describe('==== isArrayLikeObject ====', () => {
 
  describe('=== general cases ===', () => {
    it('Should return true if object has property length equal to zero',() => {
      expect(isArrayLikeObject({length:0})).toEqual(true)
    })
    it('Should return false if object has negative property length',() => {
      expect(isArrayLikeObject({length:-1})).toEqual(false)
    })
    it('Should return false if object has property length greater than Number.MAX_SAFE_INTEGER',() => {
      expect(isArrayLikeObject({length:Number.MAX_SAFE_INTEGER + 1})).toEqual(false)
    })
    it('Should return false if object has no property length',() => {
      expect(isArrayLikeObject({})).toEqual(false)
    })    
  })

  describe('=== type based tests ===',() => {
    it('Should return true with arrays',() => {
      expect(isArrayLikeObject([])).toEqual(true)
    })
    it('Should return true with HTMLCollections',() => {
      expect(isArrayLikeObject(document.body.children)).toEqual(true)
    })
    it('Should return true with Nodelists',() => {
      expect(isArrayLikeObject(document.querySelectorAll('body'))).toEqual(true)
    })
    it('Should return false when passed a function',() => {
      expect(isArrayLikeObject(() => {})).toEqual(false)
    })
    it('Should return false when passed a NaN',() => {
      expect(isArrayLikeObject(NaN)).toEqual(false)
    })
    it('Should return false when passed a null',() => {
      expect(isArrayLikeObject(null)).toEqual(false)
    })
    it('Should return false when passed a undefined',() => {
      expect(isArrayLikeObject(undefined)).toEqual(false)
    })
    it('Should return false with strings',() => {
      expect(isArrayLikeObject('test')).toEqual(false)
    })
    it('Should return false with empty strings',() => {
      expect(isArrayLikeObject('')).toEqual(false)
    })
    it('Should return false with numbers',() => {
      expect(isArrayLikeObject(0)).toEqual(false)
    })
  })
})