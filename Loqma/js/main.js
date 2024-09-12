/*Stars*/
/*CODE doesnot work because of bootstrap js files*/
let stars = document.querySelectorAll('.starss span');
let products = document.querySelectorAll('.starss');
let ratings = [];
for(let i=0;i<stars.length;i++) {
    
    stars[i].addEventListener('click', function() {
        this.setAttribute('data-clicked', 'true');
    })
}

/*Stars*/

/*Items Counter
let counter = 0;
let Counterplus = document.querySelectorAll('.Counterplus');
let CounterMinus = document.querySelectorAll('.CounterMinus');
let items = document.getElementById('items');
let rest = document.getElementById('rest');
rest.addEventListener('click', ()=>{
    
    items.innerText = 0;
})
Counterplus.addEventListener('click', ()=>{
    counter++;
    items.innerText = counter;
    CounterMinus.classList.remove("disable"); 
})
if(counter ==0) {
    CounterMinus.classList.add("disable");
    items.innerText = 0;
}
CounterMinus.addEventListener('click', ()=>{
    counter--;
    if(counter ==0) {
        CounterMinus.classList.add("disable");
        items.innerText = 0;
    }

    else {
        CounterMinus.classList.remove("disable"); 
        items.innerText = counter;}
})
/*Items Counter*/


/* Items Counter 

let counters = document.querySelectorAll('.Counterplus');
let counterMinusElements = document.querySelectorAll('.CounterMinus');
let itemElements = document.querySelectorAll('#items');
let restElements = document.querySelectorAll('#rest');

for (let i = 0; i < counters.length; i++) {
    let counter = 0;
    let Counterplus = counters[i];
    let CounterMinus = counterMinusElements[i];
    let items = itemElements[i];
    let rest = restElements[i];

    rest.addEventListener('click', () => {
        counter = 0;
        CounterMinus.classList.add("disable");
        items.innerText = 0;
    });

    Counterplus.addEventListener('click', () => {
        counter++;
        items.innerText = counter;
        CounterMinus.classList.remove("disable");
        rest.classList.remove("disable");

    });

    if (counter == 0) {
        rest.classList.add("disable");
        CounterMinus.classList.add("disable");
        
        items.innerText = 0;
    }

    CounterMinus.addEventListener('click', () => {
        counter--;
        if (counter == 0) {
            CounterMinus.classList.add("disable");
            rest.classList.add("disable");
            items.innerText = 0;
        } else {
            CounterMinus.classList.remove("disable");
            rest.classList.remove("disable");
            items.innerText = counter;
        }
    });
}
Items Counter */
let DrinkType = document.querySelectorAll('.choosedrinktype li');
let Cold_Baverage = document.getElementById('Cold_Baverage');
let Hot_Baverage = document.getElementById('Hot_Baverage');
for(let i=0;i<DrinkType.length;i++) {
    DrinkType[i].addEventListener('click', ()=>{
        //remove all active
        for(let i=0;i<DrinkType.length;i++) { 
            DrinkType[i].classList.remove('active');
        }
        DrinkType[i].classList.add('active');
        if(DrinkType[i].getAttribute('data-val') === 'Hot')  {
            Cold_Baverage.style.display = 'none';
            Hot_Baverage.style.display = 'flex';
        }
        else if(DrinkType[i].getAttribute('data-val') === 'Cold')  {
            Hot_Baverage.style.display = 'none';
            Cold_Baverage.style.display = 'flex';
        }
    })
}

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
