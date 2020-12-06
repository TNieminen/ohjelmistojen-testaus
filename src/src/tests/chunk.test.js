import chunk from '@/chunk.js'

describe('==== chunk ====', () => {
  
  xit('Should return [[1,2],[3,4]] with input [1,2,3,4] and 2',() => {
    expect(chunk([1,2,3,4],2)).toEqual([[1,2],[3,4]] )
  })

  xit('Should return [[1,2],[3,4],[5]] with input [1,2,3,4,5] and 2',() => {
    expect(chunk([1,2,3,4,5],2)).toEqual([[1,2],[3,4],[5]])
  })

  xit('Should return [[1,2,3],[4]] with input [1,2,3,4] and 3',() => {
    expect(chunk([1,2,3,4],3)).toEqual([[1,2,3],[4]] )
  })

  xit('Should return [[1,2,3],[4]] with input [1,2,3,4] and 3',() => {
    expect(chunk([1,2,3,4],3)).toEqual([[1,2,3],[4]] )
  })
  // neg cases
  it('Should return [] with empty input',() => {
    expect(chunk()).toEqual([])
  })

  // TODO: since we are not doing type checking we should throw errors on invalid inputs
  // or at least document the expected handling
  xit('Should throw an error if input is an object',() => {
    expect(() => chunk({})).toThrow()
  })

  xit('Should throw an error if input is a function',() => {
    expect(() => chunk(() => console.log(true))).toThrow()
  })

  xit('Should throw an error if input is an integer',() => {
    expect(() => chunk(2)).toThrow()
  })

  xit('Should throw an error if input is a string',() => {
    expect(() => chunk('')).toThrow()
  })

})