import isBoolean from '@/eq.js'

describe('==== eq ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
   })
   beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
   })
   afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
   })
 
  it('Should return true when same objects',() => {
    expect(eq("a","a")).toEqual(true)
  })
  it('Should return false when not same objects',() => {
    expect(eq("a","b")).toEqual(false)
  })
  it('Should return true when both Null',() => {
    expect(eq(null,null)).toEqual(true)
  })
  it('Should return false when null and undefined',() => {
    expect(eq(null,undefined).toEqual(false)
  })
})