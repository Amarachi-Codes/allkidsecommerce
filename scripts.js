function addProduct(event) {
    event.preventDefault()
    const productname = document.getElementById("productname").value.trim().toUpperCase();
    const productprice = document.getElementById("productprice").value.trim;
    const vendorname = document.getElementById("vendorname").value.trim.toLowerCase()
    const imgUrl = document.getElementById("imgUrl").value.trim.toLowerCase()

    if (productname && productprice && vendorname && imgUrl) {
        const product = {
            id: generateId(),
            pName: productname,
            pPrice: "N" + productprice,
            vName: vendorname,
            img: imgUrl
        }
        let products = JSON.parse(localStorage.getItem("products") || [])
        products.push(product)
        localStorage.setItem("products", JSON.stringify(products))
        document.getElementById("productForm").reset();
        alert("Product succesfully added")
        displayProducts(); 
    }else{
        alert("Please Enter Product details")
    }


}
function displayProducts() {
    const products = JSON.parse(localStorage.getItem("products") || []);
    const dashboard = document.getElementById("myDashboard");

    products.forEach(product => {
        
    

        const productList = document.createElement("div");
        productList.classList.add("product");

        const nameOfProduct = document.createElement("h3");
        nameOfProduct.textContent=`${product.pName}`

        const priceOfProduct = document.createElement("p")
        priceOfProduct.textContent =`${product.pPrice}`;

        const nameOfVendor = document.createElement("p");
        nameOfVendor.textContent=`${product.vName}`;

        const productImage =document.createElement("img");
        productImage.src=`img/${product.img}`

        productList.appendChild(productImage)
        productList.appendChild(nameOfProduct)
        productList.appendChild(priceOfProduct)
        productList.appendChild(nameOfVendor)
        
         dashboard.appendChild(productList) 
    })
    displayProducts()
   
}
function generateId() {
return "^"+ Math.random().toString(36).substring(2,9)
}

document.addEventListener("DOMContentLoaded", function () {
const productForm = document.getElementById("productForm");
productForm.addEventListener("submit",addProduct )
displayProducts()
})
