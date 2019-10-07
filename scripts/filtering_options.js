var filterArr = [];
var colorArr = [];
var brands = ['nike', 'adidas', 'polo_ralph_lauren', 'skechers', 'lacoste']
var colors = ['black', 'white', 'grey', 'red', 'blue']


let handleClick = (e) => {
    if(e.checked){
        filterHandler(e.name, true)
    }
    else{
        filterHandler(e.name, false)
    }
}
let filterHandler = (o, bool) => {
    if(bool == true){
        filterArr.push(o) 
    }
    else{
        filterArr.splice(filterArr.indexOf(o), 1)
    }
    filtering();
    
}
let filtering = () => {
    if (filterArr.length == 0){
        let productFetch = document.querySelectorAll("div.product_card")
        for (i = 0; i < productFetch.length; i++ ){
            productFetch[i].style.display = 'block'
        }
    }
    else{
        //Block Displayer
        filterArr.forEach(e => {         
            let productFetch = document.querySelectorAll("div.product_card[name = '" + e + "']")
            for (i = 0; i < productFetch.length; i++ ){
                productFetch[i].style.display = 'block'
            }
        })
        //Makes items style display none for items that are not selected
        let arr = [];
        arr = brands.filter(function(item){
            return !filterArr.includes(item)
        })
        arr.forEach(e => {         
        let productFetch = document.querySelectorAll("div.product_card[name = '" + e + "']")
        for (i = 0; i < productFetch.length; i++ ){
            productFetch[i].style.display = 'none'
        }
        })
    }
}


let handleColor = (e) => {
    if(e.checked){
        colorFilter(e.name, true)
    }
    else{
        colorFilter(e.name, false)
    }
}
let colorFilter = (o, bool) => {
    if(bool == true){
        colorArr.push(o) 
    }
    else{
        colorArr.splice(filterArr.indexOf(o), 1)
    }
    filterColor();
    
}

let filterColor = () => {
    if (colorArr.length == 0){
        let productFetch = document.querySelectorAll("div.product_card")
        for (i = 0; i < productFetch.length; i++ ){
            productFetch[i].style.display = 'block'
        }
    }
    else{
        colorArr.forEach(e => {         
            let productFetch = document.querySelectorAll("div.product_card h6.card-subtitle.mb-2[value = '" + e + "']")       
            for (i = 0; i < productFetch.length; i++ ){
                (productFetch[i].parentNode).parentNode.style.display = 'block'
            }
        })
        let arr = [];
        arr = colors.filter(function(item){
            return !colorArr.includes(item)
        })
        arr.forEach(e => {         
        let productFetch = document.querySelectorAll("div.product_card h6.card-subtitle.mb-2[value = '" + e + "']")       
        for (i = 0; i < productFetch.length; i++ ){
            console.log((productFetch[i].parentNode).parentNode)
            if((productFetch[i].parentNode).parentNode)
            (productFetch[i].parentNode).parentNode.style.display = 'none'
        }
        })
    }
}

