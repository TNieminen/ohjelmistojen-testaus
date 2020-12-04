import filter from '@/filter.js'

describe('==== filter ====', () => {

  const users = [
    {'user': 'name1', 'active': true, 'test': true},
    {'user': 'name2', 'active': false, 'test': false},
    {'user': 'name3', 'active': true, 'test': false}]
  beforeAll(() => {
    // TYPE: SETUP, run global setups at the start if needed
  })
  beforeEach(() => {
    // TYPE: SETUP, run a script before each "it"
  })
  afterEach(() => {
    // TYPE: CLEAN UP, run scripts to clean up after each "it"
  })
 
  xit('Should return one when test true',() => {
    expect(filter(users, ({test}) => test)).toEqual(['name1'])
  })
  xit('Should return two names when active true',() => {
    expect(filter(users, ({active}) => active)).toEqual(['name1'])
  })
  xit('Should return no names when no keys',() => {
    expect(filter(users, ({invalid}) => invalid)).toEqual([])
  })
})