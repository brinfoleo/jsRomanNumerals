const toRoman = require('./jsRomanNumerals');

test('convert number 1 to Roman Numeral I', () => {
    expect(toRoman(1)).toBe('I');
});
test('convert number 9 to Roman Numeral IX', () => {
    expect(toRoman(9)).toBe('IX');
});
test('convert number 5 to Roman Numeral V', () => {
    expect(toRoman(5)).toBe('V');
});
test('convert number 10 to Roman Numeral X', () => {
    expect(toRoman(10)).toBe('X');
});
test('convert number 29 to Roman Numeral XXIX', () => {
    expect(toRoman(29)).toBe('XXIX');
});