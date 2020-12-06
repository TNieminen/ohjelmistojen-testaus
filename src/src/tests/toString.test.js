import toString from '@/toString.js'

describe('==== toString ====', () => {

  it('Should provide correct value when casting null',() => {
    expect(toString(null)).toEqual('')
  })

  it('Should provide correct value when casting number',() => {
    expect(toString(1.1)).toEqual('1.1')
  })

  it('Should provide correct value with string string',() => {
    expect(toString('2')).toEqual('2')
  })

  it('Should provide correct value with list',() => {
    expect(toString([1,2,3])).toEqual('1,2,3')
  })

  it('Should provide correct value with correct sign when casting negative number',() => {
    expect(toString(-1.1)).toEqual('-1.1')
  })

})