import difference from '@/difference.js'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
describe('==== difference ====', () => {
  
  it('Should return one difference',() => {
    expect(difference([1,2],[1,3])).toEqual([2])
  })

  it('Should return two difference values',() => {
    expect(difference([1,2,3,4],[3,4])).toEqual([1,2])
  })

  it('Should return no difference values',() => {
    expect(difference([1,2],[1,2])).toEqual([])
  })
  // neg cases
  it('Should return all values',() => {
    expect(difference([1,2],[3,4])).toEqual([1,2])
  })

  it('Should handle undefined',() => {
    expect(difference([1,undefined],[3,4])).toEqual([1,undefined])
  })

  it('Should handle empty string',() => {
    expect(difference([1,''],[3,4])).toEqual([1,''])
  })

  it('Should handle null',() => {
    expect(difference([1,null],[3,4])).toEqual([1,null])
  })

  it('Should handle NaN',() => {
    expect(difference([1,NaN],[3,4])).toEqual([1,NaN])
  })

  it('Should handle function reference inclusion',() => {
    const testFunction = () => {}
    expect(difference([1,testFunction],[3,4])).toEqual([1,testFunction])
  })

  it('Should handle function reference filtering',() => {
    const testFunction = () => {}
    expect(difference([1,testFunction],[testFunction,3,4])).toEqual([1])
  })

  it('Should handle object reference inclusion',() => {
    const testObj = {}
    expect(difference([1,testObj],[3,4])).toEqual([1,testObj])
  })

  it('Should handle object reference filtering',() => {
    const testObj = {}
    expect(difference([1,testObj],[testObj,3,4])).toEqual([1])
  })

  it('Should handle object reference filtering',() => {
    const testObj = {}
    expect(difference([1,testObj],[testObj,3,4])).toEqual([1])
  })

  // as per [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) standard
  // -0 === +0
  it('Should handle -0 vs +0 filtering',() => {
    expect(difference([1,0],[-0])).toEqual([1])
  })

  // Related issue: https://github.com/TNieminen/ohjelmistojen-testaus/issues/20
  xit('Should handle -0 inclusion',() => {
    expect(difference([1,-0],[3,4])).toEqual([1,-0])
  })

})