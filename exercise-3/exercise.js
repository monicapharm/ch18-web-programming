"use strict";
//d3 has already been "imported"

//Add an event listener to the image so that when the mouse enters ('mouseenter')
//its attribute `src` changes to 'img/surprised.png'

var image = d3.select("#face");
image.on("mouseenter", function() {
  image.attr("src", "img/surprised.png");
});

//Add an event listener to the image so that when the mouse leaves ('mouseleave')
//its source changes back to `img/happy.png'
image.on("mouseleave", function() {
  image.attr("src", "img/happy.png");
});

//Add an event listener to the `#purplize` button to respond to user clicks.
//When the user clicks the button, add the CSS style class `purple` to the
//`<body>` element. Use the `classed()` method:
//https://github.com/d3/d3-selection#selection_classed

var button = d3.select("#purplize");
button.on("click", function() {
  var body = d3.select("body");
  body.classed("purple", true);
});

//Add an event listener to the `#addButton` so that when it is clicked,
//the text inside the <input> element is added as a NEW <li> item to the list.
//NOTE: You can get what value is typed into the <input> using the `property()`
//method, passing it 'value' as the property to access.

var addButton = d3.select("#addButton");
addButton.on("click", function() {
  var input = d3.select("input").property("value");
  var listItem = d3.select("ul").append("li");
  listItem.text(input);
  listItem.on("click", function() {
    listItem.remove();
  });
});

//Bonus: In the above event callback, add an event listener to EACH new <li>
//so that when that item is clicked, it is removed from the page.
//Hint: Don't overthink it!
//Hint: If you create a variable inside a function, that variable will remain
//available by unique to any OTHER functions defined at the same scope. This
//is called a "closure".
