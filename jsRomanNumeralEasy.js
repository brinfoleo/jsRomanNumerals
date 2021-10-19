const toArabic=require('roman-numerals').toArabic;
const toRoman=require('roman-numerals').toRoman;


function isNuneric(str) {
    for (var c = 0; c < str.length; c++) {
        var chr = str.charAt(c);
        if (chr != '0' & chr != '1' & chr != '2' & chr != '3' & chr != '4' & chr != '5' & chr != '6' & chr != '7' & chr != '8' & chr != '9')
            return false
    }
    return true
}

function get(n) {

    if (!isNuneric(n)) {
       
        return toArabic(n);
    }
    else {
        return toRoman(n);
    }
}
module.exports = get;