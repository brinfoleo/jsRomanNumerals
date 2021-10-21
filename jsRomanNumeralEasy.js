const toRoman = require('roman-numerals').toRoman;
const toArabic = require('roman-numerals').toArabic;

function getConvert(n) {

    if (!isNaN(n)) {
        return toRoman(n);
    } else {
        let validate=[...n].reduce((acc, elem) => { 
            return [..."IVXLCDM"].includes(elem) == false ? false : acc; 
        }, true);
         
        if (!validate) return 'Only the letters IVXLCDM, please';
        return toArabic(n);
    }
}

module.exports = getConvert;