
let product=document.querySelector(".product")
let product2=document.querySelector(".product2")

let produet=[
     obj1= {
        id:1,
        title:"Super Supreme",
        price:120,
        Imgurl:"./images/6.png",
        offer:50,
    },
    {
        id:2,
        title:"combo burger",
        price:150,
        Imgurl:"./images/8.png",
      
       
        offer:"100",
    },
    {
        id:3,
        title:" Basterma",
        price:180,
        Imgurl:"./images/2.png",
        offer:"120",
    
        
    },
]
let produet2=[
    obj1= {
       id:4,
       title:"combo",
       price:100,
       Imgurl:"./images/2.png",
     
      
   },
    {
       id:5,
       title:"pizza",
       price:120,
       Imgurl:"./images/3.png",
     
      
   },
    {
       id:6,
       title:"burger",
       price:142,
       Imgurl:"./images/5.png",
    
      
   },
    {
       id:7,
       title:"Super Supreme2",
       price:200,
       Imgurl:"./images/4.png",
       numberp:"104",
      
    },
    {
       id:8,
       title:"best brger",
       price:177,
       Imgurl:"./images/6.png",
       numberp:"155",
      
    },
    {
       id:9,
       title:"sandowetch",
       price:199,
       Imgurl:"./images/7.png",
       numberp:"155",
      
    },
    {
       id:10,
       title:"prsta",
       price:661,
       Imgurl:"./images/8.png",
     
      
    },
    {
       id:11,
       title:"frize",
       price:333,
       Imgurl:"./images/7.png",
    
      
    },
    {
       id:12,
       title:"combo2",
       price:166,
       Imgurl:"./images/5.png",
     
      
    },
    {
       id:13,
       title:"Super Supreme",
       price:190,
       Imgurl:"./images/3.png",
     
      
    },
    {
       id:14,
       title:"mdume",
       price:188,
       Imgurl:"./images/6.png",
     
      
    },
    {
       id:15,
       title:"berger",
       price:120,
       Imgurl:"./images/3.png",
  
      
    },
]


 function drowdom(){
    let prodctui=produet.map((itme)=>{
        return`
      
        <!-- card1 -->
        <div class="card col-md-3"  style="margin: 40px;  "   >
                   <img class="card-img-top rounded " src="${itme.Imgurl}" alt="Card image" style="width:100%" height="200px">
                   <div class="card-body">
                   <h4 class="card-title">${itme.title}</h4>
                   <div class="container mt-3">
                       <!-- list -->
                   <ul class="list-group">
                   <li class="list-group-item d-flex justify-content-between align-items-center text-decoration-line-through Fs-3 " style="font-weight:bold;"  >
                   ${itme.price} EGP
                  
                   </li>
                   <li class="fs-5 list-group-item d-flex justify-content-between align-items-center text-danger ;" style="font-weight:bold ;" "  >
                    ${itme.offer} EGP
                
                   </li>
                   <li class="list-group-item d-flex justify-content-between align-items-center">
                   <button class="btn "onclick="addcad (${itme.id})"  style="background-color:#fbcb1f ;">ADD</button>
       
                   </span>
                   </li>
                   </ul>
                   </div>
                   </div>
                </div>
             
        `
    })
    product.innerHTML+=prodctui;

}
    function drowdom2(){
        let prodctui2=produet2.map((itme2)=>{
            return` <div class="card col-md-3" style=" margin:40px;  height: 400px;" >
            <div class="card-body">
                <img class="card-img-top rounded-circle " src="${itme2.Imgurl}" alt="Card image" style="width:100%"  height="200px" >
            <div class="container mt-2 d-flex  flex-column W-100 ">
               <h2>${itme2.title}</h2>
        <span  style="top: 50px;"style>${itme2.price} EGP</span>
       
        <button class="btn  mx-auto mt-3"onclick="addcad2(${itme2.id})" style="margin-left:50% ;background-color:#fbcb1f ; width: 100% ">Add To Cart</button>
    </div>
    </div>
    </div> `
    })
    product2.innerHTML+=prodctui2;
        }


let cartItems = JSON.parse(localStorage.getItem('shoppingItem'))
//  let additem=[]
let itemsession=[]
function addcad(id){
    if(localStorage.getItem("shoppingItem")){
        itemsession=JSON.parse(localStorage.getItem("shoppingItem"));
    }
    let choseitem=produet.filter((itme)=>itme.id===id)
    itemsession=[...itemsession,...choseitem]
    // itemsession.push(choseitem)
    localStorage.setItem("shoppingItem",JSON.stringify(itemsession))
   
}
addcad()
let additem2=[]
function addcad2(id){
//   let choseitem2=produet2.filter((itme2)=>itme2.id2===id2)
//   console.log(choseitem2)
//   additem2=[...additem2,choseitem2]
//   localStorage.setItem("adcarts2",JSON.stringify(additem2))
if(localStorage.getItem("shoppingItem")){
    itemsession=JSON.parse(localStorage.getItem("shoppingItem"));
}
let choseitem2=produet2.filter((itme2)=>itme2.id===id)
additem2=[...additem2,...choseitem2]
// itemsession.push(choseitem)
localStorage.setItem("shoppingItem",JSON.stringify(additem2))
}

drowdom()
drowdom2()




function addNumber(){
    let badge=document.querySelectorAll("#cart-body >div");
    // document.querySelector(".cart").innerHTML +='<div></div>';
    document.querySelector(".badge").classList.add("d-sm-block")
    document.querySelector(".badge").innerHTML=badge.length
}






console.log(cartItems);
 
 function cartItem() {
     if (cartItems){
    // let body = document.getElementById("cartmodal")
    // body.style.display="block"
   for(let i=0 ; i<cartItems.length ; i++){
    // cartItems.map(item=>{
    //     console.log(item)
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
    price.textContent = `${cartItems[i].price} EGP`;
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
    addNumber();
    }
   }
  } 

    

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
//     localStorage.clear("shoppingItem")
//     cartItem();
// }

var clearbtn=document.getElementById("btnClear")
clearbtn.addEventListener("click",()=>{
    localStorage.removeItem("shoppingItem")
    console.log("hallo")
   
})

cartItem();
checkSession();




