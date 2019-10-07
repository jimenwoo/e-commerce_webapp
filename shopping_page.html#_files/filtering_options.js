var filterArr = [];
var brands = ['nike', 'adidas', 'polo_ralph_lauren', 'skechers', 'lacoste']

let handleSortClick = (e) => {
    let productFetch = document.querySelectory("div.product_card");
    console.log(productFetch)
}

let handleClick = (e) => {
    console.log(e)
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
