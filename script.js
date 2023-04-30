const toggle = document.getElementById("toggler");
const remove = document.getElementById("close-menu");
const aside = document.querySelector(".mobile-menu");
const backlight = document.querySelector(".back-white");

const remove1 = document.querySelector(".rmv1");
const remove2 = document.querySelector(".rmv2");
const remove3 = document.querySelector(".rmv3");
const remove4 = document.querySelector(".rmv4");
const remove5 = document.querySelector(".rmv5");



toggle.addEventListener("click",()=>{
    backlight.style.display = "block";
    aside.style.display = "block";
    toggle.style.display = "none"
    remove.style.display = "block"

})


remove.addEventListener("click",()=>{
    backlight.style.display = "none";
    aside.style.display = "none";
  toggle.style.display = "block"
  remove.style.display = "none"
})

remove1.addEventListener("click",()=>{
    backlight.style.display = "none";
    aside.style.display = "none";
  toggle.style.display = "block"
  remove.style.display = "none"
})
remove2.addEventListener("click",()=>{
    backlight.style.display = "none";
    aside.style.display = "none";
  toggle.style.display = "block"
  remove.style.display = "none"
})
remove3.addEventListener("click",()=>{
    backlight.style.display = "none";
    aside.style.display = "none";
  toggle.style.display = "block"
  remove.style.display = "none"
})
remove4.addEventListener("click",()=>{
    backlight.style.display = "none";
    aside.style.display = "none";
  toggle.style.display = "block"
  remove.style.display = "none"
})
remove5.addEventListener("click",()=>{
    backlight.style.display = "none";
    aside.style.display = "none";
  toggle.style.display = "block"
  remove.style.display = "none"
})
