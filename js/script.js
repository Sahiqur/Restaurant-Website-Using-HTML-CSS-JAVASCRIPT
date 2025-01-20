const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load",function(){
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const addEventListener = function(elements, eventType, callback){
  for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelectorAll("[data-nav-toggler]");

const toggleNavbar = function(){
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventListener(navOpenBtn, "click", toggleNavbar);


function changeColor(color) {
  document.body.style.backgroundColor = color;
}

function resetColor() {
  document.body.style.backgroundColor = "";
}



function toggleDarkMode() {
  // document.body.style.backgroundColor = "white";

  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
  
}


const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const prevBtn = document.querySelector("[data-prev-btn]");
const nextBtn = document.querySelector("[data-next-btn]");
let currentSlide = 0;
let autoSlideInterval;

const updateSlider = () => {
  document.querySelector(".active")?.classList.remove("active");
  heroSliderItems[currentSlide].classList.add("active");
};

const slideNext = () => {
  currentSlide = (currentSlide + 1) % heroSliderItems.length;
  updateSlider();
};

const slidePrev = () => {
  currentSlide = (currentSlide - 1 + heroSliderItems.length) % heroSliderItems.length;
  updateSlider();
};

const startAutoSlide = () => {
  autoSlideInterval = setInterval(slideNext, 7000);
};

const stopAutoSlide = () => clearInterval(autoSlideInterval);

nextBtn.addEventListener("click", slideNext);
prevBtn.addEventListener("click", slidePrev);
[nextBtn, prevBtn].forEach((btn) => {
  btn.addEventListener("mouseover", stopAutoSlide);
  btn.addEventListener("mouseout", startAutoSlide);
});

window.addEventListener("load", startAutoSlide);








