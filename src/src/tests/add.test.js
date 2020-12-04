import add from '@/add.js'

describe('==== add ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
 
  it('Should return 10 if inputs are 4 and 6',() => {
    expect(add(4,6)).toEqual(10)
  })
  it('Should return -10 if input is -4 and -6',() => {
    expect(add(-4,-6)).toEqual(-10)
  })
  it('Should return -2 if input is 4 and -6',() => {
    expect(add(4,-6)).toEqual(-2)
  })
  it('Should return 2 if input -4 and 6',() => {
    expect(add(-4,6)).toEqual(2)
  })
  xit('Should return 0 if inputs are invalid and valid',() => {
    expect(add('invalid',6)).toEqual(0)
  })
  xit('Should return 0 if inputs are invalid and invalid',() => {
    expect(add('invalid','invalid')).toEqual(0)
  })
})