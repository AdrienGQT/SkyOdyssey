const items = document.getElementsByClassName('content__item');
var item, altitude;

function metersToPixels(meters){
    var pixels;
    pixels = meters;
    return(pixels)
}

for (var i = 0; i < items.length; i++){
    item = items[i];
    altitude = item.getAttribute("data-altitude");
    item.setAttribute(
        "style",
        `bottom: ${metersToPixels(altitude)}px`
    )
}