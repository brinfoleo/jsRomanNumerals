const toRoman = require('./jsRomanNumerals').toRoman;
const toNumeral = require('./jsRomanNumerals').toNumeral;

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
test('convert number 129 to Roman Numeral CXXIX', () => {
    expect(toRoman(129)).toBe('CXXIX');
});

test('convert number 500 to Roman Numeral D', () => {
    expect(toRoman(500)).toBe('D');
});
test('convert number 100 to Roman Numeral C', () => {
    expect(toRoman(100)).toBe('C');
});

//Convert Roman to Numeral

test("checks that I returns 1", () => {
    expect(toNumeral("I")).toBe(1);
});

test("checks that II returns 2", () => {
    expect(toNumeral("II")).toBe(2);
});

test("checks that IV returns 4", () => {
    expect(toNumeral("IV")).toBe(4);
});

test("checks that IX returns 9", () => {
    expect(toNumeral("IX")).toBe(9);
});

test("checks that IIII returns null", () => {
    expect(toNumeral("IIII")).toBe(null);
});

test("checks that XX returns 20", () => {
    expect(toNumeral("XX")).toBe(20);
});

test("checks that XL returns 40", () => {
    expect(toNumeral("XL")).toBe(40);
});

test("checks that LL returns null", () => {
    expect(toNumeral("LL")).toBe(null);
});

test("checks that CD returns 400", () => {
    expect(toNumeral("CD")).toBe(400);
});

test("checks that DD returns null", () => {
    expect(toNumeral("DD")).toBe(null);
});

test("checks that MM returns 2000", () => {
    expect(toNumeral("MM")).toBe(2000);
});

test("checks that MCMLXXXVII returns 1987", () => {
    expect(toNumeral("MCMLXXXVII")).toBe(1987);
});
test("checks that CMXLIX returns CMXLIX", () => {
    expect(toNumeral("CMXLIX")).toBe(949);
});