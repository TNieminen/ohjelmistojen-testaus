import chunk from '@/chunk.js'

describe('==== chunk ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
  
  xit('Should return [[1,2],[3,4]] with input [1,2,3,4] and 2',() => {
    expect(chunk([1,2,3,4],2)).toEqual([[1,2],[3,4]] )
  })

  xit('Should return [[1,2],[3,4],[5]] with input [1,2,3,4,5] and 2',() => {
    expect(chunk([1,2,3,4,5],2)).toEqual([[1,2],[3,4],[5]])
  })

  xit('Should return [[1,2,3],[4]] with input [1,2,3,4] and 3',() => {
    expect(chunk([1,2,3,4],3)).toEqual([[1,2,3],[4]] )
  })

  xit('Should return [[1,2,3],[4]] with input [1,2,3,4] and 3',() => {
    expect(chunk([1,2,3,4],3)).toEqual([[1,2,3],[4]] )
  })
  // neg cases
  xit('Should return [] with invalid input 0',() => {
    expect(chunk([1,2,3,4],3)).toEqual([])
  })

})