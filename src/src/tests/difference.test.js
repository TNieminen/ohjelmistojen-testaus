import difference from '@/difference.js'

describe('==== difference ====', () => {
    
  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
  
  xit('Should return one difference',() => {
    expect(difference([1,2],[1,3])).toEqual(2)
  })

  it('Should return two difference values',() => {
    expect(difference([1,2,3,4],[3,4])).toEqual([1,2])
  })

  it('Should return no difference values',() => {
    expect(difference([1,2],[1,2])).toEqual([])
  })
  // neg cases
  xit('Should return all values',() => {
    expect(difference([1,2],[3,4])).toEqual([1,2,3,4])
  })

})