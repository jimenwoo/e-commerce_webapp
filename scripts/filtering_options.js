var colorArr = [];
var colors = ['black', 'white', 'gray', 'red', 'blue', 'khaki']

//color filter
let handleColor = (e) => {
    if(e.checked){
        colorFilter(e.value, true)
    }
    else if (!e.checked){
        colorFilter(e.value, false)
    }
}
//color filter helper function
let colorFilter = (o, bool) => {
    if(bool){
        colorArr.push(o) 
    }
    else{
        colorArr.splice(colorArr.indexOf(o), 1)
    }
    filterColor();
    
}

//update view for specific colors selected
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

