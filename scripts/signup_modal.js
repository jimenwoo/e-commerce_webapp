let signUp = document.querySelector('.register_sign_modal_text_fields_container')
let login = document.querySelector('.login_sign_modal_text_fields_container')
let background2 = document.querySelectorAll("main, header, footer, div.top_bar")
let modal = document.querySelector('.sign_up_modal')


let signUpModal = (e) =>{
    if(e.attributes.value.value == 'login'){
        login.style.display = 'block'
        signUp.style.display = 'none'
    }
    if(e.attributes.value.value == 'register'){
        login.style.display = 'none'
        signUp.style.display = 'block'
    }

}
let showSignUpModal = () => {
    for(i = 0; i < background2.length; i++){
        background2[i].style.opacity = '0.2';
        background2[i].style.pointerEvents = 'none';
        background2[i].style.overflow = 'hidden';
    }
    document.querySelector('body').style.overflow = 'hidden'
    modal.style.display = 'block';
}

let closeSignUpModal = () => {
    for(i = 0; i < background2.length; i++){
        background2[i].style.opacity = '1';
        background2[i].style.pointerEvents = 'auto';
    }
    document.querySelector('body').style.overflow = 'scroll'
    modal.style.display = "none";

}