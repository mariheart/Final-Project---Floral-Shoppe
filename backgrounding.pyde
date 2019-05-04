def setup():
    global img
    frameRate(10)
    size(1000, 1000)
    
    img = loadImage("bouquet (1) trans.png")


def draw():
    background(random(255), 255, random(255), 255)
    tint(random(200, 255), random(200, 255), random(200, 255), random(200, 255))
    image(img, 0, 0, 1000, 1000)
    
    #saveFrame("line-######.png")
    #save("bouquet 10.png")
