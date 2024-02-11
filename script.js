
const addCartItem = [];
function addProduct(event) {
    event.preventDefault()
    const productname = document.getElementById("productname").value.trim().toUpperCase()
    const productprice = document.getElementById("productprice").value.trim()
    const vendorname = document.getElementById("vendorname").value.trim().toLowerCase()
    const imageurl = document.getElementById("imgUrl").value.trim().toLowerCase()
    const discount= document.getElementById("discount").value.trim()
    const category = document.getElementById("category").value.trim()
    if (productname && productprice && vendorname && imageurl && category === "amazing deals online") {
        const product = {
            id: generateId(),
            pName: productname,
            price: productprice,
            vName: vendorname,
            img: imageurl,
            dis: discount,
        };
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        document.getElementById("productForm").reset();
        alert("product sucessfully added");
        displayProducts();
    } else if(productname && productprice && vendorname && imageurl && category === "new arivals"){
        const product = {
            id: generateId(),
            pName: productname,
            price: productprice,
            vName: vendorname,
            img: imageurl,
            dis: discount,
        };
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        document.getElementById("productForm").reset();
        alert("product sucessfully added");
        displayNewArrival();
        // console.log(category);
    }else {
        alert("please enter product details");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("productForm");
   
    console.log(form);
    form.addEventListener("submit", addProduct);
    displayProducts();

    // const userForm = document.getElementById("user_form");
    // userForm.addEventListener("submit", (event) => {
    //     event.preventDefault();
    //     validateForm()
    // });
});



function generateId() {
    return "^" + Math.random().toString(36).substring(2, 9);
}




function displayProducts() {
    const card = document.getElementById("card");
    card.innerHTML = "";
    const products = JSON.parse(localStorage.getItem("products")) || [];

    //create p items
    products.forEach((product) => {
        const divtags = document.createElement("div");
        divtags.classList.add("item");
        

        divtags.innerHTML = `
        <div class = "dis">
        <span>${product.dis}%</span>
        <br><span>off</span>
        </div>
        <img src=img/${product.img} class="myimg"><br>
        <p class="productSpecify">${product.pName}</p>
        <p class="productSpecify"><span>&#8358</span>${product.price}</p>
        <p class="productSpecify"><span class="seller">Sold by </span>${product.vName}</p>
        <button class="cartbtn" onclick="cart('${product.id}')"><span class="material-symbols-outlined productSpecify" >shopping_cart</span></button>

        `;
        card.appendChild(divtags);

    });

}
displayProducts()


function displayNewArrival() {
    const newcard = document.getElementById("newcard");
    newcard.innerHTML = "";
    const products = JSON.parse(localStorage.getItem("products")) || [];

    //create p items
    products.forEach((product) => {
        const newcardtags = document.createElement("div");
        newcardtags.classList.add("item");
        

        newcardtags.innerHTML = `
        <div class = "dis">
        <span>${product.dis}%</span>
        <br><span>off</span>
        </div>
        <img src=img/${product.img} class="myimg"><br>
        <p class="productSpecify">${product.pName}</p>
        <p class="productSpecify"><span>&#8358</span>${product.price}</p>
        <p class="productSpecify"><span class="seller">Sold by </span>${product.vName}</p>
        <button class="cartbtn" onclick="cart('${product.id}')"><span class="material-symbols-outlined productSpecify" >shopping_cart</span></button>

        `;
        newcard.appendChild(newcardtags);

    });

}
displayNewArrival()

function cart(productId){
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find((product)=>product.id === productId);
    if(product){
        const isProductInCart=addCartItem.some((cartItem)=> cartItem.id === product.id);
        if(!isProductInCart){
            addCartItem.push(product);
            // console.log(addCartItem);
            showCart();
        }
    }
}

function showCart(){
    let mycart = document.getElementById("mycart");
     mycart.textContent = "";
    addCartItem.forEach((cart)=>{
        let li = document.createElement("li");
        li.textContent = `${cart.img}-${cart.pName}-${cart.price}-${cart.dis}`;
        mycart.appendChild(li);
        // console.log(mycart);
    });
}
console.log(showCart());
showCart();
// login validation
// document.addEventListener("DOMContentLoaded", () => {
//     const userForm = document.getElementById("user_form");
//     userForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         validateForm()
//     });
// });

// function validateForm() {
//     let isValid = true;
//     if (!validateUsername()) {
//         isValid = false
//     }
//     if (!validatePassword()) {
//         isValid = false
//     }
//     if (isValid) {
//         alert("form successfully submitted")
//         username.value="";
//         password.value="";
//     }
// }


// function validateUsername() {
//     const username = document.getElementById("username").value.trim();
//     const username_error = document.getElementById("username_error")
//     if (username === "") {
//         username_error.textContent = "Username cannot be empty "
//         return false
//     } else {
//         username_error.textContent = ""
//         return true
//     }

// }

// function validatePassword() {
//     const password = document.getElementById("password").value;
//     const password_error = document.getElementById("password_error");
//     if (password.length < 5) {
//         password_error.textContent = "Password length must be greater than 5 characters"
//         return false
//     } else {
//         password_error.textContent = ""
//         return true
//     }

// }



