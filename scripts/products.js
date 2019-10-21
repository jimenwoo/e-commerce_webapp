let topBar = document.querySelectorAll('.top_bar')
let navBar = document.querySelectorAll('header')
let footer = document.querySelectorAll('footer')


for (i = 0; i < topBar.length; i++){
    topBar[i].innerHTML = 
        '<div class ="top_bar">' +
        '<ul class = "top_bar_content">'+
            '<li class ="sign_up_button"> Sign In | Register </li>'+
            '<li class ="sign_up_button"> Customer Service </li>'+
            '<li class ="sign_up_button">'  +
                '<img class = "currency_flag" src = "../../images/social_media_icons/flag_US.svg" style = "width: 24px; height: 24px"> USD </li>'+
            '</ul>'+
        '</div>'     
}

for (i = 0; i < navBar.length; i++){
    navBar[i].innerHTML = 
       ' <div class = "nav_bar">' + 
            '<div class = "nav_items">' +
                    '<ul class="nav justify-content-center">' +
                        '<li class="nav-item"><a class="nav-link active"  style="color: #4c4c4b" href="../home_page.html">Home</a></li>' +
                        '<li class="nav-item"><a class="nav-link" style="color: #4c4c4b" href="../shopping_page.html">Shop</a></li>' +
                        '<li class="nav-item"><a class="nav-link" style="color: #4c4c4b" href="../landing_page.html">Locations</a></li> '      +    
                    '</ul> '+
            '</div>'+
            ' <div class = "nav_title">' +
            '<image class = "logo" src = "../../images/background/logo.png"></img>' + 
            '</div>'+
            '<div class = "nav_shopping_cart">' +
                '<img class = "shopping_cart" onclick = "showCart()" src ="../../images/social_media_icons/sc.png" height="42" width="42">'+
            '</div>'+
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
                        '<li> Careers </li>'+
                        '<li> Stores </li>'+
                        '<li> Manufacturing Process </li>'+
                        '<li> International </li>'+
                        '<li> Accessibility </li>'+
                   ' </ul> '+
                '</div>' + 
                ' <div class = "locations_footer"> '+
                   ' <ul class = "locations_footer_section"> ' + 
                        '<h4 style="color:#4c4c4b" > Locations </h4>'+
                        '<li> Hong Kong </li>'+
                        '<li> Brooklyn </li>'+
                        '<li> San Francisco </li>'+
                        '<li> San Jose </li>'+
                        '<li> Seattle </li>'+
                   ' </ul> '+
                '</div>' + 
                ' <div class = "contact_footer"> '+
                   ' <ul class = "contact_footer_section"> ' + 
                        '<h4 style="color:#4c4c4b"> Contact Us </h4>'+
                        '<li> +1 (111) 111-1111 </li>'+
                        '<li> info@brooklyn.com </li>'+
                   ' </ul> '+
                '</div>' + 
                '</div>' + 
                '<div class = "email_component">'+
                   ' <h3> Sign Up to Our Mailing List </h3>' + 
                   ' Sign up to receive Brooklyn Apparel emails on new releases, sales and exclusive content!'+
                    '<div class = "email_button">'+
                          '  <input class = "email_text" name ="email" type = "email" placeholder="Enter your email address">' +
                           ' <button class = "email_submit_button" type= "submit"> Join </button> '+
                            '<div class = "social_icons"> '+
                            '<li> <img src = "../../images/social_media_icons/ig.png" height="42px" width = "42px" </li>' + 
                            '<li> <img src = "../../images/social_media_icons/fb.png" height="42px" width = "42px" </li>' +
                            '<li> <img src = "../../images/social_media_icons/pt.png" height="42px" width = "42px" </li>' +
                            '<li> <img src = "../../images/social_media_icons/sc.png" height="42px" width = "42px" </li>' +
                            '<li> <img src = "../../images/social_media_icons/tw.png" height="42px" width = "42px" </li>' +
                            '<li> <img src = "../../images/social_media_icons/yt.png" height="42px" width = "42px" </li>' +
                            '</div>' + 
                    '</div>' +
              '  </div> ' +
            '</div>' + 
            '<div class = "footer_bot">'+
                '<image class = "logo" style = "max-width: 75px; max-height: 75px" src = "../../images/background/logo2.png"></img>' + 
                '<h2> Brooklyn Apparel</h2>'+
                '<p> High Quality Apparel for Less</p>'+
            '</div>'+
        '</div>'
}