let background = document.querySelectorAll("main, header, footer, div.top_bar")
let modalContent = document.querySelector("#modal_content")
let shoppingCartContainer = document.querySelector('#shopping_cart_products_container')

let shoppingCartObj = []
let price;
let size;
let subTotal = 0
let cartToggled = false;
let totalPrice = 0;

let addToCart = (e) =>{
    let price = '$' 
    let product_title;
    let color;
    let picture;

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

    modalContent.style.display = "block";
}

let closeModal = () => {
    err = document.querySelector(".sizing_error")

    modalContent.style.display = "none";
    for(i = 0; i < background.length; i++){
        background[i].style.opacity = '1';
        background[i].style.pointerEvents = 'auto';
    }
    document.querySelector('body').style.overflow = 'scroll'
    err.style.display = 'none';
    
}

let sizeButton = (e) => {
    size = e.innerHTML;
}

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
}


let toggleCart = () =>{
    let cartView = document.getElementById('main_container')

    let shoppingCart = document.querySelector('#shopping_cart_side_bar')
    if(cartToggled){
        shoppingCart.style.display = 'none'
        cartView.style.right = "0"
        cartView.style.opacity = '1';
        cartView.style.pointerEvents = 'auto';
        document.querySelector('body').style.overflow = 'auto'
    }
    else if (!cartToggled){
        shoppingCart.style.display = 'block'
        cartView.style.opacity = '0.2';
        cartView.style.pointerEvents = 'none';
        document.querySelector('body').style.overflow = 'hidden'
        $("#main_container").animate({right: '275px'});
        
    

    }
    cartToggled = !cartToggled
}

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
            '<img id = "shopping_cart_product_picture_image" src= "' + product.productURL +  '"' + '>' +
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
            '<div class = "shopping_cart_product_bottom_bar_qty">'+
                'QTY:' +
            '</div>'+
            '<button> - </button>'+
            '<div class = "shopping_cart_product_bottom_bar_qty">'+ product.productQuantity + '</div>'+
            '<button> + </button>'+
            '<div class = "shopping_cart_product_bottom_bar_price">'+ product.productPrice + '</div>'+
        '</div>'+
    '</div>'+
    '</div>'
         let cartQuantity = document.querySelector('.quantity_shopping_cart')
         cartQuantity.innerHTML = shoppingCartObj.length
         shoppingCartContainer.appendChild(newProduct)
         priceCalculator()
    }
}

let priceCalculator = () => {
    for (var i = 0; i < shoppingCartObj.length; i++){
        let productTotal = parseInt(shoppingCartObj[i].productValue) * parseInt(shoppingCartObj[i].productQuantity)
        subTotal += productTotal
    }

    totalPrice = subTotal + 20 
    let subtotal = document.querySelector('.pricing_subtotal')
    subtotal.innerHTML = '$' + subTotal + '.00'
    let total = document.querySelector('.pricing_total')
    total.innerHTML = "$" + totalPrice + '.00'
    subTotal = 0;
    total = 0;
 }



 window.onload = () => {
    let cartQuantity = document.querySelector('.quantity_shopping_cart')
    console.log(sessionStorage.length)
    cartQuantity.innerHTML = sessionStorage.length

    for(var i = 0; i < sessionStorage.length; i++){
        var newProduct = document.createElement('div')
        var product = JSON.parse(sessionStorage.getItem(i))
        newProduct.innerHTML = '<div class = "shopping_cart_product">'+
        '<div class = shopping_cart_product_picture>'+
            '<div class ="deleteButton">'+
                '</div>'+
            '<img id = "shopping_cart_product_picture_image" src= "' + product.productURL +  '"' + '>' +
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
            '<div class = "shopping_cart_product_bottom_bar_qty">'+
                'QTY:' +
            '</div>'+
            '<button> - </button>'+
            '<div class = "shopping_cart_product_bottom_bar_qty">'+ product.productQuantity + '</div>'+
            '<button> + </button>'+
            '<div class = "shopping_cart_product_bottom_bar_price">'+ product.productPrice + '</div>'+
        '</div>'+
    '</div>'+
    '</div>'
         let cartQuantity = document.querySelector('.quantity_shopping_cart')
         cartQuantity.innerHTML = shoppingCartObj.length
         shoppingCartContainer.appendChild(newProduct)
    }
}
