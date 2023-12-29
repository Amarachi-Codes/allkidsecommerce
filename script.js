
function addProduct(event){ 
    event.preventDefault()
const productname = document.getElementById("productname").value.trim().toUpperCase()
const productprice = document.getElementById("productprice").value.trim()
const vendorname = document.getElementById("vendorname").value.trim().toLowerCase()
const image = document.getElementById("img").value

if(productname && productprice && vendorname && image){
    const product ={
        id:generateId(),
        pName: productname,
        price: "N" + productprice,
        vName:vendorname,
        img:image
    }
  let products = JSON.parse(localStorage.getItem("products"))||[]
  products.push(product)
  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("form").reset();
    alert("product sucessfully added")
    displayProducts();
}else{
    alert("please enter product details")
}
}
const form = document.getElementById("form")
form.addEventListener("submit", addProduct);

function generateId(){
    return "^"+ Math.random().toString(36).substring(2, 9);
}

function displayProducts(){
    const card = document.getElementById("card");
    card.innerHTML="";
    const products = JSON.parse(localStorage.getItem("products"))||[]

    //create p items
    products.forEach((product) => {
        const divtags = document.createElement("div");
        
        divtags.innerHTML =`
        <img src=${product.img}<br>
        <p>${product.pName}</p>
        <p>${product.price}</p>
        <p>${product.vName}</p>

        `;
        card.appendChild(divtags);
        
    });
    
}
displayProducts()
