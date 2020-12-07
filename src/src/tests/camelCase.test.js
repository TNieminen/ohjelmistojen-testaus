import camelCase from '@/camelCase.js'

describe('==== camelCase ====', () => {
  
  // TODO: The library is adding an extra space in front of each run
  // this should be fixed and is therefore not ready to be used as of now
  // Related issue https://github.com/TNieminen/ohjelmistojen-testaus/issues/9
  xit('Should return testCase with input test-case',() => {
    expect(camelCase('test-case')).toEqual('testCase')
  })

  xit('Should return testCase with input test-case',() => {
    expect(camelCase('--test-case--')).toEqual('testCase')
  })

  xit('Should return testCase with input TEST CASE',() => {
    expect(camelCase('TEST CASE')).toEqual('testCase')
  })
  // neg tests
  xit('Should return "" if input is empty',() => {
    expect(camelCase('')).toEqual('')
  })

})