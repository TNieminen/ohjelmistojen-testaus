import defaultToAny from '@/defaultToAny.js'

describe('==== defaultToAny ====', () => {

  it('Should return first value with string input',() => {
    expect(defaultToAny('valid','valid2','default')).toEqual('valid')
  })

  // neg cases
  it('Should return default value with null input',() => {
    expect(defaultToAny(null,'default')).toEqual('default')
  })

  it('Should return default value with undefined input',() => {
    expect(defaultToAny(undefined,'default')).toEqual('default')
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/19
  xit('Should return default value with NaN input',() => {
    expect(defaultToAny(NaN,'default')).toEqual('default')
  })

  it('Should return first value with number input',() => {
    expect(defaultToAny(null,2,'default')).toEqual(2)
  })

  // neg cases
  it('Should return first default value with falsy input',() => {
    expect(defaultToAny(null,'default','default2')).toEqual('default')
  })

  it('Should return second default value with falsy inputs',() => {
    expect(defaultToAny(null,undefined,'default2')).toEqual('default2')
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/19
  xit('Should return third default value with falsy inputs',() => {
    expect(defaultToAny(null,undefined,NaN,'default2')).toEqual('default2')
  })

})