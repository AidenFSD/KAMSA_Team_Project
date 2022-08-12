function validateEmail() {
    let email = document.getElementById("email");

    var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;


    if(email.value.length === 0){
        alert('Please enter your email address');
        return false;
    }

    if(!email.match(emailCorrectPattern)){
        alert('Please enter a valid email address');
        email.focus();
        email.style.background = 'light green';
        return false;
    }


}