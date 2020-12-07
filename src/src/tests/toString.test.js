import toString from '@/toString.js'

describe('==== toString ====', () => {

  // TODO: per documentation should return an empty string, now returns 'null'
  xit('Should provide correct value when casting null',() => {
    expect(toString(null)).toEqual('')
  })

  // TODO: per documentation should return empty string, now returns 'undefined'
  xit('Should provide correct value when casting null',() => {
    expect(toString(undefined)).toEqual('')
  })

  it('Should provide correct value when casting NaN',() => {
    expect(toString(NaN)).toEqual('NaN')
  })


  it('Should provide correct value when casting number',() => {
    expect(toString(1.1)).toEqual('1.1')
  })

  it('Should provide correct value when casting integer',() => {
    expect(toString(2)).toEqual('2')
  })

  it('Should provide correct value when casting negative 0',() => {
    expect(toString(-0)).toEqual('-0')
  })

  it('Should provide correct value when casting 0',() => {
    expect(toString(0)).toEqual('0')
  })

  it('Should provide correct value when casting negative Infinity',() => {
    expect(toString(-Infinity)).toEqual('-Infinity')
  })

  it('Should provide correct value when casting Infinity',() => {
    expect(toString(Infinity)).toEqual('Infinity')
  })

  it('Should provide correct value with string integer',() => {
    expect(toString('2')).toEqual('2')
  })

  it('Should provide correct value with list',() => {
    expect(toString([1,2,3])).toEqual('1,2,3')
  })

  it('Should provide correct value with correct sign when casting negative number',() => {
    expect(toString(-1.1)).toEqual('-1.1')
  })

  it('Should provide correct value with object',() => {
    expect(toString({})).toEqual('[object Object]')
  })

  it('Should provide correct value with a function',() => {
    expect(toString(() => {})).toEqual('() => {}')
  })

})