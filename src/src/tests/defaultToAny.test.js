import defaultToAny from '@/defaultToAny.js'

describe('==== defaultToAny ====', () => {
    
  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
  
  it('Should return first value with string input',() => {
    expect(defaultToAny('valid','valid2','default')).toEqual('valid')
  })

  it('Should return first value with number input',() => {
    expect(defaultToAny(null,2,'default')).toEqual(2)
  })

  // neg cases
  it('Should return first default value with falsey input',() => {
    expect(defaultToAny(null,'default','default2')).toEqual('default')
  })

  it('Should return second default value with falsey inputs',() => {
    expect(defaultToAny(null,undefined,'default2')).toEqual('default2')
  })

})