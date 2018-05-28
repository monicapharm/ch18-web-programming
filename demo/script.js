'use strict';
//`d3` has already been "imported"

var heading = d3.select("h1");
console.log(heading.html());

var element = d3.select("#lorem");
console.log(element.html());

var strong =  element.select("strong")
console.log(strong .html());

