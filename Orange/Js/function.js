/* Scroll to top */
const toTop = document.querySelector(".to-top");
window.onscroll = () => {
    if( this.scrollY >= 100){
        toTop.classList.add("active")
    }
        else{
            toTop.classList.remove("active");
    }
}
toTop.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  /*************** */
  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  //**************** */
  var share_btn = document.querySelector(".share_btn");
	var toggle_button = document.querySelector(".toggle_button");

	share_btn.addEventListener("click", function(){
		toggle_button.classList.toggle("active");
	})
/***************************************************************************************************************** */
/*My code because the tutorial code is complicated and this simplify works in the same way
let listContainer = document.querySelector(".list-view");
let gridContainer = document.querySelector(".grid-view");
let listIcon = document.querySelector(".list");
let gridIcon = document.querySelector(".grid");

// Add click event listener to the list icon
listIcon.addEventListener("click", function () {
    // Show list view and hide grid view
    listContainer.style.display = "block";
    gridContainer.style.display = "none";
    
    // Add "active" class to list icon and remove it from grid icon
    listIcon.classList.add("active");
    gridIcon.classList.remove("active");
});

// Add click event listener to the grid icon
gridIcon.addEventListener("click", function () {
    // Show grid view and hide list view
    listContainer.style.display = "none";
    gridContainer.style.display = "block";
    
    // Add "active" class to grid icon and remove it from list icon
    gridIcon.classList.add("active");
    listIcon.classList.remove("active");
});
*/