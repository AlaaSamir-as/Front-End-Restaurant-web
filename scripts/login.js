// get login info 

const loginUserName = document.getElementById("login-userName");
const lgoinPhoneNumber = document.getElementById("login-phonNumber");
const loginBtn = document.getElementById("loginBtn");

// get registration array from local storage
const users = JSON.parse(localStorage.getItem('users'))


loginBtn.addEventListener('click', handleLogin)




// check for login info 
function handleLogin(e) {
    e.preventDefault();
    if (loginUserName.value === "" || lgoinPhoneNumber === "") {
     
        document.getElementById("invaildname").style.display = "block";
    }
    
    else if (users) {
        users.forEach(checkUser)
    }

    var loginAddress;
    function checkUser(user) {

        if (user[0].userName == loginUserName.value && user[1].phoneNumber == lgoinPhoneNumber.value) {
            loginAddress = user[3].address
            console.log(loginAddress);
            userLogin(loginAddress);
            document.location = 'index.html'

          
        }
        else {
            document.getElementById("invaildname").style.display = "block";
          
        }
    }
}

// save login info to local storage 
function userLogin(loginAddress) {
    localStorage.removeItem("userSession")
    let userSession = JSON.parse(localStorage.getItem('userSession')) || [];
    const userData = [
        { sessionUserName: loginUserName.value },
        { sessionPhoneNumber: lgoinPhoneNumber.value },
        { sessionAddress: loginAddress },
    ]
    userSession.push(userData);
    localStorage.setItem('userSession', JSON.stringify(userSession));
}
