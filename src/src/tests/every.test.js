import every from '@/every.js'

describe('==== every ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
 
  it('Should return true when same type objects',() => {
    expect(every(['a','b','c','d'],String)).toEqual(true)
  })
  xit('Should return false when not same type objects',() => {
    expect(every(['a','b',1,2],String)).toEqual(false)
  })
  xit('Should return true when all null and objects',() => {
    expect(every([Object('a'),null],Object)).toEqual(true)
  })
  xit('Should return false when null and undefined',() => {
    expect(every([Object('a'),null,undefined],Object)).toEqual(false)
  })
})