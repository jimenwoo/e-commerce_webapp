let background = document.querySelectorAll("main, header, footer, div.top_bar")
let modalContent = document.querySelector("#modal_content")

let shoppingCart = {

}

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
    document.getElementById("product_title").children[2].innerHTML = color

    document.getElementById('modal_picture').src = e.children[0].src

    modalContent.style.display = "block";
}

let closeModal = () => {
    modalContent.style.display = "none";
    for(i = 0; i < background.length; i++){
        background[i].style.opacity = '1';
        background[i].style.pointerEvents = 'auto';
    }
    document.querySelector('body').style.overflow = 'scroll'

}

let sizeButton = (e) => {
    console.log(e.innerHTML)
}
