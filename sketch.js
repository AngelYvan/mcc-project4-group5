function setup () {
var width = 250;
 var height = 200;
createCanvas (width , height ) ;
 background (0) ;
for (var x = 0; x < width; x += width / 10) {
for (var y = 0; y < height; y += height / 5) {
stroke (125 , 125 , 125) ;
strokeWeight (1) ;
line (x, 0, x, height );
line (0 , y, width , y);
}
}
var data = [];
for ( let i = 0; i < 12; i ++) {
var x = Math.floor ( Math.random () * height );
var y = Math.floor ( Math.random () * height );
data.push ([x, y]) ;
fill (255 , 255 , 255) ;
circle (x, height - y, 7) ; // 200 -y para q se dibuje apropiadamente
textSize (8) ;
text (x + ',' + y, x + 5, height - y);// 200 -y para q se dibuje apropiadamente
}
var root = build_kdtree ( data ) ;
console.log ( root );
}
k = 2;

function distanceSquared ( point1 , point2 ){
var distance = 0;
for (var i = 0; i < k; i ++)
distance += Math.pow (( point1 [i] - point2 [i]) , 2) ;
return Math.sqrt ( distance );
 }

 function closest_point_brute_force ( points , point ) {}
 function naive_closest_point (node , point , depth = 0, best = null ) {}
