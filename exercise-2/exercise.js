'use strict';
//`d3` has already been "imported"

//Use a d3 selector to select the element with an id of `circleA`
//Use JavaScript to give this element a `fill` attribute of '#5f5f5f'
d3.select("#circleA").attr('fill', '#5f5f5f');

//Give the element with an id of `circleB` the following attributes:
//  cx:375, cy:130, fill:'#5f5f5f'
//Use method chaining!
d3.select("#circleB")
    .attr('fill','#5f5f5f')
    .attr('cx', 375)
    .attr('cy', 130);

//Give all <path> elements a `stroke` attribute of `#5f5f5f` and
//a `stroke-width` of `8` (pixels)
d3.select("path")
    .attr('stroke',  `#5f5f5f`)
    .attr('stroke-width', 8);
    
//Give all <circle> elements in the <g> with id of `group1` a fill color of 'white'
//Hint: first select the group, then select all the circles _inside_ that group.
 
var group1 = d3.select("#group1");
group1.selectAll('circle').attr('fill', 'white');

//Give all of the <circle> elements inside the `<g>` inside of `group1`
//a fill color of '#573d29'
var innerGroup = group1.select("g");
innerGroup.selectAll('circle').attr('fill', '#573d29');

//Give the element with id `circleC` a style opacity of `1`
d3.select('#circleC').style('opacity', 1);  // style

//Add a new <circle> element to the <svg> image with the following attributes:
//  cx:300, cy:210, r:50
d3.select('svg').append('circle')
    .attr('cx', 300)
    .attr('cy', 210)
    .attr('r', 50);

//Remove ALL of the <rect> elements from the <svg> image.
d3.selectAll('rect').remove();

//Use the `raise()` method to move the element with id `pathA` to become the
//last child of its parent (and so be "on top").
//Also change its `stroke` attribute to be `'none'` (removing the stroke).
d3.select('#pathA').raise().attr('stoke', 'none');