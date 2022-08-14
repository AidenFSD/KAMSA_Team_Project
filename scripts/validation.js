function subscribeValidation() {
    checkForFullName();
    checkForEmail();
}

function careerValidation() {
    checkForFirstName();
    checkForLastName();
    checkForEmail();
    chceckForPhone();
    checkForCity();
    checkForJobType();
    checkForFileNull();
    checkForWorkPlace();
    checkForLanguage();
}

function checkForFirstName() {
    let firstNameField = document.getElementById("first_name");
    if (firstNameField.value.length === 0) {
        alert("Please enter your first name");
        firstNameField.focus();
        // If the user hasn't completed the field,
        // changes its background color to yellow
        firstNameField.style.background = "yellow";
        return false;
    }
    // After the user completes the field,
    // restores the background color to white
    firstNameField.style.background = "white";

} // end function checkForLastName

function checkForLastName() {
    let lastNameField = document.getElementById("last_name");
    if (lastNameField.value.length === 0) {
        alert("Please enter your last name");
        lastNameField.focus();
        // If the user hasn't completed the field,
        // changes its background color to yellow
        lastNameField.style.background = "yellow";
        return false;
    }
    // After the user completes the field,
    // restores the background color to white
    lastNameField.style.background = "white";

} // end function checkForLastName

function checkForFullName() {
    let fullNameField = document.getElementById("fullName");
    if (fullNameField.value.length === 0) {
        alert("Please enter your name");
        fullNameField.focus();
        // If the user hasn't completed the field,
        // changes its background color to yellow
        fullNameField.style.background = "yellow";
        return false;
    }
    // After the user completes the field,
    // restores the background color to white
    fullNameField.style.background = "white";

} // end function checkForLastName

function checkForEmail() {
    let emailField = document.getElementById("email");

    var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;


    if (emailField.value.length === 0) {
        alert('Please enter your email address');
        return false;
    }

    if (!(emailField.value.match(emailCorrectPattern))) {
        alert('Please enter a valid email address');
        emailField.focus();
        emailField.style.background = 'light green';
        return false;
    }
    // After the user completes the field,
    // restores the background color to white
    emailField.style.background = "white";
}

function chceckForPhone(){
    let phoneField = document.getElementById("phone");
    var phoneCorrectPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (phoneField.value.length === 0) {
        alert('Please enter your phone number');
        return false;
    }

    if (!(phoneField.value.match(phoneCorrectPattern))) {
        alert('Please enter a valid Phone number');
        phoneField.focus();
        phoneField.style.background = 'light green';
        return false;
    }
    // After the user completes the field,
    // restores the background color to white
    phoneField.style.background = "white";
}

function checkForCity() {
    let cityField = document.getElementById("citySelect");
    if(cityField.value === ""){
        alert('Please Select a city');
        return false;
    }
}

function checkForJobType() {
    let jobTypeField = document.getElementById("jobTypeSelect");
    if(jobTypeField.value === ""){
        alert('Please Select a Job Type');
        return false;
    }
}

function checkForFileValidation(){
    let fileField = document.getElementById("formFile");
    let filePath = fileField.value;

    //allowing file type
    let allowExtensions = /(\.doc|\.docx|\.pdf)$/i;

    if(!allowExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileField.value = '';
        return false;
    }
}

function checkForFileNull(){
    let fileField = document.getElementById("formFile");
    let filePath = fileField.value;

    if (filePath.length === 0) {
        alert('Please upload your file');
        return false;
    }
}


function checkForWorkPlace() {

    var workPlace=  document.getElementsByName("workPlace[]");

    var checkedWorkPlace = 0;

    for (var i = 0; i < workPlace.length; i++) {
        if (workPlace[i].checked) {
            checkedWorkPlace++;
        }
    }

    if (checkedWorkPlace == 0) {
        alert('Please check your prefer work place');
        document.getElementById("msgWorkPlace").innerHTML = "WorkPlace is required field!";
        return false;
    }
    return true;
}


function checkForLanguage() {

    var languageAvailabilities=  document.getElementsByName("language[]");

    var checkedlanguage = 0;

    for (var i = 0; i < languageAvailabilities.length; i++) {
        if (languageAvailabilities[i].checked) {
            checkedlanguage++;
        }
    }

    if (checkedlanguage == 0) {
        alert('Please check your language');
        document.getElementById("msgLanguage").innerHTML = "language is required field!";
        return false;
    }
    return true;
}