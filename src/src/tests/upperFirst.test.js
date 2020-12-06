import upperFirst from '@/upperFirst.js'

describe('==== upperFirst ====', () => {

  it('Should provide correct value when all lowercase',() => {
    expect(upperFirst('lower')).toEqual('Lower')
  })

  it('Should provide correct value when all uppercase',() => {
    expect(upperFirst('LOWER')).toEqual('LOWER')
  })

  it('Should provide correct value when all uppercase but first lowercase',() => {
    expect(upperFirst('lOWER')).toEqual('LOWER')
  })

  it('Should provide correct value when all lowercase but first uppercase',() => {
    expect(upperFirst('Lower')).toEqual('Lower')
  })

  it('Should provide correct value when empty string',() => {
    expect(upperFirst('')).toEqual('')
  })

  it('Should provide correct value when starting number string',() => {
    expect(upperFirst('0test')).toEqual('0test')
  })
})