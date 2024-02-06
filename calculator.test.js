const calculator  =  require('./calculator');

test('add function', () => {
    expect(calculator.add(1,2)).toBe(3);
});
test('subtract function', () => {
    expect(calculator.subtract(1,2)).toBe(-1);
});
test('multiply function', () => {
    expect(calculator.multiply(1,2)).toBe(2);
});
test('divide function', () => {
    expect(calculator.divide(4,2)).toBe(2);
});
test.skip('divide function', () => {
    expect(calculator.divide(1,0)).toBe(error);
});