/**
 * Created by Oleg cherniy on 12.10.2016.
 */

//pads right
var strAdd = function(str, padString,length) {
    for (var i=0;i<length;i++) {
        str = str + padString;
    }
    return str;
};

module.exports = function (a,b) {
    var result = [],
        add = b.toString().length-1;
    for (var letter in b.toString()) {
        result.push(strAdd(a*Number(b[letter]).toString(),' ',add));
        add--;
    }
    return result.reverse();
};