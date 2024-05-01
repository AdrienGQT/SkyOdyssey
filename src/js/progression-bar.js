const object = document.getElementById('progressionBar');

var height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

const checks = document.getElementsByClassName('progressionBar__check');
const checksAltitudes = [];

for (var i = 0; i < checks.length; i++){
    var item = checks[i];
    console.log(item.getAttribute('data-altitude'))
    item.setAttribute(
        'style',
        `top:${100 - (item.getAttribute('data-altitude') / 1000)}%`
    )
    checksAltitudes.push(item.getAttribute('data-altitude'));
}


window.addEventListener('scroll', (e) => {
    fromBottom = height - this.pageYOffset - window.innerHeight;
    console.log(fromBottom);
    console.log(checksAltitudes[0]);
    if(fromBottom > checksAltitudes[0]){
        html.style.scrollBehavior = "smooth";
        checks[0].classList.add("progressionBar__check--active")
        checks[0].classList.remove("progressionBar__check--inactive")
        checks[0].href = "#stratosphere"
    }if(fromBottom > checksAltitudes[1]){
        checks[1].classList.add("progressionBar__check--active")
        checks[1].classList.remove("progressionBar__check--inactive")
        checks[1].href = "#mesosphere"
    }if(fromBottom > checksAltitudes[2]){
        checks[2].classList.add("progressionBar__check--active")
        checks[2].classList.remove("progressionBar__check--inactive")
        checks[2].href = "#thermosphere"
    }if(fromBottom > checksAltitudes[3]){
        checks[3].classList.add("progressionBar__check--active")
        checks[3].classList.remove("progressionBar__check--inactive")
        checks[3].href = "#space"
    }
    
    // object.setAttribute(
    //     'style',
    //     `height: ${fromBottom * 100 / height}%`
    // )
    


    // progressionBar__check--active
})