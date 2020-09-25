describe('==== Jest Sanity Tests ====', () => {
  describe('=== Boolean Tests ===', () => {
    it('Should pass positive test for true === true', () => {
      return expect(true).toEqual(true)
    })
    it('Should pass negative test for true === false', () => {
      return expect(true).not.toEqual(false)
    })
  })
  describe('=== Completion types ===', () => {
    it('Return Expect', () => {
      return expect(true).toEqual(true)
    })
    it('Use Done', (done) => {
      done()
    })
    it('Use Async', async() => {
      await Promise.resolve()
    })
  })
})