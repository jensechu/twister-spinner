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
	while (i<360) {
	    set.push(
		spot.clone().rotate(i)
	    );
            var x = 420 + Math.cos(Raphael.rad(i)) * 340;
            var y = 420 + Math.sin(Raphael.rad(i)) * 340;
            set.push(paper.circle(x, y, 60))
	    i += 22.5;
	}
	return set;
    }

    var red_spots = spot_rotator(paper.set()).attr({stroke: "red", "stroke-width": 2});
    var blue_spots = spot_rotator(paper.set()).attr({stroke: "blue", "stroke-width": 1}).rotate(11.25);

    // Quadrant lines
    var xaxis = paper.path("M420, 0L420, 840").attr({
	stroke: "black",
	"stroke-width": 3
    });
    var yaxis = xaxis.clone().rotate(90);
})