import endsWith from '@/endsWith.js'

describe('==== endsWith ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
 
  it('Should return true when ends with same',() => {
    expect(endsWith('1234','4')).toEqual(true)
  })
  it('Should return false when not same end',() => {
    expect(endsWith('1234','3')).toEqual(false)
  })
  it('Should return true when position stated',() => {
    expect(endsWith('1234','3',3)).toEqual(true)
  })
  it('Should return false when position is wrong',() => {
    expect(endsWith('1234','4',3)).toEqual(false)
  })
})