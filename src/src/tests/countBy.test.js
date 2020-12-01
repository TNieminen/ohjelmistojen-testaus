import isBoolean from '@/countBy.js'

describe('==== countBy ====', () => {
    
    
  const users = [
    { 'user': 'name1', 'val': true },
    { 'user': 'name2', 'val': true },
    { 'user': 'name3', 'val': false }]
  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
   })
   beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
   })
   afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
   })
  
  it('Should return correct amount of values in input',() => {
    let ans = {'true':2,'false':1};
    expect(countBy(users,value = value.val).toEqual(ans))
  })

  it('Should return correct amount of names in input',() => {
    let ans = {'name1':1,'name2':1,'name3':1};
    expect(countBy(users,value = value.user).toEqual(ans))
  })

  // neg cases
  it('Should return empty object with empty input',() => {
    expect(countBy({},value = value.val).toEqual({}))
  })

  it('Should return empty object with invalid function',() => {
    expect(countBy(users,value = value.invalid).toEqual({}))
  })
})