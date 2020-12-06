import at from '@/at.js'

describe('==== at ====', () => {

  it('Should return [1,2] if inputs are {"a": 1, "b": 2} and ["a", "b"] ',() => {
    const obj = {'a': 1, 'b': 2}
    expect(at(obj, ['a','b'])).toEqual([1,2])
  })

  it('Should return [3,4] if inputs are { "a": [{ "b": { c": 3 } }, 4] } and ["a[0].b.c", "a[1]"]',() => {
    const obj = {'a': [{'b': {'c': 3}}, 4]}
    expect(at(obj, ['a[0].b.c', 'a[1]'])).toEqual([3,4])
  })

  it('Should not break from non-relevant variables', () => {
    const obj = {'a': [{'non-relevant':{'test':2},'b': {'c': {'d':2}}}, 1]}
    expect(at(obj, ['a[0].b.c.d', 'a[1]'])).toEqual([2,1])
  })

  it('Should handle deeply nested objects', () => {
    const obj = {'a': [{'b': {'c': {'d':{'e':{'f':{'g':2}}}}}}, 1]}
    expect(at(obj, ['a[0].b.c.d.e.f.g', 'a[1]'])).toEqual([2,1])
  })

  it('Should return undefined if selected key is not found',() => {
    const obj = {'a': [{'b': {'not-c': 3}}, 4]}
    expect(at(obj, ['a[0].b.c', 'a[1]'])).toEqual([undefined,4])
  })

  // TODO: No input validation which can lead to unintended results, currently returns an empty array
  xit('Should throw if input object is not a valid object',() => {
    expect(() => at(undefined, [])).toThrow()
  })

  // TODO: No input validation which can lead to unintended results, currently returns an empty array
  xit('Should throw if input array is not a valid array',() => {
    expect(() => at({}, undefined)).toThrow()
  })  

})