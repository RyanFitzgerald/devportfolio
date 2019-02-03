// Simple code for making "paint splatters" on a blank canvas

// Create a canvas to paint on
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    focused = false,
    clicked = true;
var shadow = document.createElement('canvas'),
    sctx = shadow.getContext('2d');

// set up some default varriables for mouse position
var items = [];
var mousePosition = {
    x: 0, 
    y: 0,
    dx: 0, 
    dy: 0,
    px: 0, 
    py: 0
};

canvas.width = shadow.width = window.innerWidth;
canvas.height = shadow.height = window.innerHeight;

function drawLoop() 
{
    if (focused) 
    {
        requestAnimationFrame(drawLoop);
    }
  
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCircle(items)
}

function paint(x, y, arr) 
{
    // fill an arayy with the coordinates for n circles to be painted
    for (var i = 0; i < getRandomInt(90,110); i++) 
    {
        // give some random direction and size to the paint circles
        var s = Math.random() * Math.PI;
        var dirx = (((Math.random() < .5) ? 3 : -3) * (Math.random() * 3)) * 0;
        var diry = (((Math.random() < .5) ? 3 : -3) * (Math.random() * 3)) * 0;
      console.log(x, y, dirx, diry)
        arr.push({
            x: x,
            y: y,
            dx: dirx + mousePosition.dx,
            dy: diry + mousePosition.dy,
            size: s
        })
    }
}

function drawCircle(arr) 
{
    var i = arr.length
    while (i--) 
    {
        var t = arr[i];
        var x = t.x,
            y = t.y,
            s = t.size;
        circle(x, y, s, ctx)

        t.dy -= getRandomInt(0.3, 0.5) // "gravity"
        t.x -= t.dx
        t.y -= t.dy
        t.size -= getRandomInt(0.03, 0.3);

        if (arr[i].size < 0.3 || Math.random() < 0.08)
        {
            circle(x, y, s, sctx)
            arr.splice(i, 1)
        }
    }

    ctx.drawImage(shadow, 0, 0)    
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function circle(x, y, s, c) 
{
    c.beginPath()
    c.arc(x, y, s * getRandomInt(2, 6), 0, 2 * Math.PI, false);
    c.fill()
    c.closePath()
}

canvas.onmousedown = function (e) 
{
    if (!focused) 
    {
        const randColor = '#' + Math.floor(Math.random() * 25768213).toString(16);
        sctx.fillStyle = ctx.fillStyle = randColor;
        lastColor = randColor;
      focused = true;
        drawLoop();
    } 
  
    else 
    {
        clicked = true;

        mousePosition.x = e.screenx
        mousePosition.y = e.screenY
      
      
       // Make a random colour to paint the circle
        const randColor = '#' + Math.floor(Math.random() * 25768213).toString(16);
        sctx.fillStyle = ctx.fillStyle = randColor;
        lastColor = randColor;
          
        paint(mousePosition.x, mousePosition.y, items)
    }
}

canvas.onmouseup = function () 
{
    clicked = false;
    mousePosition.dx = mousePosition.dy = 0
}

canvas.onmousemove = function (e) 
{
    if (clicked) 
    {
        var distx = (mousePosition.px - mousePosition.x),
            disty = (mousePosition.py - mousePosition.y);
        mousePosition = {
            x: e.pageX,
            y: e.pageY,
            dx: (Math.abs(distx) > 10) ? -1 : distx,
            dy: (Math.abs(disty) > 10) ? -1 : disty,
            px: mousePosition.x,
            py: mousePosition.y
        }
      
        paint(mousePosition.x, mousePosition.y, items)
    }
}


clickMax = 10;
clickCount = clickMax;
var counter = document.getElementById("counter")
var full = document.getElementById("full")
var mostlyfull = document.getElementById("mostlyfull")
var mostlyempty = document.getElementById("mostlyempty")
var empty = document.getElementById("empty")
canvas.onclick = function() {
  clickCount -= 1;
  if (clickCount > 0) {
      counter.innerHTML = "0" + clickCount
    if (clickCount == Math.floor(clickMax*2/3)) {
       full.style.visibility = "hidden"
       mostlyfull.style.visibility = "visible"
    }
     if (clickCount == Math.floor(clickMax/3)) {
      mostlyfull.style.visibility = "hidden"
       mostlyempty.style.visibility = "visible"
    }
  }
   if (clickCount == 0) {
      counter.innerHTML = ""
      mostlyempty.style.visibility = "hidden"
       empty.style.visibility = "visible"
     finish()
    }

}

var download = document.getElementById('download');

function finish() {
  canvas.classList.add('done');
  download.href = canvas.toDataURL();
}