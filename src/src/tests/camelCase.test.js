import isBoolean from '@/camelCase.js'

describe('==== camelCase ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
   })
   beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
   })
   afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
   })
  
  it('Should return testCase with input test-case',() => {
    expect(camelCase("test-case")).toEqual("testCase")
  })

  it('Should return testCase with input TEST CASE',() => {
    expect(camelCase("TEST CASE")).toEqual("testCase")
  })
  // neg tests
  it('Should return "" if input is invalid',() => {
    expect(camelCase("")).toEqual("")
  })

})