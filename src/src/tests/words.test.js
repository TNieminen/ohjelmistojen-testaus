import words from '@/words.js'

describe('==== word ====', () => {

  describe('=== general cases ===',() => {

    it('Should provide correct values when normal sentence',() => {
      expect(words('I like cats')).toEqual(['I','like','cats'])
    })
  
    it('Should filter out punctuation in sentence',() => {
      expect(words('I, like. cats & dogs!?@#$%^&*()_-+=`~/\\|<>')).toEqual(['I','like','cats', 'dogs'])
    })
  
    it('Should provide correct values when extra whitespace in sentence',() => {
      expect(words('I     like   cats')).toEqual(['I','like','cats'])
    })
  
    it('Should allow using a custom regex matcher',() => {
      expect(words('word1, word2, word3',/[0-9]/g)).toEqual(['1','2','3'])
    })
  
    it('Should return empty array when no custom regex matches',() => {
      expect(words('word, word, word',/[0-9]/g)).toEqual([])
    })

  })

  describe('=== first argument invalid ===', () => {

    it('Should throw if input is undefined',() => {
      expect(() => words(undefined)).toThrow()
    })
  
    it('Should throw if input is null',() => {
      expect(() => words(null)).toThrow()
    })
  
    it('Should throw if input is NaN',() => {
      expect(() => words(NaN)).toThrow()
    })
  
    it('Should throw if input is object',() => {
      expect(() => words({})).toThrow()
    })

  })

  /**
   * TODO: After testing with different inputs to regex matching, we conclude
   * it would be best to have a verification step for proper regex pattern and otherwise throw an error.
   * This is because regex casts values such and null to regex /null/ but the internal handling
   * for value undefined is different which leads to inconsistent results. For this reason we think
   * it best the function would do validation and throw expectios when necessary
   */
  describe('=== second argument invalid ===', () => {

    
    xit('Should throw if input is undefined',() => {
      expect(() => words(' ',undefined)).toThrow()
    })
  
    xit('Should throw if input is null',() => {
      expect(() => words(' ',null)).toThrow()
    })
  
    xit('Should throw if input is NaN',() => {
      expect(() => words(' ',NaN)).toThrow()
    })
  
    xit('Should throw if input is object',() => {
      expect(() => words(' ',{})).toThrow()
    })
    
  })
 

  

})