let value
const altimeter = document.getElementById('altimeter');

window.addEventListener("scroll", () => {
  var fromBottom = height - this.pageYOffset - window.innerHeight;
  // value = Math.round((fromBottom/200)**2);
  value = Math.round(fromBottom);
  if(fromBottom > 1100 && altimeter.classList.contains('altimeter--inactive')){
    altimeter.classList.remove('altimeter--inactive');
    altimeter.classList.add('altimeter--active');
  }else if(fromBottom < 1100 && altimeter.classList.contains('altimeter--active')){
    altimeter.classList.add('altimeter--inactive');
    altimeter.classList.remove('altimeter--active');
  }
  // console.log(value)
  if(value > 9999){
    value = Math.round(value / 100) / 10
    altimeter.innerHTML = `${value}km`
  }else{
    altimeter.innerHTML = `${value}m`
  }
});

