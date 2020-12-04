import at from '@/at.js'

describe('==== at ====', () => {

  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
  
  it('Should return [1,2] if inputs are {"a": 1, "b": 2} and ["a", "b"] ',() => {
    let obj = {'a': 1, 'b': 2}
    expect(at(obj, ['a','b'])).toEqual([1,2])
  })

  it('Should return [3,4] if inputs are { "a": [{ "b": { c": 3 } }, 4] } and ["a[0].b.c", "a[1]"]',() => {
    let obj = {'a': [{'b': {'c': 3}}, 4]}
    expect(at(obj, ['a[0].b.c', 'a[1]'])).toEqual([3,4])
  })
  // neg tests
  it('Should return [] if inputs are {"a": 1, "b": 2} and invalid',() => {
    let obj = {'a': 1, 'b': 2}
    expect(at(obj, [])).toEqual([])
  })
  it('Should return [] if inputs are invalid and invalid',() => {
    let obj = {}
    expect(at(obj, [])).toEqual([])
  })

})