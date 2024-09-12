 /*       let slideIndex = 1;
        showSlides(slideIndex);
        
        //Next or Previous Controls
        function plusSlides(n) {
            let a = slideIndex + n;
            showSlides(a);
        }
        // Thumbnail image controls
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("slide");
            let dots = document.getElementsByClassName("dot");
            
            if(n > slides.length) {
            slideIndex = 1;
            }
            if(n < 1) {
                slideIndex = slides.length;
            }
            for(i = 0; i<slides.length;i++){
                slides[i].style.display = "none"
            }
            for(i = 0; i<dots.length;i++) {
                dots[i].className = dots[i].className.replace("active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += "active";
        }
/************ */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 500); // Change image every 2 seconds
}


