$(function() {
    
    var paper = Raphael(document.getElementById("board"), 840, 840);
    
    // Main circle path
    var circle = paper.circle(420, 420, 400).attr({
	fill: "white",
	stroke: "red",
	"stroke-width": 20
    });
    
})