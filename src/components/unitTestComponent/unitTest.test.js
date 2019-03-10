const unitTest = require('./unitTest');

test('add', () => {
    const value = unitTest.add(1,2);
    expect(value).toBe(3);
});

test('sub', () => {
    const value = unitTest.sub(13, 3);
    expect(value).toBe(10);
});
