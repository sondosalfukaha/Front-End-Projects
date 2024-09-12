//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
//btns > NodeList
btns.forEach((btn)=>{ //btn is the btns indevisually
btn.addEventListener('click', (e)=>{ // e means eventuall object
//console.log(e.currentTarget);//print the btn element that I clicked
//console.log(e.currentTarget.classList);//print all the class list that the clicked btn contains
const styles =e.currentTarget.classList;
if(styles.contains('decrease')) {
    count--;
}
else if(styles.contains('increase')) {
    count++;
}
else {
    count = 0;
}
if(count > 0) {
    value.style.color = 'green';
}
if(count < 0) {
    value.style.color = 'red';
}
if(count === 0) {
    value.style.color = "#222";
}
value.textContent = count;
})
})