import clamp from '@/clamp.js'

describe('==== clamp ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
  
  xit('Should return -5 with inputs -10, -5, 5',() => {
    expect(clamp(-10, -5, 5)).toEqual(-5)
  })

  xit('Should return 5 with inputs 10, -5, 5',() => {
    expect(clamp(10, -5, 5)).toEqual(5)
  })

  // neg cases
  xit('Should return 0 with invalid input',() => {
    expect(clamp('invalid',-5,5)).toEqual(0)
  })

})