import castArray from '@/castArray.js'

// TODO: because we use spread operator for array casting we won't be able to use this library in
// IE and effectively the library support needs ES6 support
// https://kangax.github.io/compat-table/es6/
// https://caniuse.com/?search=spread

describe('==== castArray ====', () => {

  it('Should return [10] with input 10',() => {
    expect(castArray(10)).toEqual([10])
  })

  it('Should return ["test"] with input "test"',() => {
    expect(castArray('test')).toEqual(['test'])
  })

  it('Should return [null] with input null',() => {
    expect(castArray(null)).toEqual([null])
  })

  it('Should return [{test:true}] with input {test:true}',() => {
    expect(castArray({test:true})).toEqual([{test:true}])
  })

  it('Should return [()=>console.log(true)] with input ()=>console.log(true)',() => {
    const testFunction = () => console.log(true)
    expect(castArray(testFunction)).toEqual([testFunction])
  })

  it('Should return cast array of only first argument',() => {
    expect(castArray({test:true},true)).toEqual([{test:true}])
  })

  it('Should return [undefined] with no input',() => {
    expect(castArray()).toEqual([undefined])
  })

})