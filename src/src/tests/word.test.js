import word from '@/word.js'

describe('==== word ====', () => {

  it('Should provide correct values when normal sentence',() => {
    expect(word('word1 word2 word3')).toEqual(['word1','word2','word3'])
  })

  it('Should provide correct values when puncutation in sentence',() => {
    expect(word('word1, word2. word3')).toEqual(['word1','word2','word3'])
  })

  it('Should provide correct values when extra whitespace in sentence',() => {
    expect(word('word1     word2   word3')).toEqual(['word1','word2','word3'])
  })

  it('Should provide correct values when sentence with custom regex',() => {
    expect(word('word1, word2, & word3'),/[^, ]+/g).toEqual(['word1','word2','word3'])
  })

})