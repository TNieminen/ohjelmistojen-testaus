import get from '@/get.js'

describe('==== get ====', () => {

  describe('=== Array ===', () => {
    it('Should handle one level of nesting',() => {
      const obj = {'a': 1}
      expect(get(obj, ['a'])).toEqual(1)
    })

    it('Should return strings',() => {
      const obj = {'a': 'test'}
      expect(get(obj, ['a'])).toEqual('test')
    })

    it('Should return objects',() => {
      const testObj = {}
      const obj = {'a': testObj}
      expect(get(obj, ['a'])).toEqual(testObj)
    })

    it('Should return functions',() => {
      const testFunc = () => {}
      const obj = {'a': testFunc}
      expect(get(obj, ['a'])).toEqual(testFunc)
    })
 
    it('Should return NaN',() => {
      const obj = {'a': NaN}
      expect(Number.isNaN(get(obj, ['a'])))
    })

    it('Should handle nested arrays',() => {
      const obj = {'a': [{'b': {'c': 3}}]}
      expect(get(obj, ['a',0,'b','c'])).toEqual(3)
    })

    it('Should handle deeply nested arrays',() => {
      const obj = {'a': [[{'b': {'c': 3}}]]}
      expect(get(obj, ['a',0,0,'b','c'])).toEqual(3)
    })

    it('Should return default if value is not found', () => {
      const obj = {'a': [{'b': {'d': 3}}]}
      expect(get(obj, ['a',0,'b','c'],'default')).toEqual('default')
    })

    it('Should not break from non-relevant variables',() => {
      const obj = {'a': [{'b': {'c': 3, d:2}}]}
      expect(get(obj, ['a',0,'b','c'])).toEqual(3)
    })
  
    it('Should handle deeply nested objects', () => {
      const obj = {'a': [{'b': {'c': {'d':{'e':{'f':{'g':2}}}}}}, 1]}
      expect(get(obj, ['a',0,'b','c','d','e','f','g'])).toEqual(2)
    })
  
    it('Should return undefined if selected key is not found and default value is not set',() => {
      const obj = {'a':1}
      expect(get(obj, ['b'])).toEqual(undefined)
    })
  
    it('Should throw if input object is not a valid object',() => {
      expect(get(undefined, ['a'])).toEqual(undefined)
    })
  
    it('Should throw if input array is not a valid array',() => {
      expect(get({}, undefined)).toEqual(undefined)
    })  
  })

  describe('=== String ===', () => {
    it('Should handle one level of nesting',() => {
      const obj = {'a': 1}
      expect(get(obj, 'a')).toEqual(1)
    })

    it('Should return strings',() => {
      const obj = {'a': 'test'}
      expect(get(obj, 'a')).toEqual('test')
    })

    it('Should return objects',() => {
      const testObj = {}
      const obj = {'a': testObj}
      expect(get(obj, 'a')).toEqual(testObj)
    })

    it('Should return functions',() => {
      const testFunc = () => {}
      const obj = {'a': testFunc}
      expect(get(obj, 'a')).toEqual(testFunc)
    })
 
    it('Should return NaN',() => {
      const obj = {'a': NaN}
      expect(Number.isNaN(get(obj, 'a')))
    })

    it('Should handle nested arrays',() => {
      const obj = {'a': [{'b': {'c': 3}}]}
      expect(get(obj, 'a[0].b.c')).toEqual(3)
    })

    it('Should handle deeply nested arrays',() => {
      const obj = {'a': [[{'b': {'c': 3}}]]}
      expect(get(obj, 'a[0][0].b.c')).toEqual(3)
    })

    it('Should return default if value is not found', () => {
      const obj = {'a': [{'b': {'d': 3}}]}
      expect(get(obj, 'a[0].b.c','default')).toEqual('default')
    })

    it('Should not break from non-relevant variables',() => {
      const obj = {'a': [{'b': {'c': 3, d:2}}]}
      expect(get(obj, 'a[0].b.c')).toEqual(3)
    })
  
    it('Should handle deeply nested objects', () => {
      const obj = {'a': [{'b': {'c': {'d':{'e':{'f':{'g':2}}}}}}, 1]}
      expect(get(obj, 'a[0].b.c.d.e.f.g')).toEqual(2)
    })
  
    it('Should return undefined if selected key is not found and default value is not set',() => {
      const obj = {'a':1}
      expect(get(obj, 'b')).toEqual(undefined)
    })
  
    it('Should throw if input object is not a valid object',() => {
      expect(get(undefined, 'a')).toEqual(undefined)
    })
  
    it('Should throw if input array is not a valid array',() => {
      expect(get({}, undefined)).toEqual(undefined)
    })  
  })


  


})