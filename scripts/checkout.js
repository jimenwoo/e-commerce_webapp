let opened = false
document.querySelector('.nav_bar_sandwich')
        .addEventListener('click', function (event) {
            let dropdownMenu = document.querySelector('.menu_dropdown')
            if(opened){
                dropdownMenu.style.display = "none"
                opened = false;
            }
            else{
                dropdownMenu.style.display = "block";
                opened = true;
            }
        });


let shoppingCartObj = []
let subTotal = 0
let totalPrice = 0 
let checkoutContainer = document.querySelector('.checkout_products_side_container')

window.onload = () => {
    let cartQuantity = document.querySelector('.quantity_shopping_cart')
    let checkoutItemCount = document.querySelector('.qty_items')
        if(sessionStorage.length > 0){
        checkoutItemCount.innerHTML = sessionStorage.length + ' Items'
        cartQuantity.innerHTML = cartQuantity.length
        for(var i = 0; i < sessionStorage.length; i++){
            shoppingCartObj.push(JSON.parse(sessionStorage.getItem(i)))
            var newProduct = document.createElement('div')
            var product = JSON.parse(sessionStorage.getItem(i))
            let price = '$' + product.productValue * product.productQuantity + '.00'
            newProduct.innerHTML = 
                '<div class = "checkout_product_card">'+
                '<div class = "checkout_product_img_description">'+
                    '<div class = "checkout_product_img_container">'+
                        '<img id = "checkout_product_image" src="' + product.productURL + '">'+
                    '</div>'+
                    '<div class = "checkout_product_description">'+
                        '<p class = "product_description_title">' +
                            product.productName +
                        '</p>'+
                        '<p class = "product_description_size">'+
                            product.productSize +
                        '</p>'+
                        '<p class = "product_description_color">'+
                            product.productColor +
                        '</p>'+
                        '<a href= "#"class = remove_button> Remove </a>'+
                    '</div>'+
                '</div>'+
                '<div class = "checkout_product_price">'+
                    '<p class = "checkout_product_price_column">' + price  + '</p>'+
                '</div>'+
                '<div class = "checkout_product_qty">'+
                    '<p class = "checkout_product_qty_column">' + product.productQuantity + '</p>'+
                '</div>'+
            '</div>'
            
            updateShoppingCartQuantity()
            checkoutContainer.appendChild(newProduct)
            priceCalculator()
        }
    }
}

let updateShoppingCartQuantity = () =>{
    let cartQuantity = document.querySelector('.quantity_shopping_cart')
    if(shoppingCartObj.length == 0 ){
        cartQuantity.innerHTML = ''
    }
    else{
        cartQuantity.innerHTML = shoppingCartObj.length
    }
}

let removeFromCart = (e) => {
    shoppingCartObj.splice(e, 1)
    updateShoppingCartQuantity()
    shoppingCart()
}


let shoppingCart = () =>{
    let cartQuantity = document.querySelector('.quantity_shopping_cart')
    let checkoutItemCount = document.querySelector('.qty_items')
        if(sessionStorage.length > 0){
        checkoutItemCount.innerHTML = sessionStorage.length + ' Items'
        cartQuantity.innerHTML = cartQuantity.length
        for(var i = 0; i < sessionStorage.length; i++){
            shoppingCartObj.push(JSON.parse(sessionStorage.getItem(i)))
            var newProduct = document.createElement('div')
            var product = JSON.parse(sessionStorage.getItem(i))
            let price = '$' + product.productValue * product.productQuantity + '.00'
            newProduct.innerHTML = 
                '<div class = "checkout_product_card">'+
                '<div class = "checkout_product_img_description">'+
                    '<div class = "checkout_product_img_container">'+
                        '<img id = "checkout_product_image" src="' + product.productURL + '">'+
                    '</div>'+
                    '<div class = "checkout_product_description">'+
                        '<p class = "product_description_title">' +
                            product.productName +
                        '</p>'+
                        '<p class = "product_description_size">'+
                            product.productSize +
                        '</p>'+
                        '<p class = "product_description_color">'+
                            product.productColor +
                        '</p>'+
                        '<a href= "#"  onclick = "removeFromCart(this)" class = remove_button> Remove </a>' + 
                        '</div>'+
                '</div>'+
                '<div class = "checkout_product_price">'+
                    '<p class = "checkout_product_price_column">' + price  + '</p>'+
                '</div>'+
                '<div class = "checkout_product_qty">'+
                    '<p class = "checkout_product_qty_column">' + product.productQuantity + '</p>'+
                '</div>'+
            '</div>'
            
            updateShoppingCartQuantity()
            checkoutContainer.appendChild(newProduct)
            priceCalculator()
        }
    }
}

let priceCalculator = () => {
    let subtotal = document.querySelector('.checkout_subtotal_val')
    let total = document.querySelector('.checkout_total_number_val')

    if(shoppingCartObj.length == 0){
        totalPrice = 0;
        subTotal = 0;
        subtotal.innerHTML = '$' + subTotal + '.00'
        total.innerHTML = "$" + totalPrice + '.00'
    }
    else{
    for (var i = 0; i < shoppingCartObj.length; i++){
        let productTotal = parseInt(shoppingCartObj[i].productValue) * parseInt(shoppingCartObj[i].productQuantity)
        subTotal += productTotal
    }  
        totalPrice = subTotal + 20 
        subtotal.innerHTML = '$' + subTotal + '.00'
        total.innerHTML = "$" + totalPrice + '.00'
        subTotal = 0;
        total = 0;
    }
 }