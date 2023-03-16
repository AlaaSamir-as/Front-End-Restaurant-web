var contact_username=document.getElementById("contact_username")
var contact_userphone=document.querySelector(".contact_userphone")
var contact_email=document.querySelector(".contact_email")
var contact_comment=document.querySelector(".contact_comment")


// function to setitem contact_name
// document.querySelector(".x").addEventListener("click", function(){
  
//     if(contact_username.value==""){
//         console.log('error')
//     }
//     else{
//     localStorage.setItem("contact_username",contact_username.value);
//     }
// })



//  getitem contact_name
let local_contact =JSON.parse(localStorage.getItem("userSession"));
let local_contact_username= local_contact[0][0].sessionUserName
if (local_contact_username){
    document.querySelector("#local_contact_name").innerHTML=local_contact_username
    document.querySelector("#local_contact_name").style.display="flex"
    document.querySelector("#sign_in_text").style.display="none"

    // document.querySelector("#sign_in").innerHTML+='<a class="dropdown-menu">Sign out</a>'
}


// function to add number to cart
// function addNumber(){
//     let badge=document.querySelectorAll(".cart div");
//     document.querySelector(".cart").innerHTML +='<div></div>';
//     document.querySelector(".badge").innerHTML=badge.length
// }

// function to sign_out
function sign_out(){
    localStorage.removeItem("userSession");
    localStorage.removeItem("shoppingItem");
    document.querySelector("#sign_in_text").style.display="flex"
    document.querySelector("#local_contact_name").style.display="none"
    // document.querySelector("#sign_in a").addEventListener("click",function(){
    //     document.querySelector(".dropdown-menu").style.display="none"
    // })
}

// function to hide sign out
function hide_Signout(){
    window.location="LoginPage.html"
document.querySelector(".dropdown-menu").style.display="none"
}