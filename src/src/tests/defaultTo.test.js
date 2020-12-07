import defaultTo from '@/defaultTo.js'

describe('==== defaultTo ====', () => {
  
  it('Should return original value with string input',() => {
    expect(defaultTo('valid','default')).toEqual('valid')
  })

  it('Should return original integer input',() => {
    expect(defaultTo(1,'default')).toEqual(1)
  })

  // neg cases
  it('Should return default value with null input',() => {
    expect(defaultTo(null,'default')).toEqual('default')
  })

  it('Should return default value with undefined input',() => {
    expect(defaultTo(undefined,'default')).toEqual('default')
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/18
  xit('Should return default value with NaN input',() => {
    expect(defaultTo(NaN,'default')).toEqual('default')
  })

  it('Should return original value with empty string input',() => {
    expect(defaultTo('','default')).toEqual('')
  })
})