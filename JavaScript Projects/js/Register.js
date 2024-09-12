const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submitted');

    checkInputs();
});
function checkInputs() {
    console.log('Form submitted');
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be empty!');
    }
        else {
            setSuccessFor(username);
            }

    if(emailValue === '') {
            setErrorFor(email, 'Email cannot be empty!');
        }
        else if(!isEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
        }
        else {
            setSuccessFor(email);
            }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty!');
        }
        else {
            setSuccessFor(password);
            }

    if(password2Value === '') {
        setErrorFor(password2, 'Password cannot be empty!');
        }
        else if(password2Value != passwordValue) {
            setErrorFor(password2, 'Password does not match!');
                }
            else {
                setSuccessFor(password2);
                }
}
function setErrorFor(input, message) {
    const formcontroll = input.parentElement;
    const small = formcontroll.querySelector('#small');
    small.innerText = message;
    input.classList.add('error');
}
function setSuccessFor(input) {
    const formcontroll = input.parentElement;
    const small = formcontroll.querySelector('#small');
    small.innerText = "";
    input.classList.add('success');
}
function isEmail (email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
