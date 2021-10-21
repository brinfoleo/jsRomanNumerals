
const levels = [({ 'i': 'I', 'v': 'V', 'x': 'X' }), ({ 'i': 'X', 'v': 'L', 'x': 'C' }), ({ 'i': 'C', 'v': 'D', 'x': 'M' })];

function calcDigit(d, l) {
    let str = '';
    if (l > 2) {
        str = '';
        for (let m = 1; m <= d * Math.pow(10, l - 3); m++) str += 'M';

    } else {

        switch (d) {
            case 1:
                str = levels[l].i
                break;

            case 2:
                str = levels[l].i + levels[l].i
                break;
            case 3:
                str = levels[l].i + levels[l].i + levels[l].i
                break;
            case 4:
                str = levels[l].i + levels[l].v
                break;
            case 5:
                str = levels[l].v;
                break;
            case 6:
                str = levels[l].v + levels[l].i;
                break;
            case 7:
                str = levels[l].v + levels[l].i + levels[l].i;
                break;
            case 8:
                str = levels[l].v + levels[l].i + levels[l].i + levels[l].i;
                break;
            case 9:
                str = levels[l].i + levels[l].x;
                break;
            default:
                str = '';
                break;
        }
    }
    return str;
}
function toRoman(n) {
    let r = '';
    n = n.toString();
    for (let c = 0; c < n.length; c++)
        r += calcDigit(eval(n.charAt(c)), n.length - c - 1);
    return r
}
function toNumeral(n) {
    let r = 0;
    let next = '';
    let prev = '';
    n = String(n);

    for (let c = 0; c < n.length; c++) {
        let chr = n.charAt(c).toLowerCase();

        if (c < n.length - 1)
            next = n.charAt(c + 1).toLowerCase()
        else
            next = '';

        if (c > 0)
            prev = n.charAt(c - 1).toLowerCase()
        else
            prev = '';

        if (chr == 'i') {
            if (next == 'v')
                r += 4
            else
                if (next == 'x')
                    r += 9
                else
                    r += 1;
            continue
        }

        if (chr == 'v') {
            if (prev != 'i')
                r += 5;
            continue
        }

        if (chr == 'x') {
            if (prev != 'i')
                if (next == 'l')
                    r += 40
                else
                    if (next == 'c')
                        r += 90
                    else
                        r += 10;
            continue
        }

        if (chr == 'l') {
            if (prev != 'x')
                r += 50;
            continue
        }

        if (chr == 'c') {
            if (prev != 'x')
                if (next == 'd')
                    r += 400
                else
                    if (next == 'm')
                        r += 900
                    else
                        r += 100;
            continue
        }

        if (chr == 'd') {
            if (prev != 'c')
                r += 500;
            continue
        }

        if (chr == 'm') {
            if (prev != 'c')
                r += 1000;
            continue

        }
    }

    return r

}
function getConvert(n) {

    if (!isNaN(n)) {
        return toRoman(n);
    } else {
        let validate = [...n].reduce((acc, elem) => {
            return [..."IVXLCDM"].includes(elem) == false ? false : acc;
        }, true);

        if (!validate) return 'Only the letters IVXLCDM, please';
        return toNumeral(n);
    }
}
module.exports = getConvert;