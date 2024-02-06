const caesarCipher  = require('./caesarCipher')

test('caesarCipher', () => {
    expect(caesarCipher('abc',3)).toBe('def');
})
test.skip('caesarCipher', () => {
    expect(caesarCipher('Hello World',5)).toBe('def');
})
