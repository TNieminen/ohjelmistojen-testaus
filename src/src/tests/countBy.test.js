import countBy from '@/countBy.js'

describe('==== countBy ====', () => {
     
  const users = [
    {'user': 'name1', 'val': true},
    {'user': 'name2', 'val': true},
    {'user': 'name3', 'val': false}]
  
  // TODO: Returns incorrectly {false:0, true:1}
  xit('Should return correct amount of values in input',() => {
    let ans = {'true':2,'false':1}
    expect(countBy(users,value => value.val)).toEqual(ans)
  })

  // TODO: Returns incorrectly {name1:0, name2:0, name3:0}
  xit('Should return correct amount of names in input',() => {
    let ans = {'name1':1,'name2':1,'name3':1}
    expect(countBy(users,value => value.user)).toEqual(ans)
  })

  // neg cases
  it('Should return empty object with empty input',() => {
    expect(countBy({},value => value.val)).toEqual({})
  })

  xit('Should return empty object if no iteratees have a matching value',() => {
    expect(countBy(users,value => value.invalid)).toEqual({})
  })
})