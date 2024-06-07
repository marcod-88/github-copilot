//Draw a cartoon dog and a cat sitting side-by-side looking at each
//The dog is on the left and the cat is on the right
//The dog is brown and the cat is grey
//The dog is a Labrador and the cat is a Persian
//The cat has pointy ears

function setup() {
  createCanvas(400, 400);
  background(255);
  
  //draw the dog
  fill(139,69,19); //brown
  ellipse(100, 200, 100, 100); //head
  ellipse(100, 250, 150, 100); //body
  fill(0); //black
  ellipse(80, 190, 20, 20); //left eye
  ellipse(120, 190, 20, 20); //right eye
  fill(255); //white
  ellipse(80, 190, 10, 10); //left eye
  ellipse(120, 190, 10, 10); //right eye
  fill(139,69,19); //brown
  ellipse(100, 220, 10, 10); //nose
  fill(0); //black
  ellipse(100, 230, 10, 10); //mouth
  
  //draw the cat
  fill(192,192,192); //grey
  ellipse(300, 200, 100, 100); //head
  ellipse(300, 250, 150, 100); //body
  fill(0); //black
  ellipse(280, 190, 20, 20); //left eye
  ellipse(320, 190, 20, 20); //right eye
  fill(255); //white
  ellipse(280, 190, 10, 10); //left eye
  ellipse(320, 190, 10, 10); //right eye
  fill(192,192,192); //grey
  ellipse(300, 220, 10, 10); //nose
  fill(0); //black
  ellipse(300, 230, 10, 10); //mouth
}
