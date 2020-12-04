import capitalize from '@/capitalize.js'

describe('==== capitalize ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
  
  xit('Should return Testcase with input testcase',() => {
    expect(capitalize('test-case')).toEqual('Testcase')
  })

  xit('Should return Testcase with input TESTCASE',() => {
    expect(capitalize('TEST CASE')).toEqual('Testcase')
  })
  // neg tests
  it('Should return "" if input is invalid',() => {
    expect(capitalize('')).toEqual('')
  })

})