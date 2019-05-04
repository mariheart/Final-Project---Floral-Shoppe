let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;

let images;

// All images are the same size.

function preload() {
  img1 = loadImage("Images/1.jpg");
  img2 = loadImage("Images/2.jpg");
  img3 = loadImage("Images/3.jpg");
  img4 = loadImage("Images/4.jpg");
  img5 = loadImage("Images/5.jpg");
  img6 = loadImage("Images/6.jpg");
  img7 = loadImage("Images/7.jpg");
  img8 = loadImage("Images/8.jpg");
  img9 = loadImage("Images/9.jpg");
  img10 = loadImage("Images/10.jpg");
  images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
}
  

function setup() {
  createCanvas(500, 500);
  // Load Images!!!
  background(255);
  tint(255, 10);
  for (let i = 0; i < 5; i++) {
    copy(img1, random(3000), random(3000), 100, 100, random(300), random(300), 100, 100);
    copy(img2, random(3000), random(3000), 100, 100, random(400), random(400), 100, 100);
    copy(img3, random(3000), random(3000), 100, 100, random(300), random(300), 100, 100);
    copy(img4, random(3000), random(3000), 100, 100, random(300), random(300), 100, 100);
    copy(img5, random(3000), random(3000), 100, 100, random(300), random(300), 100, 100);
    copy(img6, random(3000), random(3000), 100, 100, random(300), random(300), 100, 100);
    copy(img7, random(3000), random(3000), 100, 100, random(400), random(400), 100, 100);
    copy(img8, random(3000), random(3000), 100, 100, random(300), random(300), 100, 100);
    copy(img9, random(3000), random(3000), 100, 100, random(300), random(300), 100, 100);
    copy(img10, random(3000), random(3000), 100, 100, random(300), random(300), 100, 100);
  }
    //noLoop();
  //save("bouquet.png");
  
}

function draw() {

    // This should show some flowers and what not.
}
// [insert floral emoji here.]