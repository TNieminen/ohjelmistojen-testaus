import clamp from '@/clamp.js'

describe('==== clamp ====', () => {
  
  it('Should raise a number lower than the lower limit, to the lower limit',() => {
    expect(clamp(-10, -5, 5)).toEqual(-5)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/14
  xit('Should lower a number higher than the higher limit, to the higher limit',() => {
    expect(clamp(10, -5, 5)).toEqual(5)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/14
  xit('Should keep its own value if already between limits on positive side',() => {
    expect(clamp(1, -5, 5)).toEqual(1)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/14
  xit('Should keep its own value if already between limits at zero',() => {
    expect(clamp(0, -5, 5)).toEqual(0)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/14
  xit('Should keep its own value if already between limits on the negative side',() => {
    expect(clamp(-1, -5, 5)).toEqual(-1)
  })

  // neg cases
  it('Should return NaN with undefined inputs',() => {
    expect(clamp(undefined,undefined,undefined)).toEqual(NaN)
  })

  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/15
  xit('Should return NaN with incorrect inputs null, undefined and NaN',() => {
    expect(clamp(null,undefined,NaN)).toEqual(NaN)
  })

  it('Should return NaN with incorrect inputs string, object and empty string',() => {
    expect(clamp('string',{},'')).toEqual(NaN)
  })

})