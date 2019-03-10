const total = require('./integrationTest');

test('add from integration test', () => {
    const value = total.add(2, 4);
    expect(value).toBe(6);
});

test('totalAmount from intergrationTest', () => {
    expect(total.totalAmount(10, 20)).toBe('$30');
});