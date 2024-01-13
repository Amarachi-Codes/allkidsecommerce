
    
function addProduct(event) {
    event.preventDefault()
    const productname = document.getElementById("productname").value.trim().toUpperCase()
    const productprice = document.getElementById("productprice").value.trim()
    const vendorname = document.getElementById("vendorname").value.trim().toLowerCase()
    const imageurl = document.getElementById("imgUrl").value.trim().toLowerCase()
   

    if (productname && productprice && vendorname && imageurl) {
        const product = {
            id: generateId(),
            pName: productname,
            price: "N" + productprice,
            vName: vendorname,
            img: imageurl,
        };
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        document.getElementById("productForm").reset();
        alert("product sucessfully added");
        displayProducts();
    } else {
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
        <img src=img/${product.img}><br>
        <p>${product.pName}</p>
        <p>${product.price}</p>
        <p>${product.vName}</p>

        `;
        card.appendChild(divtags);

    });

}
displayProducts()


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



