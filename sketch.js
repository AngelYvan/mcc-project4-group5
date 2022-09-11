function setup() {
    var width = 250;
    var height = 200;
    let kdTreeCanvas = createCanvas(width, height);
    kdTreeCanvas.parent("KdTreeCanvas");
    background(0);
    for (var x = 0; x < width; x += width / 10) {
        for (var y = 0; y < height; y += height / 5) {
            stroke(125, 125, 125);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }
    // var data = [];
    // for (let i = 0; i < 12; i++) {
    //     var x = Math.floor(Math.random() * height);
    //     var y = Math.floor(Math.random() * height);
    //     data.push([x, y]);
    //     fill(255, 255, 255);
    //     circle(x, height - y, 7); // 200 -y para q se dibuje apropiadamente
    //     textSize(8);
    //     text(x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
    // }
    var data = [
        [40 ,70] ,
        [70 ,130] ,
        [90 ,40] ,
        [110 , 100] ,
        [140 ,110] ,
        [160 , 100]
    ];

    var data = [
        [100 ,100] ,
        [40 ,70] ,
        [90 ,40] ,
        [70 , 130] ,
        [175 ,100] ,
        [150 , 30],
        [140, 110],
    ];
    for (let i = 0; i < data.length; i++) {
        fill(255, 255, 255);
        circle(data[i][0], height - data[i][1], 7); // 200 -y para q se dibuje apropiadamente
        textSize(8);
        text(data[i][0] + ',' + data[i][1], data[i][0] + 5, height - data[i][1]);// 200 -y para q se dibuje apropiadamente
    }
    
    var point = [140 ,90]; // query
    fill('red');
    circle(point[0], height - point[1], 7); // 200 -y para q se dibuje apropiadamente
    textSize(8);
    text(point[0] + ',' + point[1], point[0] + 5, height - point[1]);

    var root = build_kdtree(data);
    console.log(root);
    console.log(generate_dot(root));

    console.log(closest_point_brute_force( data , point ));
    console.log(naive_closest_point ( root , point ));
    console.log(closest_point ( root , point ).point);
    KNN(data, point, 2);

    // var found = [];
	// var pon = [140, 100];
	// var radio = 90;

    // range_query_circle(root,pon,radio,found);
    // console.log(found);
	// fill(0, 0, 255, 40);
	// circle(pon[0], height - pon[1], radio * 2);
    // for ( let i = 0; i < found.length; i ++) {
    //     var x = found[i][0];
    //     var y = found[i][1];
    //     fill (0 , 0 , 255);
    //     circle (x, height - y, 7); 
    // }
	

	stroke(0,0,255);
    rectMode(CENTER);
    fill(0, 0, 255, 40);
    var rectWidth = 100
    var rectHeight = 100

    let center = [140,100];
    rect(center[0], center[1], rectWidth, rectHeight);
    var xMin = center[0] - rectWidth/2;
    var yMin = height - (center[1] + rectHeight/2);
    var xMax = center[0] + rectWidth/2;
    var yMax = height - (center[1] - rectHeight/2);

    let found = []
    var rectangle = [[xMin, xMax], [yMin, yMax]]
    range_query_rect(root, rectangle, found)
    console.log(found)
    for ( let i = 0; i < found.length; i ++) {
        var x = found[i][0];
        var y = found[i][1];
        fill (0 , 0 , 255);
        circle (x, height - y, 7); 
    }
}
