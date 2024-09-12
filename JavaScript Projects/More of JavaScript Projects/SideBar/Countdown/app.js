const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023,10,27,0,0,0);
const year = futureDate.getFullYear();//2024
const hours = futureDate.getHours();//11
const minutes = futureDate.getMinutes();//30
let month = futureDate.getMonth();//4
month = months[month-1];
let date = futureDate.getDate();//Sun Mon Tue Thr Fri Sat
let weekday = futureDate.getDay();// from 0 to 6
weekday = weekdays[weekday-1];
giveaway.textContent = `giveaway end on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am `;


const futurTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futurTime- today;
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  
  let days = t/oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay)/oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array 
  const values=[days,hours,minutes,seconds];
  function formate(item) {
    if(item < 10){
      return item = `0${item}`;
    }
    return item;
  }
  items.forEach(function(item, index){
    item.innerHTML = formate(values[index]);
  });
  if(t<0) {
    clearInterval(countdown);
    deadline.innerHTML = `h4 class="expired">sorry, this give away has expired</h4>`
  }

}
let countdown = setInterval(getRemainingTime,1000);//run every second

getRemainingTime();






