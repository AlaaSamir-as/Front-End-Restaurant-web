

const cartItems = JSON.parse(localStorage.getItem('shoppingItem'))
console.log(cartItems);

 function cartItem() {
    
// if(cartItems.length = 0){
//     console.log('hello')
//     let body = document.getElementsById("cart-body")
//     let img = document.createElement("img")
//     img.src='../images/emptyCart.svg'
//     body.appendChild(img)
// }
//   else{

   for(let i=0 ; i<cartItems.length ; i++){
    // creating cart item container 
    let cartItem = document.createElement("div")
    cartItem.setAttribute("class","cart-container")
    
    // creating img container 
    let imgDiv = document.createElement("div")
    imgDiv.setAttribute("class","cartImg-container")
    let img = document.createElement("img")
    img.src = cartItems[i].Imgurl;
    
    imgDiv.appendChild(img)
    
    // creating info container 
    let infoDiv = document.createElement("div")
    infoDiv.setAttribute("class","cartInfo-container")
    let header = document.createElement("p")
    header.setAttribute("class","cartInfo-header")
    header.textContent = cartItems[i].title;
    infoDiv.appendChild(header)
    
    let price = document.createElement("p")
    price.setAttribute("class","cartInfo-price")
    price.textContent = cartItems[i].price;
    infoDiv.appendChild(price)
    
    // creating buttons 
    let btnDiv = document.createElement("div")
    btnDiv.setAttribute("class","cartBtn-container")
    
    btnDiv.inerHTML = `<i class="fa-solid fa-plus"></i>+1+<i class="fa-solid fa-minus"></i>`;
    
    // append containers in cart container 
    cartItem.appendChild(imgDiv)
    cartItem.appendChild(infoDiv)
    cartItem.appendChild(btnDiv)

    document.getElementById("cart-body").appendChild(cartItem)
}
  } 
// }
    

function checkSession(){
    if(localStorage.getItem('userSession')){
        document.getElementById("checkOut-text").style.display= "none";
    } 
    else{
        document.getElementById("checkOut-btn").style.display= "none";
    }
}

function checkOrder(){
    document.location='checkOrder.html'
}

// function clearCart(){
//     localStorage.removeItem("shoppingItem")
//     cartItem();
// }


cartItem();
checkSession();