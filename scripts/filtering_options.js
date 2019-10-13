var filterArr = [];
var colorArr = [];
var colors = ['black', 'white', 'gray', 'red', 'blue', 'khaki']


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
        let productFetch = document.querySelectorAll("a.product_card")
        for (i = 0; i < productFetch.length; i++ ){
            productFetch[i].style.display = 'block'
        }
    }
    else{
        //Block Displayer
        filterArr.forEach(e => {         
            let productFetch = document.querySelectorAll("a.product_card[name = '" + e + "']")
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
        let productFetch = document.querySelectorAll("a.product_card[name = '" + e + "']")
        for (i = 0; i < productFetch.length; i++ ){
            productFetch[i].style.display = 'none'
        }
        })
    }
}


let handleColor = (e) => {
    if(e.checked){
        colorFilter(e.value, true)
    }
    else if (!e.checked){
        colorFilter(e.value, false)
    }
}
let colorFilter = (o, bool) => {
    if(bool){
        colorArr.push(o) 
    }
    else{
        colorArr.splice(colorArr.indexOf(o), 1)
    }
    filterColor();
    
}

let filterColor = () => {
    if (colorArr.length == 0){
        let productFetch = document.querySelectorAll("a.product_card")
        for (i = 0; i < productFetch.length; i++ ){
            productFetch[i].style.display = 'block'
        }
    }
    else{
        colorArr.forEach(e => {         
            let productFetch = document.querySelectorAll("a.product_card h6.card-subtitle.mb-2[value = '" + e + "']")       
            for (i = 0; i < productFetch.length; i++ ){
                (productFetch[i].parentNode).parentNode.style.display = 'block'
            }
        })
        let arr = [];
        arr = colors.filter(function(item){
            return !colorArr.includes(item)
        })
        arr.forEach(e => {         
        let productFetch = document.querySelectorAll("a.product_card h6.card-subtitle.mb-2[value = '" + e + "']")       
        for (i = 0; i < productFetch.length; i++ ){
            if((productFetch[i].parentNode).parentNode)
            (productFetch[i].parentNode).parentNode.style.display = 'none'
        }
        })
    }
}

