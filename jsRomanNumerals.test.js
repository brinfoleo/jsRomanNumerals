const getConvert = require('./jsRomanNumerals');
const getConvertEasy = require('./jsRomanNumeralEasy');

test('Convert Roman Numeral to Arabic Number', () => {
    expect(getConvert('XVII')).toBe(17);
  expect(getConvert('XX')).toBe(20);
  expect(getConvert('XIV')).toBe(14);
  expect(getConvert('XXV')).toBe(25);
  expect(getConvert('LI')).toBe(51);
  expect(getConvert('XL')).toBe(40);
  expect(getConvert('XXXVII')).toBe(37);
  expect(getConvert('LXII')).toBe(62);
  expect(getConvert('XLVI')).toBe(46);
  expect(getConvert('XC')).toBe(90);
  expect(getConvert('LXXIII')).toBe(73);
  expect(getConvert('C')).toBe(100);
  expect(getConvert('XXIX')).toBe(29);
  expect(getConvert('XCVII')).toBe(97);
});
test('Convert Arabic Number to Roman Numeral', () => {
    expect(getConvert('XVII')).toBe(17);
  expect(getConvert('XX')).toBe(20);
  expect(getConvert('XIV')).toBe(14);
  expect(getConvert('XXV')).toBe(25);
  expect(getConvert('LI')).toBe(51);
  expect(getConvert('XL')).toBe(40);
  expect(getConvert('XXXVII')).toBe(37);
  expect(getConvert('LXII')).toBe(62);
  expect(getConvert('XLVI')).toBe(46);
  expect(getConvert('XC')).toBe(90);
  expect(getConvert('LXXIII')).toBe(73);
  expect(getConvert('C')).toBe(100);
  expect(getConvert('XXIX')).toBe(29);
  expect(getConvert('XCVII')).toBe(97);
});


test('Easy Convert Roman Numeral to Arabic Number', () => {
    expect(getConvertEasy('XVII')).toBe(17);
    expect(getConvertEasy('XX')).toBe(20);
    expect(getConvertEasy('XIV')).toBe(14);
    expect(getConvertEasy('XXV')).toBe(25);
    expect(getConvertEasy('LI')).toBe(51);
    expect(getConvertEasy('XL')).toBe(40);
    expect(getConvertEasy('XXXVII')).toBe(37);
    expect(getConvertEasy('LXII')).toBe(62);
    expect(getConvertEasy('XLVI')).toBe(46);
    expect(getConvertEasy('XC')).toBe(90);
    expect(getConvertEasy('LXXIII')).toBe(73);
    expect(getConvertEasy('C')).toBe(100);
    expect(getConvertEasy('XXIX')).toBe(29);
    expect(getConvertEasy('XCVII')).toBe(97);
});
test(' Easy Convert Arabic Number to Roman Numeral', () => {
    expect(getConvertEasy('XVII')).toBe(17);
    expect(getConvertEasy('XX')).toBe(20);
    expect(getConvertEasy('XIV')).toBe(14);
    expect(getConvertEasy('XXV')).toBe(25);
    expect(getConvertEasy('LI')).toBe(51);
    expect(getConvertEasy('XL')).toBe(40);
    expect(getConvertEasy('XXXVII')).toBe(37);
    expect(getConvertEasy('LXII')).toBe(62);
    expect(getConvertEasy('XLVI')).toBe(46);
    expect(getConvertEasy('XC')).toBe(90);
    expect(getConvertEasy('LXXIII')).toBe(73);
    expect(getConvertEasy('C')).toBe(100);
    expect(getConvertEasy('XXIX')).toBe(29);
    expect(getConvertEasy('XCVII')).toBe(97);
});