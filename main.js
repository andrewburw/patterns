

let dots = [];
let dotNameArr = [];
let lineNameArr = [];
let connectCount = -1;



function generateConnectCount() {
  for (let i = 0; i < dotNameArr.length-1; i++) {
      for (let j = i + 1; j < dotNameArr.length; j++) {
      connectCount++

    }
   }
}
function circleCreator(n){
generateDotsLineHTML(n,n);
 let randOm = false;
let rand = () => {return  Math.floor(Math.random() * 100)}

let rand2 = () => {
  let retu = 0;
 if (randOm) {
   randOm = false
   retu = -2 +  Math.floor(Math.random() *10)
 } else {

     randOm = true
   retu = 2 + Math.floor(Math.random() *10)
 }

 return  retu;
  //return  randOm ? -2  randOm = true : 2

}
    while (n >= 0) {


      dots.push({
        x:rand(),
        y:rand(),
        dx:rand2(),
        dy:rand2(),
        id:n });
      n--;
    }

}

function generateDotsLineHTML(g,l){

let clEements = [];

for (let i = 0; i <= g; i++) {

  clEements.push('<circle id='+ "k" + i +' cx="50" cy="50" r="2" stroke="black" stroke-width="0" fill="white" />')
  dotNameArr.push('#k'+ i)
}

generateConnectCount()

for (let i = 0  ; i <= connectCount; i++) {



  clEements.push('<line class="line" id='+ "l"+ i +' x1="50" y1="50" x2="100" y2="100" style="stroke:white;stroke-width:1" />')
  lineNameArr.push('#l'+ i)
}

  $('#app')
     .htmL('<svg height="800" width="800" viewBox="0 0 800 800"> '+ clEements.join("") +'</svg>')

}


function changeCirclePosition(elm,id) {




  if(elm.x + elm.dx > 800 - 1 || elm.x + elm.dx < 1) {
      elm.dx = -elm.dx;
  }

  if(elm.y + elm.dy > 800 - 1 || elm.y + elm.dy < 1) {
    elm.dy = -elm.dy;
  }


  elm.x += elm.dx;
  elm.y += elm.dy;

 $(id).attr("cx",elm.x )
 $(id).attr("cy",elm.y )


}




function changeLine(idCircle1,idCircle2,idLine){
  let krug1_cx = $(idCircle1).attr("cx")
  let krug1_cy = $(idCircle1).attr("cy")
  let krug2_cx = $(idCircle2).attr("cx")
  let krug2_cy = $(idCircle2).attr("cy")


 let line = $(idLine).elems[0]




 let len = dist(line.x1.baseVal.value, line.x2.baseVal.value,
                line.y1.baseVal.value, line.y2.baseVal.value);


  function dist(x1, x2, y1, y2){
  	return Math.sqrt( (x2-=x1)*x2 + (y2-=y1)*y2 );
  }

if (len > 200) {

$(idLine).hide();


} else {

 $(idLine).show();

}

$(idLine).attr("x1",krug1_cx)
$(idLine).attr("y1",krug1_cy)
$(idLine).attr("x2",krug2_cx)
$(idLine).attr("y2",krug2_cy)

}

function run(){

dots.forEach(function(a,i){
  changeCirclePosition(dots[i],'#k'+ i)
})

let p = -1;



for (let i = 0; i < dotNameArr.length-1; i++) {


  for (let j = i + 1; j < dotNameArr.length; j++) {
    p++


     changeLine('#k'+ i,'#k'+ j,'#l' + p )
         //console.log('#k'+ i +' #k'+j+' #l' + p );
  }
}


}


circleCreator(50)
setInterval(run, 150);
