import toNumber from '@/toNumber.js'

describe('==== toNumber ====', () => {

  it('Should provide correct value when casting number',() => {
    expect(toNumber(1)).toEqual(1)
  })

  it('Should provide correct value casting Number.MIN_VALUE',() => {
    expect(toNumber(Number.MIN_VALUE)).toEqual(5e-324)
  })

  it('Should provide correct value with string containing number',() => {
    expect(toNumber('2')).toEqual(2)
  })

  it('Should provide 0 with string containing non number',() => {
    expect(toNumber('k')).toEqual(0)
  })

  it('Should provide correct value with Infinity',() => {
    expect(toNumber(Infinity)).toEqual(Infinity)
  })

})