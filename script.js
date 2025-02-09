
let illustrator = document.getElementById("illustrator");
let think = document.getElementById("think");
let motion = document.getElementById("bg-motion");
let welcome = document.getElementById("welcome");
let soul = document.getElementById("soul");
let shop = document.getElementById("shop-now");
let circle = document.getElementById("donut")
 
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  illustrator.style.marginLeft = value * -2.5 + 'px';
 motion.style.marginLeft = value * -2.5 + 'px';
 welcome.style.marginLeft = value * -2.5 + 'px';   
 think.style.marginLeft = value * -2.5 + 'px'
 soul.style.marginLeft = value * -2.5 + 'px';
 shop.style.marginLeft = value * -2.5 + 'px';

  

});
