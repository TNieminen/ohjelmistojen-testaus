import countBy from '@/countBy.js'

describe('==== countBy ====', () => {
     
  const users = [
    {'user': 'name1', 'val': true},
    {'user': 'name2', 'val': true},
    {'user': 'name3', 'val': false}
  ]
  
  // TODO: Returns incorrectly {false:0, true:1}
  it('Should return correct amount of values in input',() => {
    let ans = {'true':2,'false':1}
    expect(countBy(users,value => value.val)).toEqual(ans)
  })

  // TODO: Returns incorrectly {name1:0, name2:0, name3:0}
  it('Should return correct amount of names in input',() => {
    let ans = {'name1':1,'name2':1,'name3':1}
    expect(countBy(users,value => value.user)).toEqual(ans)
  })

  it('Should call the provided callback as many times as there are values in the array', () => {
    const mockFunc = jest.fn()
    countBy(users,mockFunc)
    expect(mockFunc).toHaveBeenCalledTimes(users.length)
  })

  // neg cases
  it('Should return empty object with empty input',() => {
    expect(countBy({},value => value.val)).toEqual({})
  })

  it('Should return empty object if no iteratees have a matching value',() => {
    expect(countBy(users,value => value.invalid)).toEqual({})
  })
})