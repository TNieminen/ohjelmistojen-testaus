import isSymbol from '@/isSymbol.js'

describe('==== isSymbol ====', () => {
  
  it('Should return false if input is undefined',() => {
    expect(isSymbol(undefined)).toEqual(false)
  })
  it('Should return false if input is null',() => {
    expect(isSymbol(null)).toEqual(false)
  })
  it('Should return false if input is NaN',() => {
    expect(isSymbol(NaN)).toEqual(false)
  })
  it('Should return false if input is an Function',() => {
    expect(isSymbol(() => {})).toEqual(false)
  })
  it('Should return true if input is an Symbol',() => {
    expect(isSymbol(Symbol())).toEqual(true)
  })
  it('Should return true if input is an Symbol iterator',() => {
    expect(isSymbol(Symbol.iterator)).toEqual(true)
  })
  it('Should return false if input is string',() => {
    expect(isSymbol('test')).toEqual(false)
  })
  it('Should return false if input is number',() => {
    expect(isSymbol(10)).toEqual(false)
  })
})