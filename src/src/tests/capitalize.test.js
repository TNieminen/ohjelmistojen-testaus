import capitalize from '@/capitalize.js'

describe('==== capitalize ====', () => {
  
  it('Should return Test-case with input test-case',() => {
    expect(capitalize('test-case')).toEqual('Test-case')
  })

  it('Should return Test case with input TEST CASE',() => {
    expect(capitalize('TEST CASE')).toEqual('Test case')
  })

  it('Should return _test_case_ with input _TEST_CASE_',() => {
    expect(capitalize('_TEST_CASE_')).toEqual('_test_case_')
  })

  it('Should return Testcase_ with input testcase',() => {
    expect(capitalize('testcase')).toEqual('Testcase')
  })

  it('Should return (string) 12345 with input 12345',() => {
    expect(capitalize(12345)).toEqual('12345')
  })

  it('Should return T12345 with input t12345',() => {
    expect(capitalize('t12345')).toEqual('T12345')
  })

  // neg tests
  it('Should return "" if input is invalid',() => {
    expect(capitalize('')).toEqual('')
  })

})