var filterArr = [];
var static = ['nike', 'adidas', 'polo_ralph_lauren', 'skechers', 'lacoste']


function handleClick(event){
    if(event.checked){
        filterHandler(event.value, true)
    }
    else {
        filterHandler(event.value, false)
    }
}

function filterHandler(o, bool){
    if(bool == true){
        filterArr.push(o) 
    }
    else{
        filterArr.splice(filterArr.indexOf(o), 1)
    }
    filtering()
    }

function filtering(){
    //Block Displayer
    filterArr.forEach(e => {         
        let productFetch = document.querySelectorAll("div.card[name = '" + e + "']")
        for (i = 0; i < productFetch.length; i++ ){
            productFetch[i].style.display = 'block'
        }
      })

    //Makes items style display none for items that are not selected
    let arr = [];
    arr = static.filter(function(item){
        return !filterArr.includes(item)
    })
    arr.forEach(e => {         
      let productFetch = document.querySelectorAll("div.card[name = '" + e + "']")
      for (i = 0; i < productFetch.length; i++ ){
          productFetch[i].style.display = 'none'
      }
    })
}