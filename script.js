
function addProduct(event){ 
    event.preventDefault()
const productname = document.getElementById("productname").value.trim()
const productprice = document.getElementById("productprice").value.trim()
const vendorname = document.getElementById("vendorname").value.trim()
const image = document.getElementById("img").value

if(productname && productprice && vendorname && image){
    alert("product sucessfully added")
}else{
    alert("please enter product details")
}
}
const form = document.getElementById("form")
form.addEventListener("submit", addProduct)
