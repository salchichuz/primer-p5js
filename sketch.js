//obra inspirada de "el hombre en el paisaje" de Kazimir Severinovich.

let button

function setup() {

  createCanvas(500, 450);
background(0,100,150);
  button=createButton('');
  button.position(190,50)
  button.mousePressed(changeBG);
}

function changeBG() { 
  let val = bakcground(255);
  background(val);
}
  
  
  
  
  function draw(){


//suelo
  fill(255,147,00)
  rect(0,225,500,225) 
  
  //edificio
  fill(260,130,00)
  bezier(5,225,225,00,0,00,10,1)
  
  //ventanas
  fill(100,50,0)
  rect(15,30,3,5)
  rect(30,30,3,5)
  rect(45,30,3,5)
  rect(60,30,3,5)
  rect(24,50,3,5)
  rect(38,50,3,5)
  rect(55,50,3,5)
  rect(70,50,3,5)
  rect(15,75,3,5)
  rect(30,75,3,5)
  rect(45,75,3,5)
  rect(60,75,3,5)
  rect(75,75,3,5)
  rect(22,95,3,5)
  rect(37,95,3,5)
  rect(52,95,3,5)
  rect(69,95,3,5)
  rect(15,130,3,5)
  rect(30,130,3,5)
  rect(45,130,3,5)
  rect(60,130,3,5)
  rect(24,150,3,5)
  rect(38,150,3,5)
  rect(55,150,3,5)
  rect(15,185,3,5)
  rect(30,185,3,5)
  rect(12,200,3,5)
  
  
  
   //corniza
  fill(156,10,00)
  rect(8,65,95,5)
 rect(8,110,82,5)
  rect(6,170,46,5)
  
  //fabrica
  fill(100)
  quad(400,110,400,225,450,225,450,110)
  triangle(400,110,300,110,400,130)
  triangle(450,110,480,140,450,160)
  triangle(450,160,480,180,450,200)
  line(425,110,425,60)
  line(450,160,480,160)
  
  //antena fabrica
  fill(150,0,0)
  circle(425,60,30)
  stroke(1)
  circle(425,60,26)
  circle(425,60,22)
  circle(425,60,18)
  circle(425,60,14)
  circle(425,60,10)
  fill(0,60,0)
  circle(425,60,5)
  circle(480,160,20)
  stroke(1)
  circle(480,160,15)
  circle(480,160,10)
  fill(150,0,0)
  circle(480,160,5)
  
  //ventanas de fabrica
  fill(255,255,0)
  rect(410,115,9,9)
  rect(435,135,9,9)
  rect(410,155,9,9)
  rect(435,175,9,9)
  rect(410,195,9,9)
  
  //humo fabrica
  fill(225)
  circle(300,50,50)
  circle(285,50,50)
  ellipse(275,50,50,30)
  ellipse(295,70,30,50)
  ellipse(298,89,20,30)
  ellipse(298,103,10,14)
  
  //persona
  fill(115,160,0)
  triangle(160,190,190,300,215,190)
  fill(0,0,0)
  triangle(190,300,80,250,170,260)
  
  //puntos
  point(250,360)
  point(150,300)
  point(390,90)
  point(300,80)
  point(290,240)
  point(360,400)
  point(400,320)
  point(100,400)
  
  console.log("X:"+ mouseX +" Y:"+ mouseY);
  
}
