document.addEventListener("DOMContentLoaded", function() { 
    var showElements = document.querySelectorAll(".filter_radio");
    for(i = 0; i < showElements.length; i++){
        showElements[i].addEventListener("click", function (event) {
            var elem = event.target;
        })
    }
});