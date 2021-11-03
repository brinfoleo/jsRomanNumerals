function toRoman(num) {
    const numRoman=[['','I','II','III','IV','V','VI','VII','VIII','IX'],
                    ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC']]
    let n=[...num.toString()];
    let newRoman='';
    for (i=0;i<n.length;i++){
        newRoman= numRoman[i][n[n.length-(i+1)]] + newRoman;
    }
    return newRoman;
  }
  module.exports = toRoman;