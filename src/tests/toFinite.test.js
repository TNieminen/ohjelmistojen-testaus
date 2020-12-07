import toFinite from '@/toFinite.js'

describe('==== toFinite ====', () => {

  it('Should provide correct value when casting number',() => {
    expect(toFinite(1.1)).toEqual(1.1)
  })

  it('Should provide correct value casting Number.MIN_VALUE',() => {
    expect(toFinite(Number.MIN_VALUE)).toEqual(5e-324)
  })

  it('Should provide correct value with string containing number',() => {
    expect(toFinite('2')).toEqual(2)
  })

  it('Should provide 0 with string containing non number',() => {
    expect(toFinite('k')).toEqual(0)
  })

  it('Should provide correct value with Infinity',() => {
    expect(toFinite(Infinity)).toEqual(1.7976931348623157e+308)
  })

  it('Should provide correct value with -Infinity',() => {
    expect(toFinite(-Infinity)).toEqual(-1.7976931348623157e+308)
  })
})