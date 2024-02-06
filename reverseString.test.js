const reverse =  require('./reverseString')

test('reverse the string', () => {
    expect(reverse('hello')).toBe('olleh');
});