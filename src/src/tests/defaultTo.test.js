import defaultTo from '@/defaultTo.js'

describe('==== defaultTo ====', () => {
    
  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
  
  it('Should return value with string input',() => {
    expect(defaultTo('valid','default')).toEqual('valid')
  })

  it('Should return default value with number input',() => {
    expect(defaultTo(1,'default')).toEqual(1)
  })

  // neg cases
  it('Should return default value with falsey input',() => {
    expect(defaultTo(null,'default')).toEqual('default')
  })

  it('Should return default value with falsey input',() => {
    expect(defaultTo(undefined,'default')).toEqual('default')
  })

})