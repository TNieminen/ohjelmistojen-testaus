import isBoolean from '@/get.js'

describe('==== get ====', () => {

  const object = { 'a': [{ 'b': { 'c': 3 } }] };
  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
   })
   beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
   })
   afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
   })
 
  it('Should return value with string valid input',() => {
    expect(get(object,'a[0].b.c')).toEqual(3)
  })
  it('Should return value with object input',() => {
    expect(get(object, ['a', '0', 'b', 'c'])).toEqual(3)
  })
  it('Should return value with object input ignore deault',() => {
    expect(get(object, 'a[0].b.c',"default")).toEqual(3)
  })
  it('Should return default value when path not found',() => {
    expect(get(object, 'a.b.c')).toEqual("default")
  })
})