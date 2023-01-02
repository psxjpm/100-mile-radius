//TODO: 
/*Gradient percentages
Line endpoints (ellipse and pointy fading endpoint)
Concentric circles opacity*/

//Desired: 
/*Line textures
Make arcs not circles*/

//Post production:
/*Frame border 
Text
Date*/

let topcolor, bottomcolor;
function setup() {
  //To resize canvas see https://p5js.org/reference/#/p5/resizeCanvas
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);

  // Draw a square at location (30, 20) with a side size of 55.
  //Bottom color = Total tickets. Physical Audience (data from     Eventbrite) 61 orders / 90 tickets 
  topcolor = color(86, 193, 255);
  bottomcolor = color(148, 23, 81);

  for (let y=0; y<height; y++){
    
    n = map(y,0,height, 0,1);
    
    let newcolor = lerpColor(topcolor, bottomcolor, n);
    stroke(newcolor);
    line(0,y,width,y);
    
    //center point
    fill("#bb1a1a");
    stroke('#bb1a1a');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 20)
    
    noFill();
    stroke('#88FA4E');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 80)
    
    noFill();
    stroke('#1DB100');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 140)
    
    noFill();
    stroke('#00FDFF');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 180)
    
    noFill();
    stroke('#0096FF');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 220)
    
    noFill();
    stroke('#9437FF');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 260)
    
    noFill();
    stroke('#942193');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 300)
    
    noFill();
    stroke('#FF40FF');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 340)
    
    noFill();
    stroke('#FF2F92');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 380)
    
    noFill();
    stroke('#FF9300');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 420)
    
    noFill();
    stroke('#FFFB00');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 460)
    
    noFill();
    stroke('#522E6E');
    strokeWeight(2);
    circle(windowWidth/2, windowHeight/2, 500)
    
    //LINES
    //TODO: Lines should have an ellipse at their endpoints

    //x1, y1 = 38, 31; x2, y2 = 300, 20;
    // Use line() function to draw line
    stroke('#FFFB00');
    strokeWeight(2);
    line(windowWidth/2+10, windowHeight/2-7, 785, 195);
    
    
    fill("#bb1a1a");
    stroke('#bb1a1a');
    strokeWeight(2);
    line(windowWidth/2-7, windowHeight/2-7, 185, 195);
    

  }
}

function draw() {
}