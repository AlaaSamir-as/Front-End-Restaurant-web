const userName = document.getElementById("userName");
const phoneNumber = document.getElementById("phonNumber");
const email = document.getElementById("email");
const address = document.getElementById("address");
const registerBtn = document.getElementById("registerBtn")


//reg patterns 
const nameReg = /^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
const phoneReg = /^01[0125][0-9]{8}$/
const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// handle registration 
registerBtn.addEventListener('click',handleRegister)

let users = JSON.parse(localStorage.getItem('users')) || [];




function handleRegister(e){
    e.preventDefault();
    // validate user's data 
    if(userName.value == "" || !nameReg.test(userName.value)){
        var nerror = document.getElementById("username-error")
        nerror.style.display='block';
    }
    else if(phoneNumber.value =="" || !phoneReg.test(phoneNumber.value)){
        var perror = document.getElementById("phone-error")
        perror.style.display='block';
        nerror.style.display='none';

    }
    else if(email.value == "" ||!emailReg.test(email.value)){
        var merror = document.getElementById("email-error")
        merror.style.display='block';
        perror.style.display='none';

    }
    else if(address.value == ""){
        var aerror = document.getElementById("address-error")
        aerror.style.display='block';
        merror.style.display='none';
    }
    else{
        // save valid data to local storage 
        const userData = [
            {userName : userName.value},
            {phoneNumber : phoneNumber.value},
            {emailNumber : email.value},
            {address: address.value}
        ]

        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));

        window.location = 'LoginPage.html'
    }

}