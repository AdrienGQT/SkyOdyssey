document.getElementById('parallax').style.transform = `translate(${-(document.getElementById('parallax').offsetWidth - document.getElementById('landing').offsetWidth) / 2}px,0px)`;

addEventListener("resize", (event) => {
    document.getElementById('parallax').style.transform = `translate(${-(document.getElementById('parallax').offsetWidth - document.getElementById('landing').offsetWidth) / 2}px,0px)`;
});