/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Oleg cherniy on 12.10.2016.
	 */
	var table = __webpack_require__(1),
	    keynumber = __webpack_require__(2),
	    multiplyDetails = __webpack_require__(3);

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
	        width = sum.toString().length;

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

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by Oleg cherniy on 12.10.2016.
	 */
	module.exports = function validate(evt) {
	    var theEvent = evt || window.event;
	    var key = theEvent.keyCode || theEvent.which;
	    key = String.fromCharCode( key );
	    var regex = /[0-9]/;
	    if( !regex.test(key) ) {
	        theEvent.returnValue = false;
	        if(theEvent.preventDefault) theEvent.preventDefault();
	    }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);