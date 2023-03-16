
let total = 0;                                              


let talalPrice = document.getElementById("talalPrice");  
talalPrice.textContent = total;                                  //add total price to invoice

// conect to json to get address and pass it to page

async function myFun() {
  try {
    let adrress = document.getElementById("address");
    let userinfo= JSON.parse(localStorage.getItem("userSession"));
    adrress.textContent = userinfo[0][2].sessionAddress;
    console.log(userinfo[0][2].sessionAddress);
    let clientName = document.getElementById("clientName");
    clientName.textContent = userinfo[0][0].sessionUserName;
  } catch (error) {
    console.log(error);
  }
}
myFun();




let cartItems1 = JSON.parse(localStorage.getItem('shoppingItem'))
function cartItem() {
  if (cartItems1){
    let shoppingItem=JSON.parse(localStorage.getItem("ShoppingItem"));
  cartItems1.forEach(element => { // looping in json to get order data
    let x = document.getElementsByTagName("table")[0].innerHTML +=
        `<tr><td> <div class="d-flex align-items-center">
<img src="${element.Imgurl}" width="100" height="100">
<p class="fw-3 fs-4 ms-2"> ${element.title}</p></div></td><td class="fw-3 fs-4 pt-4"> ${element.price} EGP </td>`
    console.log(element);
    total += element.price;
    let talalPrice = document.getElementById("talalPrice")
    talalPrice.textContent = `${total} EGP`;
    console.log(total);
});

}
} 
cartItem();