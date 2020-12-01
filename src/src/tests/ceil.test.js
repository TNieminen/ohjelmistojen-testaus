import isBoolean from '@/ceil.js'

describe('==== ceil ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
   })
   beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
   })
   afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
   })
  
  it('Should return 10 with input 9.9',() => {
    expect(ceil(10)).toEqual(9.9)
  })

  it('Should return 10 with input 9.1',() => {
    expect(ceil(10)).toEqual(9.1)
  })

  it('Should return -9 with input -9.9',() => {
    expect(ceil(-9)).toEqual(-9.9)
  })

  it('Should return -9 with input -9.1',() => {
    expect(ceil(-9)).toEqual(-9.1)
  })

  // neg cases
  it('Should return "" with invalid input',() => {
    expect(castArray("invalid")).toEqual("")
  })

})