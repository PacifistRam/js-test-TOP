
const capitalize = require('./capitalize')

test('capitalize first letter', () => {
    expect(capitalize('name')).toBe('Name');
});