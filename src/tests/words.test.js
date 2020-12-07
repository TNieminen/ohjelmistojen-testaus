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
  
  describe('=== second argument invalid ===', () => {

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/36
    it('Should throw if input is undefined',() => {
      expect(() => words('undefined',undefined)).toThrow()
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/36
    it('Should not match string containing undefined if input is undefined',() => {
      expect(words('undefined',undefined)).not.toEqual(['undefined'])
    })
  
    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/36
    it('Should throw if input is null',() => {
      expect(() => words(' ',null)).toThrow()
    })
  
    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/36
    it('Should throw if input is NaN',() => {
      console.log(words(' ',NaN))
      expect(() => words(' ',NaN)).toThrow()
    })
  
    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/36
    it('Should throw if input is object',() => {
      expect(() => words(' ',{})).toThrow()
    })
    
  })
 

  

})