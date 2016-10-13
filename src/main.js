/**
 * Created by Oleg cherniy on 12.10.2016.
 */
var table = require("./table"),
    keynumber = require("./keynumber"),
    multiplyDetails = require("./multiplyDetails");

var aObj = document.getElementById('a'),
    bObj = document.getElementById('b');

aObj.addEventListener("keypress", keynumber);
bObj.addEventListener("keypress", keynumber);

document.getElementById('multiply').addEventListener("click", function(event) {
    var a = aObj.value,
        b = bObj.value,
        multiplyResult = document.getElementById('multiplyResult'),
        sum,width;

    if (a>0 && b>0) {
        sum = a*b;
        width = (sum.toString().length)+1;

        var header  = document.createElement("table"),
            calcmap = document.createElement("table"),
            result  = document.createElement("table");

        result.className = 'last';
        while (multiplyResult.hasChildNodes()) {
            multiplyResult.removeChild(multiplyResult.lastChild);
        }

        multiplyResult.appendChild(header);
        multiplyResult.appendChild(calcmap);
        multiplyResult.appendChild(result);
        table(header,[a,b],width);
        table(calcmap,multiplyDetails(a,b),width);
        table(result,[sum],width);
        //console.log(header.rows[0].cells[0].innerText = '2');
    } else {
        multiplyResult.appendChild(
            document.createTextNode('множники мають бути > 0')
        );
    }

});

/*
 <table id="header" />
 <table id="calcmap" />
 <table id="result" class="last" />

 */