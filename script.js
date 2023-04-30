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

const numberElement1 = document.querySelector('.number.loaded1');
const targetValue1 = parseInt(numberElement1.getAttribute('data-value'));
const animationDuration1 = parseInt(numberElement1.getAttribute('data-animation-duration'));

const numberElement2 = document.querySelector('.number.loaded2');
const targetValue2 = parseInt(numberElement2.getAttribute('data-value'));
const animationDuration2 = parseInt(numberElement2.getAttribute('data-animation-duration'));

const numberElement3 = document.querySelector('.number.loaded3');
const targetValue3 = parseInt(numberElement3.getAttribute('data-value'));
const animationDuration3= parseInt(numberElement3.getAttribute('data-animation-duration'));

const numberElement4 = document.querySelector('.number.loaded4');
const targetValue4 = parseInt(numberElement4.getAttribute('data-value'));
const animationDuration4 = parseInt(numberElement4.getAttribute('data-animation-duration'));

let currentValue1 = 0;
let startTime1 = null;

let currentValue2 = 0;
let startTime2 = null;

let currentValue3 = 0;
let startTime3 = null;

let currentValue4 = 0;
let startTime4 = null;

function countNumber(timestamp) {
  if (!startTime1) {
    startTime1 = timestamp;
  }
  if (!startTime2) {
    startTime2 = timestamp;
  }
  if (!startTime3) {
    startTime3 = timestamp;
  }
  if (!startTime4) {
    startTime4= timestamp;
  }

  let progress1 = timestamp - startTime1;
  let increment1 = Math.ceil(targetValue1 / (animationDuration1/ progress1));
  currentValue1 += increment1;
  if (currentValue1 >= targetValue1) {
    currentValue1 = targetValue1;
  }
  numberElement1.textContent = currentValue1.toLocaleString();

  let progress2 = timestamp - startTime2;
  let increment2 = Math.ceil(targetValue2 / (animationDuration2/ progress2));
  currentValue2 += increment2;
  if (currentValue2 >= targetValue2) {
    currentValue2 = targetValue2;
  }
  numberElement2.textContent = currentValue2.toLocaleString();

  let progress3 = timestamp - startTime3;
  let increment3 = Math.ceil(targetValue3/ (animationDuration3/ progress3));
  currentValue3 += increment3;
  if (currentValue3 >= targetValue3) {
    currentValue3 = targetValue3;
  }
  numberElement3.textContent = currentValue3.toLocaleString();

  let progress4 = timestamp - startTime4;
  let increment4 = Math.ceil(targetValue4/ (animationDuration4/ progress4));
  currentValue4 += increment4;
  if (currentValue4 >= targetValue4) {
    currentValue4 = targetValue4;
  }
  numberElement4.textContent = currentValue4.toLocaleString();

  if (currentValue1 < targetValue1 || currentValue2 < targetValue2 || currentValue3 < targetValue3 || currentValue4 < targetValue4) {
    setTimeout(() => {
      window.requestAnimationFrame(countNumber);
    }, 50);
  }
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      window.requestAnimationFrame(countNumber);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(numberElement1);
