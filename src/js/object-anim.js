gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".illustration--zeppelin",{
    x:-460,
    y:-120},
    {
    x:0,
    y:0,
    scrollTrigger:{
        trigger:".illustration--zeppelin",
        end:'bottom 0%',
        start:'top 100%',
        scrub:4,
    }
    }
)

gsap.fromTo(".illustration--concorde",{
    ease:"linear",
    x:300,
    y:-100},
    {
    x:-200,
    y:0,
    scrollTrigger:{
        trigger:".illustration--concorde",
        end:'bottom 0%',
        start:'top 100%',
        scrub:2,
    }
    }
)

gsap.fromTo(".illustration--boeing",{
    x:1060,
    y:20},
    {
    x:0,
    y:0,
    scrollTrigger:{
        trigger:".illustration--boeing",
        end:'bottom 0%',
        start:'top 100%',
        scrub:2,
    }
    }
)

gsap.fromTo(".illustration--vautour",{
    x:-1060,
    y:-300},
    {
    x:0,
    y:0,
    scrollTrigger:{
        trigger:".illustration--vautour",
        end:'bottom 0%',
        start:'top 100%',
        scrub:2,
    }
    }
)

gsap.fromTo(".illustration--sr-71",{
    x:-300,
    y:50},
    {
    x:0,
    y:0,
    scrollTrigger:{
        trigger:".illustration--sr-71",
        end:'bottom 0%',
        start:'top 100%',
        scrub:true,
    }
    }
)