import compact from '@/compact.js'

describe('==== compact ====', () => {
  
  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should ignore null in input',() => {
    expect(compact([null,1,2,3])).toEqual([1,2,3])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should ignore false in input',() => {
    expect(compact([false,1,2,3])).toEqual([1,2,3])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should ignore 0 in input',() => {
    expect(compact([0,1,2,3])).toEqual([1,2,3])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should ignore empty string in input',() => {
    expect(compact(['',1,2,3])).toEqual([1,2,3])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should ignore undefined in input',() => {
    expect(compact([undefined,1,2,3])).toEqual([1,2,3])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should ignore NaN in input',() => {
    expect(compact([NaN,1,2,3])).toEqual([1,2,3])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should filter all falsy values from end of the array',() => {
    expect(compact([1,2,3,0,NaN,undefined,null,''])).toEqual([1,2,3])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should filter all falsy values from start of the array',() => {
    expect(compact([NaN,undefined,null,'',0,1,2,3])).toEqual([1,2,3])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should filter all falsy values with no regard to position',() => {
    expect(compact([NaN,1,undefined,2,null,'',0,3])).toEqual([1,2,3])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/16
  it('Should return original array with no falsy values in input',() => {
    expect(compact([1,2,3,4,5])).toEqual([1,2,3,4,5])
  })

  // neg cases
  it('Should return empty with only falsy input',() => {
    expect(compact([0,null,undefined,false,'',NaN])).toEqual([])
  })

})