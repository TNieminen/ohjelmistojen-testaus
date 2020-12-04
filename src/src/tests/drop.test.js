import drop from '@/drop.js'

describe('==== drop ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
 
  it('Should return all elements',() => {
    expect(drop([1,2,3,4],0)).toEqual([1,2,3,4])
  })
  it('Should return last elements',() => {
    expect(drop([1,2,3,4],3)).toEqual([4])
  })
  it('Should return no elements',() => {
    expect(drop([1,2,3,4],4)).toEqual([])
  })
  it('Should return first element dropped',() => {
    expect(drop([1,2,3,4])).toEqual([2,3,4])
  })
})