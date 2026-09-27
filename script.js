const form = document.querySelector('.sub-form');
const input = document.querySelector('.email-input');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


form.addEventListener('submit', function(event) {

    event.preventDefault();

    console.log('SUBMIT WORKS');
    const email = input.value.trim();

    console.log(email);

    if(!emailPattern.test(email)) {
        console.log('Please enter your email');
        errorIcon.style.display = 'block';
        errorMessage.style.display = 'block';
    }

    else {
        console.log('Email entered');
        errorIcon.style.display = 'none';
        errorMessage.style.display = 'none';
    }

});