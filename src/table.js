/**
 * Created by Oleg cherniy on 12.10.2016.
 */

var lpad = function(str, padString, length) {
    while (str.length < length)
        str = padString + str;
    return str;
}

/**
 * Будує таблицю
 * @param {object} table
 * @param {number} lines
 * @param {number} width
 */
module.exports = function (table , linesArr , width) {
    lines = linesArr.length;
    width = width || 12;

    var tbody = document.createElement("tbody");
    for(var i = 0; i< lines; i++) {
        var tr = document.createElement("tr");
        var str = lpad(linesArr[i].toString(),' ',width);
        for (var j = 0; j< width; j++) {
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(str[j]));
            tr.appendChild(td);

        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    console.log(table);
};