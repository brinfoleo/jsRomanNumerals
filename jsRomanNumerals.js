function toRoman(num) {
    const numRoman = [['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']]
    let n = [...num.toString()];
    let newRoman = '';
    for (i = 0; i < n.length; i++) {
        newRoman = numRoman[i][n[n.length - (i + 1)]] + newRoman;
    }
    return newRoman;
}

function toNumeral(nRoman) {
    if (nRoman.match(/^(?=[MDCLXVI])M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i) === null) return null;

    const romanNumeral = {
        I: 1, IV: 4, V: 5, IX: 9,
        X: 10, XL: 40, L: 50, XC: 90,
        C: 100, CD: 400, D: 500, CM: 900,
        M: 1000
    }
    const arrayRomanNumeral = [...nRoman];
    let sumNumber = 0;
    for (let i = 0; i < arrayRomanNumeral.length; i++) {
        let tmpRomanNumeral = arrayRomanNumeral[i] + arrayRomanNumeral[++i];
        if (romanNumeral[tmpRomanNumeral] == undefined) {
            tmpRomanNumeral = arrayRomanNumeral[--i];
        }
        sumNumber += romanNumeral[tmpRomanNumeral];
    }
    return sumNumber;
}

module.exports = { toRoman, toNumeral };