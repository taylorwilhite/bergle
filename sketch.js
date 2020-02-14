let heads = 7
let maxv = 3
let size = 100
let d = size
let headArr = []
let clipArr
let img,
    sound1,
    sound2,
    sound3,
    sound4,
    sound5,
    sound6,
    sound7,
    fontSize
function preload() {
  img = loadImage('https://cdn.economistdatateam.com/democratic-primaries-2020/heads/michael-bloomberg.png')
  sound1 = loadSound('assets/bloomberg-clip-1.m4a')
  sound2 = loadSound('assets/bloomberg-clip-2.m4a')
  sound3 = loadSound('assets/bloomberg-clip-3.m4a')
  sound4 = loadSound('assets/bloomberg-clip-4.m4a')
  sound5 = loadSound('assets/bloomberg-clip-5.m4a')
  sound6 = loadSound('assets/bloomberg-clip-6.m4a')
  sound7 = loadSound('assets/bloomberg-clip-7.m4a')
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  clipArr = [
    sound1,
    sound2,
    sound3,
    sound4,
    sound5,
    sound6,
    sound7,
  ]
  fontSize = floor(width / 10)
  for (let i = 0; i < heads; i++) {
    let x = random(width)
    let y = random(height)
    let vx = random(maxv)
    let vy = random(maxv)
    
    let circle = {
      x: x,
      y: y,
      vx: vx,
      vy: vy,
      sound: clipArr[i]
    }
    
    headArr.push(circle)
  }
}

function draw() {
  // background('#2800d7');
  background('#f4ebbe');
  textSize(fontSize);
  textFont('Lato')
  fill(30)
  textAlign(CENTER, CENTER)
  text('#Bloomberg2020', width / 2, 2 * height / 10)
  
  for (let i = 0; i < headArr.length; i++) {
    let {x, y, vx, vy} = headArr[i]
    let cx = x + vx
    let cy = y + vy
    if (!(mouseX > cx - d / 2 &&
    mouseX < cx + d / 2 &&
    mouseY > cy - d / 2 &&
    mouseY < cy + d / 2)) {
      headArr[i].x = cx
      headArr[i].y = cy
      d = size
      if (headArr[i].sound.isPlaying()) {
        headArr[i].sound.stop()
      }
    } else {
      if (!headArr[i].sound.isPlaying()) {
        headArr[i].sound.play()
      }
      d = size + 10
    }
    
    image(img,cx - d / 2, cy - d / 2, d, d)
    
    
    if (cx > width || cx < 0) {
      headArr[i].vx *= -1
    }
    if (cy > height || cy < 0) {
      headArr[i].vy *= -1
    }
  }
}