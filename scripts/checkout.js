let shoppingCartObj = []
let subTotalPrice = 0
let totalPrice = 0;
let taxAmount = 0;
let totalQuantity = 0;
let checkoutContainer = document.querySelector('.checkout_products_side_container')
window.onload = () => {
    let checkoutItemCount = document.querySelector('.qty_items')
        if(sessionStorage.length > 0){
            for(var i = 0; i < sessionStorage.length; i++){
            shoppingCartObj.push(JSON.parse(sessionStorage.getItem(i)))
            totalQuantity += parseInt(shoppingCartObj[i].productQuantity)
            var newProduct = document.createElement('div')
            var product = JSON.parse(sessionStorage.getItem(i))
            let price = '$' + product.productValue * product.productQuantity + '.00'
            newProduct.innerHTML = 
                '<div class = "checkout_product_card">'+
                '<div class = "checkout_product_img_description">'+
                    '<div class = "checkout_product_img_container">'+
                        '<img id = "checkout_product_image" src="' + product.productURL + '" alt = "" >'+
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
                        '<a value ="' + i + '"href= "#" onclick ="removeFromCheckoutCart(this)" class = remove_button> Remove </a>'+
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
        checkoutItemCount.innerHTML = totalQuantity + ' Items'
    }
}

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

let updateShoppingCartQuantity = () =>{
    let totalQuantity= 0;
    let cartQuantity = document.querySelector('.quantity_shopping_cart')
    if(shoppingCartObj.length == 0 ){
        cartQuantity.innerHTML = ''
    }
    else{
        for(var i = 0; i <shoppingCartObj.length; i++){
            totalQuantity += parseInt(shoppingCartObj[i].productQuantity)
        }
        cartQuantity.innerHTML = totalQuantity
    }
}

let removeFromCheckoutCart = (e) => {
    shoppingCartObj.splice(e.attributes.value.value, 1)
    updateShoppingCartQuantity()
    shoppingCart()
}

let shoppingCart = () =>{
    checkoutContainer.innerHTML = ''
    sessionStorage.clear()
        for(var i = 0; i < shoppingCartObj.length; i++){
            sessionStorage.setItem(i, JSON.stringify(shoppingCartObj[i]))
            var newProduct = document.createElement('div')
            var product = JSON.parse(sessionStorage.getItem(i))
            let price = '$' + product.productValue * product.productQuantity + '.00'
            newProduct.innerHTML = 
                '<div class = "checkout_product_card">'+
                '<div class = "checkout_product_img_description">'+
                    '<div class = "checkout_product_img_container">'+
                        '<img id = "checkout_product_image" src="' + product.productURL + '" alt = "">'+
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
                        '<a value ="' + i + '"href= "#" onclick ="removeFromCheckoutCart(this)" class = remove_button> Remove </a>'+
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
        let checkoutItemCount = document.querySelector('.qty_items')
        checkoutItemCount.innerHTML = sessionStorage.length + ' Items'
        updateShoppingCartQuantity()
        priceCalculator()
}
    

let priceCalculator = () => {
    let subtotal = document.querySelector('.checkout_subtotal_val')
    let total = document.querySelector('.checkout_total_number_val')
    let tax = document.querySelector('.checkout_tax_val')
    let shipping = document.querySelector('.checkout_shipping_val')
    if(shoppingCartObj.length == 0){
        totalPrice = 0;
        subTotalPrice = 0;
        taxAmount = 0;
        subtotal.innerHTML = '$' + subTotalPrice + '.00'
        total.innerHTML = "$" + totalPrice + '.00'
        tax.innerHTML = '$' + taxAmount + '.00' 
        shipping.innerHTML = "$0.00"
    }
    else{
    for (var i = 0; i < shoppingCartObj.length; i++){
        let productTotal = parseInt(shoppingCartObj[i].productValue) * parseInt(shoppingCartObj[i].productQuantity)
        subTotalPrice += productTotal
    }  
        taxAmount = Math.round(subTotalPrice*0.09)
        totalPrice = subTotalPrice + 5 + taxAmount
        tax.innerHTML = '$' + taxAmount + '.00' 
        subtotal.innerHTML = '$' + subTotalPrice + '.00'
        total.innerHTML = "$" + totalPrice + '.00'
        shipping.innerHTML = "$" + 5 + '.00'
        subTotalPrice = 0;
        total = 0;
    }
 }
