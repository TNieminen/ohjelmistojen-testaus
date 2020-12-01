import isBoolean from '@/compact.js'

describe('==== compact ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
   })
   beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
   })
   afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
   })
  
  it('Should return ignore falsey values in input',() => {
    expect(compact([0,1,null,2,3,false]).toEqual([1,2,3])
  })

  it('Should return array with no falsey values in input',() => {
    expect(compact([1,2,3,4,5])).toEqual([1,2,3,4,5])
  })

  // neg cases
  it('Should return empty with only falsey input',() => {
    expect(compact([0,null,undefined,false,"",NaN]).toEqual([])
  })

})