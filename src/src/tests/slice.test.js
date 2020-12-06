import slice from '@/slice.js'

describe('==== slice ====', () => {

  it('Should provide correct values when slicing with one parameter',() => {
    expect(slice([1,2,3,4], 1)).toEqual([2,3,4])
  })

  it('Should provide correct values when slicing 2 parameters',() => {
    expect(slice([1,2,3,4], 1,3)).toEqual([1,4])
  })

  it('Should provide correct values when slicing with one negative parameter',() => {
    expect(slice([1,2,3,4], -1)).toEqual([4])
  })

  it('Should provide correct values when slicing 2 negative parameters',() => {
    expect(slice([1,2,3,4], -3,-1)).toEqual([1,4])
  })
  it('Should provide empty list when slicing all elements',() => {
    expect(slice([1,2], 2)).toEqual([])
  })
})