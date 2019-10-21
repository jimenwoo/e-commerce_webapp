let test = document.getElementById('test')

let testJSON = JSON.parse(sessionStorage.getItem('product'))
console.log(testJSON)

test.innerHTML = testJSON.prod