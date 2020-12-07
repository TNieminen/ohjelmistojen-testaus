import slice from '@/slice.js'

describe('==== slice ====', () => {

  describe('=== invalid inputs ===', () => {
    
    // TODO: Should throw an exception because otherwise functionality is not predictable.
    // Currently returns an empty array which at least should be documented
    xit('Should throw an exception if parameter is an object',() => {
      expect(() => slice([1,2,3,4], {},3)).toThrow()
    })

    // TODO: Should throw an exception because otherwise functionality is not predictable.
    // Currently returns an empty array which at least should be documented
    xit('Should throw an exception if parameter is a function.',() => {
      expect(() => slice([1,2,3,4], () => {},3)).toThrow()
    })
  
    // TODO: Should throw an exception because otherwise functionality is not predictable.
    // Currently returns an empty array which at least should be documented
    xit('Should throw an exception if parameter is NaN.',() => {
      expect(() => slice([1,2,3,4], NaN,3)).toThrow()
    })

  })

  describe('=== positive slice ===', () => {
    it('Should provide empty list when slicing all elements',() => {
      expect(slice([1,2], 2)).toEqual([])
    })

    it('Should provide correct values when slicing with only start parameter',() => {
      expect(slice([1,2,3,4], 1)).toEqual([2,3,4])
    })
  
    it('Should provide correct values when slicing with start and end parameters',() => {
      expect(slice([1,2,3,4], 1,3)).toEqual([2,3])
    })

    it('Should provide correct values when start parameter is null',() => {
      expect(slice([1,2,3,4], null,3)).toEqual([1,2,3])
    })

    it('Should provide correct values when start parameter is undefined',() => {
      expect(slice([1,2,3,4], undefined,3)).toEqual([1,2,3])
    })

  })
  
  describe('=== negative slice ===', () => {
    it('Should provide correct values when slicing with one negative parameter',() => {
      expect(slice([1,2,3,4], -1)).toEqual([4])
    })
  
    it('Should provide correct values when slicing 2 negative parameters',() => {
      expect(slice([1,2,3,4], -3,-1)).toEqual([2,3])
    })
  })
})