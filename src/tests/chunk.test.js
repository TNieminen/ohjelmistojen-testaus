import chunk from '@/chunk.js'

describe('==== chunk ====', () => {
  
  describe('=== general cases ===',() => {
    
    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/12
    xit('Should return [[1,2],[3,4]] with input [1,2,3,4] and 2',() => {
      expect(chunk([1,2,3,4],2)).toEqual([[1,2],[3,4]] )
    })
  
    // Related issue: Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/12
    xit('Should return [[1,2],[3,4],[5]] with input [1,2,3,4,5] and 2',() => {
      expect(chunk([1,2,3,4,5],2)).toEqual([[1,2],[3,4],[5]])
    })
    
    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/12
    xit('Should return [[1,2,3],[4]] with input [1,2,3,4] and 3',() => {
      expect(chunk([1,2,3,4],3)).toEqual([[1,2,3],[4]] )
    })
  
    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/12
    xit('Should return [[1,2,3],[4]] with input [1,2,3,4] and 3',() => {
      expect(chunk([1,2,3,4],3)).toEqual([[1,2,3],[4]] )
    })

    // neg cases
    it('Should return [] with empty input',() => {
      expect(chunk()).toEqual([])
    })
    
  })
  
  describe('=== input validation ===', () => {
    
    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/13
    xit('Should throw an error if input is an object',() => {
      expect(() => chunk({})).toThrow()
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/13
    xit('Should throw an error if input is a function',() => {
      expect(() => chunk(() => console.log(true))).toThrow()
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/13
    xit('Should throw an error if input is an integer',() => {
      expect(() => chunk(2)).toThrow()
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/13
    xit('Should throw an error if input is a string',() => {
      expect(() => chunk('')).toThrow()
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/13
    xit('Should throw an error if input is null',() => {
      expect(() => chunk(null)).toThrow()
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/13
    xit('Should throw an error if input is NaN',() => {
      expect(() => chunk(NaN)).toThrow()
    })

    // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/13
    xit('Should throw an error if input is undefined',() => {
      expect(() => chunk(undefined)).toThrow()
    })

  })

})