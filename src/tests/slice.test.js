import slice from '@/slice.js'

describe('==== slice ====', () => {

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

  describe('=== invalid inputs ===', () => {

    describe('== first parameter ==', () => {
      
      // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/30
      xit('Should throw an exception if first parameter is an object',() => {
        expect(() => slice({}, 0,3)).toThrow()
      })

      // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/30
      xit('Should throw an exception if first parameter is a function.',() => {
        expect(() => slice(() => {}, 0,3)).toThrow()
      })
  
      // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/30
      xit('Should throw an exception if first parameter is NaN.',() => {
        expect(() => slice(NaN,0,3)).toThrow()
      })
    
    })

    describe('== second parameter ==', () => {
      
      // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/30
      xit('Should throw an exception if second parameter is an object',() => {
        expect(() => slice([1,2,3,4], {},3)).toThrow()
      })

      // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/30
      xit('Should throw an exception if second parameter is a function.',() => {
        expect(() => slice([1,2,3,4], () => {},3)).toThrow()
      })
  
      // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/30
      xit('Should throw an exception if second parameter is NaN.',() => {
        expect(() => slice([1,2,3,4], NaN,3)).toThrow()
      })

    })

    describe('== third parameter ==', () => {
      
      // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/30
      xit('Should throw an exception if third parameter is an object',() => {
        expect(() => slice([1,2,3,4], 0,{})).toThrow()
      })

      // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/30
      xit('Should throw an exception if third parameter is a function.',() => {
        expect(() => slice([1,2,3,4], 0, () => {})).toThrow()
      })
  
      // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/30
      xit('Should throw an exception if third parameter is NaN.',() => {
        expect(() => slice([1,2,3,4], 0, NaN)).toThrow()
      })

    })

    
  })

})