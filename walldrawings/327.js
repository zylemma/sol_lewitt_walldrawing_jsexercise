/* global setup draw alpha blue brightness color green hue lerpColor lightness red saturation p5.Color background clear colorMode fill noFill noStroke stroke arc ellipse circle line point quad rect square triangle ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight bezier bezierDetail bezierPoint bezierTangent curve curveDetail curveTightness curvePoint curveTangent beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex plane box sphere cylinder cone ellipsoid torus p5.Geometry loadModel model HALF_PI PI QUARTER_PI TAU TWO_PI DEGREES RADIANS print frameCount deltaTime focused cursor frameRate noCursor displayWidth displayHeight windowWidth windowHeight windowResized width height fullscreen pixelDensity displayDensity getURL getURLPath getURLParams preload setup draw remove disableFriendlyErrors noLoop loop push pop redraw p5.Element select selectAll removeElements changed input createDiv createP createSpan createImg createA createSlider createButton createCheckbox createSelect createRadio createColorPicker createInput createFileInput createVideo createAudio VIDEO AUDIO createCapture createElement p5.MediaElement p5.Graphics createCanvas resizeCanvas noCanvas createGraphics blendMode setAttributes applyMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate storeItem getItem clearStorage removeItem createStringDict createNumberDict p5.TypedDict p5.NumberDict append arrayCopy concat reverse shorten shuffle sort splice subset float int str boolean byte char unchar hex unhex join match matchAll nf nfc nfp nfs split splitTokens trim deviceOrientation accelerationX accelerationY accelerationZ pAccelerationX pAccelerationY pAccelerationZ rotationX rotationY rotationZ pRotationX pRotationY pRotationZ turnAxis setMoveThreshold setShakeThreshold deviceMoved deviceTurned deviceShaken keyIsPressed key keyCode keyPressed keyReleased keyTyped keyIsDown movedX movedY mouseX mouseY pmouseX pmouseY winMouseX winMouseY pwinMouseX pwinMouseY mouseButton mouseIsPressed mouseMoved mouseDragged mousePressed mouseReleased mouseClicked doubleClicked mouseWheel requestPointerLock exitPointerLock touches touchStarted touchMoved touchEnded createImage saveCanvas saveFrames p5.Image loadImage image tint noTint imageMode pixels blend copy filter get loadPixels set updatePixels loadJSON loadStrings loadTable loadXML loadBytes httpGet httpPost httpDo p5.XML createWriter p5.PrintWriter save saveJSON saveStrings saveTable p5.Table p5.TableRow day hour minute millis month second year createVector p5.Vector abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt noise noiseDetail noiseSeed randomSeed random randomGaussian acos asin atan atan2 cos sin tan degrees radians angleMode textAlign textLeading textSize textStyle textWidth textAscent textDescent loadFont text textFont p5.Font orbitControl debugMode noDebugMode ambientLight directionalLight pointLight lights lightFalloff loadShader createShader shader resetShader normalMaterial texture textureMode textureWrap ambientMaterial emissiveMaterial specularMaterial shininess p5.Shader camera perspective ortho createCamera p5.Camera setCamera */


function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
}

const w = window.innerWidth
const h = window.innerHeight
const x = w / 2 - h / 6
const y = h / 2 - h / 6
const l = h / 3

function mysquare () {
  console.log('squre drawing')
  const c = color(255, 255, 255)
  stroke(c)
  noFill()
  rect(x, y, l, l)
  for (let y0 = y; y0 < y + l; y0 += 5) {
    line(x, y0, x + l, y0)
  }
}

function myTrapezoid () {
  const x1 = x - h / 40
  const x2 = x + l + h / 40
  const x3 = w / 2 - 2 * h / 5
  const x4 = w / 2 + 2 * h / 5
  const y1 = h / 50
  const y2 = 49 * y1
  const c = color(255, 255, 255)
  stroke(c)
  noFill()
  line(x1, y1, x2, y1)
  line(x3, y2, x4, y2)
  line(x2, y1, x4, y2)
  line(x1, y1, x3, y2)
  for (let x0 = x1; x0 < x2; x0 += 5) {
    if (x0 < x || x0 > x + l) {
      line(x0, y1, x0, y2)
    } else {
      line(x0, y1, x0, y)
      line(x0, y + l, x0, y2)
    }
  }
  for (let xa = x3; xa < x1; xa += 5) {
    const ya = xa * (y2 - y1) / (x3 - x1) + (x3 * y1 - x1 * y2) / (x3 - x1)
    line(xa, ya, xa, y2)
  }
  for (let xb = x2; xb < x4; xb += 5) {
    const yb = xb * (y2 - y1) / (x4 - x2) + (x4 * y1 - x2 * y2) / (x4 - x2)
    line(xb, yb, xb, y2)
  }
}

function draw () {
  background(0)
  mysquare()
  myTrapezoid()
}
