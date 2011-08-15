$(function() {
    
    var paper = Raphael(document.getElementById("board"), 840, 840);
    
    // Main circle path
    var circle = paper.circle(420, 420, 400).attr({
	fill: "white",
	stroke: "red",
    });

    // Quadrant lines
    var xaxis = paper.path("M420 0L420 840").attr({
	stroke: "black",
	"stroke-width": 3
    });
    var yaxis = xaxis.clone().rotate(90);
    
})