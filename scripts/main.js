let topBar = document.querySelectorAll('.top_bar')
let navBar = document.querySelectorAll('header')
let footer = document.querySelectorAll('footer')


for (i = 0; i < topBar.length; i++){
    topBar[i].innerHTML = 
        '<div class ="top_bar">' +
        '<ul class = "top_bar_content">'+
            '<li class ="sign_up_button"> <a href="#">Sign In | Register </a> </li>'+
            '<li class ="sign_up_button"> <a href="#"> Customer Service </a> </li>'+
            '<li class ="sign_up_button">'  +
                '<img class = "currency_flag" src = "../images/social_media_icons/flag_US.svg" style = "width: 24px; height: 24px"> USD </li>'+
            '</ul>'+
        '</div>'     
}

for (i = 0; i < navBar.length; i++){
    navBar[i].innerHTML = 
       ' <div class = "nav_bar">' + 
            '<div class = "nav_items">' +
                    '<ul class="nav justify-content-center">' +
                        '<li class="nav-item"><a class="nav-link active"  style="color: #4c4c4b" href="../index.html">Home</a></li>' +
                        '<li class="nav-item"><a class="nav-link" style="color: #4c4c4b" href="../pages/shopping_page.html">Shop</a></li>' +
                        '<li class="nav-item"><a class="nav-link" style="color: #4c4c4b" href="../pages/landing_page.html">Locations</a></li> '      +    
                    '</ul> '+
            '</div>'+
            '<div class ="nav_bar_sandwich">' +
                '<div class = "hamburger_part"></div>'+
                '<div class = "hamburger_part"></div>'+
                '<div class = "hamburger_part"></div>'+
            '</div>'+
            ' <div class = "nav_title">' +
            '<image class = "logo" src = "../images/background/logo.png"></img>' + 
            '</div>' +
            '<div class = "nav_shopping_cart">' +
                '<img class = "shopping_cart" onclick = "toggleCart()" src ="../images/social_media_icons/sc.png" height="42" width="42">'+
                '<div class = "nav_shopping_cart_quantity">'+
                '<h4 class = "quantity_shopping_cart">  </h4>'+
                '</div>'+
            '</div>'+
       ' <ul class = menu_dropdown>' +
       '<li class="nav-item"><a class="nav-link active"  style="color: #4c4c4b" href="../index.html">Home</a></li>' +
       '<li class="nav-item"><a class="nav-link" style="color: #4c4c4b" href="../pages/shopping_page.html">Shop</a></li>' +
       '<li class="nav-item"><a class="nav-link" style="color: #4c4c4b" href="../pages/landing_page.html">Locations</a></li> '      +  
        '</ul>'  +
    '</div>'

}


for (i = 0; i < footer.length; i++){
    footer[i].innerHTML =
    '<div class = "footer_container">' + 
            '<div class = "email_social_container">' +
                '<div class = "content_container">' + 
               ' <div class = "about_footer"> '+
                   ' <ul class = "about_footer_section"> ' + 
                        '<h4 style="color:#4c4c4b"> About </h4>'+
                        '<a class = "footer_links" href > Careers </a>'+
                        '<a class = "footer_links" href> Stores </a>'+
                        '<a class = "footer_links" href> Manufacturing Process </a>'+
                        '<a class = "footer_links" href> International </a>'+
                        '<a class = "footer_links" href> Accessibility </a>'+
                   ' </ul> '+
                '</div>' + 
                ' <div class = "locations_footer"> '+
                   ' <ul class = "locations_footer_section"> ' + 
                        '<h4 style="color:#4c4c4b" > Locations </h4>'+
                        '<a class = "footer_links" href> Hong Kong </a>'+
                        '<a class = "footer_links" href> Brooklyn </a>'+
                        '<a class = "footer_links" href> San Francisco </a>'+
                        '<a class = "footer_links" href> San Jose </a>'+
                        '<a class = "footer_links" href> Seattle </a>'+
                   ' </ul> '+
                '</div>' + 
                ' <div class = "contact_footer"> '+
                   ' <ul class = "contact_footer_section"> ' + 
                        '<h4 style="color:#4c4c4b"> Contact Us </h4>'+
                        '<a class = "footer_links" href> +1 (111) 111-1111 </a>'+
                        '<a class = "footer_links" href> info@brooklyn.com </a>'+
                   ' </ul> '+
                '</div>' + 
                '</div>' + 
                '<div class = "email_component">'+
                   ' <h3> Sign Up to Our Mailing List </h3>' + 
                   ' Sign up to receive Brooklyn Apparel emails on new releases, sales and exclusive content!'+
                    '<div class = "email_button">'+
                          '  <input class = "email_text" name ="email" type = "email" placeholder="Enter your email address">' +
                           ' <button type="button" class="btn btn-secondary type= "submit" style = "height: 35px; margin-bottom: 5px"> Join </button> '+
                            '<div class = "social_icons"> '+
                            '<li> <img src = "../images/social_media_icons/ig.png" height="42px" width = "42px" </li>' + 
                            '<li> <img src = "../images/social_media_icons/fb.png" height="42px" width = "42px" </li>' +
                            '<li> <img src = "../images/social_media_icons/pt.png" height="42px" width = "42px" </li>' +
                            '<li> <img src = "../images/social_media_icons/sc.png" height="42px" width = "42px" </li>' +
                            '<li> <img src = "../images/social_media_icons/tw.png" height="42px" width = "42px" </li>' +
                            '<li> <img src = "../images/social_media_icons/yt.png" height="42px" width = "42px" </li>' +
                            '</div>' + 
                    '</div>' +
              '  </div> ' +
            '</div>' + 
            '<div class = "footer_bot">'+
                '<image class = "logo" style = "max-width: 75px; max-height: 75px" src = "../images/background/logo2.png"></img>' + 
                '<h2> Brooklyn Apparel</h2>'+
                '<p> High Quality Apparel for Less</p>'+
            '</div>'+
        '</div>'
}
