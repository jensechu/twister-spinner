$(function() {
    
    var paper = Raphael(document.getElementById("board"), 840, 840);
    
    // Main circle path
    var circle = paper.circle(420, 420, 400).attr({
	//fill: "white",
	//stroke: "red",
    });

    // Spots
    var spot = paper.path("M0 420L840 420").attr({
	fill: "white",
	stroke: "green",
    });
    
    //Spot rotation
    function spot_rotator(set){
	i = 0
	while (i<90) {
	    set.push(
		spot.clone().rotate(i)
	    );
	    i += 22.5;
	}
	return set;
    }

    var red_spots = spot_rotator(paper.set()).attr({stroke: "red", "stroke-width": 10});

    // Quadrant lines
    var xaxis = paper.path("M420 0L420 840").attr({
	stroke: "black",
	"stroke-width": 3
    });
    var yaxis = xaxis.clone().rotate(90);
})