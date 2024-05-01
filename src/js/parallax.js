var body = document.body,
  html = document.documentElement;

var height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

var width = Math.max(
  body.scrollWidth,
  body.offsetWidth,
  html.clientWidth,
  html.scrollWidth,
  html.offsetWidth
);

var layers = document.getElementsByClassName("parallax");
var xPos = width/2;
var yPos = 0;
var fromCenter = 0;
var fromBottom = 0;

function parallax(e){
  fromBottom = height - this.pageYOffset - window.innerHeight;
  var layer, speed;

  for (var i = 0; i < layers.length; i++) {
    layer = layers[i];
    speed = layer.getAttribute("data-distance");

    xPos = -(((fromCenter - (width/2)) * (0 - speed)) / 3500);
    yPos = -((fromBottom * speed) / 100);

    layer.setAttribute(
      "style",
      "transform: translate(" + xPos + "px, " + yPos + "px)",
    );
    layer.style.zIndex = layer.getAttribute('data-distance')*-1
  }
}


window.addEventListener("scroll", (e) => {
  if(fromBottom < 10000){
    parallax(e)
  }
});

window.addEventListener('mousemove', (e) => {
  fromCenter = e.clientX;
  if(fromBottom < 10000){
    parallax(e)
  }
})
