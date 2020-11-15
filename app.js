const timeline1 = gsap.timeline({defaults: {ease:'power1.out'}})
const OPACITY_START = 0;
const OPACITY_END = 1;
const FROM_TO = 1;

timeline1.to('.hide-text', {y: "0%", duration:1.5, stagger:0.25});
timeline1.to('.slider', {y: "-100%", duration:1.5, delay:0.5});
timeline1.to('.intro', {y: "-100%", duration : 1}, "-=1");

timeline1.fromTo('nav', 
{opacity: OPACITY_START}, 
{opacity: OPACITY_END,
    duration: FROM_TO});

timeline1.fromTo('.big-text', 
{opacity: OPACITY_START}, 
{opacity:OPACITY_END,
    duration: FROM_TO}, "-=1");