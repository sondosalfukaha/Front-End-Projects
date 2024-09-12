let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
const a = document.getEle
const bar = document.getElementById('bar');//bar icon
const nav = document.getElementById('navbar');
const close = document.getElementById('close');


  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });


  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });