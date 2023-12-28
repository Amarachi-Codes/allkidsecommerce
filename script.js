
function addProduct(event){ 
    event.preventDefault()
const productname = document.getElementById("productname").value.trim()
const productprice = document.getElementById("productprice").value.trim()
const vendorname = document.getElementById("vendorname").value.trim()
const image = document.getElementById("img").value

if(productname && productprice && vendorname && image){
    const product ={
        id:generateId(),
        pName: productname,
        price: productprice,
        vName:vendorname,
        img:image
    }
    alert("product sucessfully added")
}else{
    alert("please enter product details")
}
}
const form = document.getElementById("form")
form.addEventListener("submit", addProduct)

function generateId(){
    return "^"+ Math.random().toString(36).substring(2, 9);
}
