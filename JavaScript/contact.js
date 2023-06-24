function onSubClick() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    localStorage.setItem("nameInput", JSON.stringify(name));
    localStorage.setItem("mailInput", JSON.stringify(email));
    let hasErrors = false;

    if (name == '') {
        error.innerHTML = 'Please Enter Name';
        error.style.color = 'red';
        hasErrors = true;
    } else if (name.length < 2) {
        error.innerHTML = 'Your name is too short!'
        error.style.color = 'red';
        hasErrors = true;
    } else {
        error.innerHTML = '';
    }


    if (subject == '') {
        error1.innerHTML = 'Please Enter Subject';
        error1.style.color = 'red';
        hasErrors = true;
    }
    else if (subject.length > 20) {
        error1.innerHTML = 'You Can Write 15 char'
        error1.style.color = 'red';
        hasErrors = true;
    }
    else {
        error1.innerHTML = '';
    }

    if (email == '') {
        error2.innerHTML = "Please Enter Email";
        error2.style.color = 'red';
        hasErrors = true;
    }
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        error2.innerHTML = 'Please enter valid email!';
        error2.style.color = 'red';
        hasErrors = true;
    }
    else {
        error2.innerHTML = '';
    }
    if (hasErrors == false) {
        window.location.replace("thanks.html");
    }
}

//local storage
let userName
