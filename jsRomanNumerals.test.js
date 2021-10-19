const getConvert = require('./jsRomanNumerals');
const getConvertEasy = require('./jsRomanNumeralEasy');

test('Convert Roman Numeral to Arabic Number', () => {
    expect(getConvert("X")).toBe(10);
    expect(getConvert("XXXVII")).toBe(37);
    expect(getConvert("LXXIII")).toBe(73);
});
test('Convert Arabic Number to Roman Numeral', () => {
    expect(getConvert(10)).toBe("X");
    expect(getConvert(72)).toBe("LXXII");
    expect(getConvert(41)).toBe("XLI");
});


test('Easy Convert Roman Numeral to Arabic Number', () => {
    expect(getConvertEasy("X")).toBe(10);
    expect(getConvertEasy("XXXVII")).toBe(37);
    expect(getConvertEasy("LXXIII")).toBe(73);
});
test(' Easy Convert Arabic Number to Roman Numeral', () => {
    expect(getConvertEasy(10)).toBe("X");
    expect(getConvertEasy(72)).toBe("LXXII");
    expect(getConvertEasy(41)).toBe("XLI");
});