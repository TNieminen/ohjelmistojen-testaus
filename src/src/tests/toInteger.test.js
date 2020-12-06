import toInteger from '@/toInteger.js'

describe('==== toInteger ====', () => {

  it('Should provide correct value when casting integer',() => {
    expect(toInteger(1)).toEqual(1)
  })

  it('Should provide correct value when casting number',() => {
    expect(toInteger(1.1)).toEqual(1.1)
  })

  it('Should provide correct value casting Number.MIN_VALUE',() => {
    expect(toInteger(Number.MIN_VALUE)).toEqual(0)
  })

  it('Should provide correct value with string containing number',() => {
    expect(toInteger('2')).toEqual(2)
  })

  it('Should provide correct value with string containing number',() => {
    expect(toInteger('2.2')).toEqual(2)
  })

  it('Should provide 0 with string containing non number',() => {
    expect(toInteger('k')).toEqual(0)
  })

  it('Should provide correct value with Infinity',() => {
    expect(toInteger(Infinity)).toEqual(1.7976931348623157e+308)
  })

  it('Should provide correct value with -Infinity',() => {
    expect(toInteger(-Infinity)).toEqual(-1.7976931348623157e+308)
  })
})