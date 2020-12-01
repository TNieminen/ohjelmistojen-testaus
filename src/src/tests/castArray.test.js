import isBoolean from '@/castArray.js'

describe('==== castArray ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
   })
   beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
   })
   afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
   })
  
  it('Should return [10] with input 10',() => {
    expect(castArray(10)).toEqual([10])
  })

  it('Should return ["test"] with input "test"',() => {
    expect(castArray("test")).toEqual(["test"])
  })

  it('Should return [null] with input null',() => {
    expect(castArray(null)).toEqual([null])
  })

  it('Should return [undefined] with input undefined',() => {
    expect(castArray(undefined)).toEqual([undefined])
  })

  // neg cases
  it('Should return [] with no input',() => {
    expect(castArray()).toEqual([])
  })

})