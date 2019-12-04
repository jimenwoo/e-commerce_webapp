let background = document.querySelectorAll("#main_container, header, footer, div.top_bar")
let modalContent = document.querySelector("#modal_content")
let shoppingCartContainer = document.querySelector('#shopping_cart_products_container')

let shoppingModalOpened = false;
let cartToggled = false;
let shoppingCartObj = []
let price;
let size;
let subTotal = 0
let totalPrice = 0;
let taxAmount = 0;
let opened = false;
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
        
//adding item to Shopping cart Side Bar & displays Modal
let addToCart = (e) =>{
    let price = '$' 
    let product_title;
    let color;

    for(i = 0; i < background.length; i++){
        background[i].style.opacity = '0.2';
        background[i].style.pointerEvents = 'none';
        background[i].style.overflow = 'hidden';
    }

    document.querySelector('body').style.overflow = 'hidden'

    product_title = e.children[1].children[0].innerText
    color = e.children[1].children[1].innerText
    price += e.children[1].children[2].attributes.value.value + '.00'
    document.getElementById("product_title").children[0].innerHTML = product_title
    document.getElementById("product_title").children[1].innerHTML = price
    document.getElementById("product_title").children[1].setAttribute('value', e.children[1].children[2].attributes.value.value )
    document.getElementById("product_title").children[2].innerHTML = color
    document.getElementById('modal_picture').src = e.children[0].src
    document.getElementById('quantity_val').value = '1'
    modalContent.style.display = "block";
    shoppingModalOpened = true;
}

//closing product Modal Screen
let closeModal = () => {
    err = document.querySelector(".sizing_error")
    for(i = 0; i < background.length; i++){
        background[i].style.opacity = '1';
        background[i].style.pointerEvents = 'auto';
    }
    document.querySelector('body').style.overflow = 'scroll'
    err.style.display = 'none';
    shoppingModalOpened = false; 
    let modal = document.querySelector('#modal_content')
    modal.style.display = 'none'
}

//setting size of product to store 
let sizeButton = (e) => {
    size = e.innerHTML
    let sizes = document.querySelectorAll('.product_size')
    for(i = 0; i <sizes.length; i++){
        sizes[i].children[0].style.boxShadow = 'none'
    }
    e.style.boxShadow = 'inset 0 0 0 1px black';
}

//submitting product to shopping cart
let submitButton = () => {
    prod = document.getElementById('product_title')
    err = document.querySelector(".sizing_error")
    e = document.getElementById('quantity_val')
    imgURL = document.getElementById('modal_picture')
       if (size == null){
           err.style.display = 'block';
       }
       else if (size.length > 0){
        shoppingCartObj.push({
            productName: prod.children[0].innerHTML,
            productPrice : prod.children[1].innerHTML,
            productValue : prod.children[1].attributes.value.value,
            productColor: prod.children[2].innerHTML,
            productQuantity: e.options[e.selectedIndex].value,
            productSize : size,
            productURL : imgURL.attributes.src.value
        })

        shoppingCart();
        err.style.display = 'block';
        err.children[0].innerHTML = "Added to Cart!"
       } 
       size = null
       closeModal()
       toggleCart()
}


//toggling shopping cart side bar
let toggleCart = () =>{
    let cartView = document.getElementById('main_container')
    let shoppingCart = document.querySelector('#shopping_cart_side_bar')

    shoppingCart.style.display = 'block'
    cartView.style.opacity = '0.2';
    cartView.style.pointerEvents = 'none';
    document.querySelector('body').style.overflow = 'hidden'
    cartToggled = true;
}

let closeCart = () => {
    let cartView = document.getElementById('main_container')
    let shoppingCart = document.querySelector('#shopping_cart_side_bar')
    shoppingCart.style.display = 'none'
    cartView.style.right = "0"
    cartView.style.opacity = '1';
    cartView.style.pointerEvents = 'auto';
    document.querySelector('body').style.overflow = 'auto'
    cartToggled= false;
}
//populates shopping cart view
let shoppingCart = () => {
    shoppingCartContainer.innerHTML = ''
    sessionStorage.clear()
    for(var i = 0; i < shoppingCartObj.length; i++){
        sessionStorage.setItem(i, JSON.stringify(shoppingCartObj[i]))
        var newProduct = document.createElement('div')
        var product = JSON.parse(sessionStorage.getItem(i))

        newProduct.innerHTML = '<div class = "shopping_cart_product">'+
        '<div class = shopping_cart_product_picture>'+
            '<div class ="deleteButton">'+
                '</div>'+
            '<img id = "shopping_cart_product_picture_image" src= "' + product.productURL +  '"' + ' alt = "">' +
        '</div>'+
        '<div class = "shopping_cart_product_details"> '+
            '<div class ="shopping_cart_product_header"> '+
                '<div id ="shopping_cart_product_title">'+
                '<div class = "shopping_cart_product_name">' + product.productName + '</div>'+
                '<div class = "shopping_cart_product_size">'  + product.productSize + '</div> ' +
                '<div class = "shopping_cart_product_color" style = "color:#6c757d">' + product.productColor + '</div>'+
        '</div>'+
        '</div>'+
    '<div class = "shopping_cart_product_bottom_bar">'+
            '<div class = "shopping_cart_product_bottom_bar_qty_text">'+
            
                'QTY:' +
            '</div>'+
            '<button class = "shopping_cart_product_remove_qty"  value ="' + i + '"onclick = "removeQtyProduct(this.value)"> - </button>'+
            '<div class = "shopping_cart_product_bottom_bar_qty">'+ product.productQuantity + '</div>'+
            '<button class = "shopping_cart_product_add_qty"  value ="' + i + '"onclick = "addQtyProduct(this.value)"> + </button>' +
            '<div class = "shopping_cart_product_bottom_bar_price">'+ product.productPrice + '</div>'+
        '</div>'+
        '<div class = "shopping_cart_remove_button_holder">' + 
        '<a href= "#" value ="' + i + '" onclick = "removeFromCart(this)" class = "remove_button"> Remove </a>' + 
        '</div>'+
            '</div>'+
    '</div>'
         shoppingCartContainer.appendChild(newProduct)
         updateShoppingCartQuantity()
         priceCalculator()
    }
    priceCalculator()
}

//calcuates total prices in shopping cart 
let priceCalculator = () => {
    let subtotal = document.querySelector('.pricing_subtotal')
    let total = document.querySelector('.pricing_total')
    let tax = document.querySelector('.pricing_tax')
    let shipping = document.querySelector('.pricing_shipping')
    let sizes = document.querySelectorAll('.product_size')
    for(i = 0; i <sizes.length; i++){
        sizes[i].children[0].style.boxShadow = 'none'
    }
    if(shoppingCartObj.length == 0){
        totalPrice = 0;
        subTotal = 0;
        taxAmount = 0;
        subtotal.innerHTML = '$' + subTotal + '.00'
        total.innerHTML = "$" + totalPrice + '.00'
        tax.innerHTML = '$' + taxAmount + '.00' 
        shipping.innerHTML = "$0.00"
    }
    else{
    for (var i = 0; i < shoppingCartObj.length; i++){
        let productTotal = parseInt(shoppingCartObj[i].productValue) * parseInt(shoppingCartObj[i].productQuantity)
        subTotal += productTotal
    }  
        taxAmount = Math.round(subTotal*0.09)
        totalPrice = subTotal + 5 + taxAmount
        tax.innerHTML = '$' + taxAmount + '.00' 
        subtotal.innerHTML = '$' + subTotal + '.00'
        total.innerHTML = "$" + totalPrice + '.00'
        shipping.innerHTML = "$" + 5 + '.00'
        subTotal = 0;
        total = 0;
    }
 }

 //updates shopping cart quantity indicator 
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

//remove item from cart
let removeFromCart = (e) => {
    shoppingCartObj.splice(e.attributes.value.value, 1)
    updateShoppingCartQuantity()
    shoppingCart()
}

//adding quantity for cart item
let addQtyProduct = (e) =>{
    let int = parseInt(shoppingCartObj[e].productQuantity)
    shoppingCartObj[e].productQuantity = int+1
    let newShoppingCartQuantity = document.querySelector('.shopping_cart_product_bottom_bar_qty')
    newShoppingCartQuantity.innerHTML = shoppingCartObj[e].productQuantity 
    shoppingCart()
}
//remove cart item
let removeQtyProduct = (e) => {
    let int = parseInt(shoppingCartObj[e].productQuantity)
    shoppingCartObj[e].productQuantity = int-1
    if(shoppingCartObj[e].productQuantity == 0 ){
        shoppingCartObj.splice(e, 1)
        shoppingCart()
    }
    else{
        let newShoppingCartQuantity = document.querySelector('.shopping_cart_product_bottom_bar_qty')
        newShoppingCartQuantity.innerHTML = shoppingCartObj[e].productQuantity 
        shoppingCart() 
    }
    updateShoppingCartQuantity()
}

 window.onload = () => {
    let cartQuantity = document.querySelector('.quantity_shopping_cart')
        if(sessionStorage.length > 0){
        cartQuantity.innerHTML = cartQuantity.length
        for(var i = 0; i < sessionStorage.length; i++){
            shoppingCartObj.push(JSON.parse(sessionStorage.getItem(i)))
            var newProduct = document.createElement('div')
            var product = JSON.parse(sessionStorage.getItem(i))
            newProduct.innerHTML = '<div class = "shopping_cart_product" value ="' +  i +  '">' + 
            '<div class = shopping_cart_product_picture>'+
                '<div class ="deleteButton">'+
                    '</div>'+
                '<img id = "shopping_cart_product_picture_image" src= "' + product.productURL +  '"' + 'alt = "">' +
            '</div>'+
            '<div class = "shopping_cart_product_details"> '+
                '<div class ="shopping_cart_product_header"> '+
                    '<div id ="shopping_cart_product_title">'+
                    '<div class = "shopping_cart_product_name">' + product.productName + '</div>'+
                    '<div class = "shopping_cart_product_size">'  + product.productSize + '</div> ' +
                    '<div class = "shopping_cart_product_color" style = "color:#6c757d">' + product.productColor + '</div>'+
            '</div>'+
            '</div>'+
        '<div class = "shopping_cart_product_bottom_bar">'+
                '<div class = "shopping_cart_product_bottom_bar_qty_text">'+
                    'QTY:' +
                '</div>'+
                '<button class = "shopping_cart_product_remove_qty"  value ="' + i + '"onclick = "removeQtyProduct(this.value)"> - </button>' +
                '<div class = "shopping_cart_product_bottom_bar_qty">'+ product.productQuantity + '</div>'+
                '<button class = "shopping_cart_product_add_qty"  value ="' + i + '"onclick = "addQtyProduct(this.value)"> + </button>' +
                '<div class = "shopping_cart_product_bottom_bar_price">'+ product.productPrice + '</div>'+
            '</div>' +
                '<div class = "shopping_cart_remove_button_holder">' + 
                '<a href= "#" value ="' + i + '" onclick = "removeFromCart(this)" class = "remove_button"> Remove </a>' + 
                '</div>'+
            '</div>'+
        '</div>'
            updateShoppingCartQuantity()
            shoppingCartContainer.appendChild(newProduct)
            priceCalculator()
        }
    }
    
}


$(document).mouseup(function(e){
    var modal = $('#modal_content');
    var cart = $('#shopping_cart_side_bar')
    var signInRegisterButton = $('')
    if(shoppingModalOpened){
        if(!modal.is(e.target) && modal.has(e.target).length === 0){
            modal.hide();
            closeModal()
        }
    }
    if(cartToggled){
        if(!cart.is(e.target) && cart.has(e.target).length === 0){
            cart.hide();
            closeCart()
        }
    }

})