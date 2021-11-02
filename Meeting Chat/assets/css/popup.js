const btn_login = querySelector(".header__navbar-item .header__navbar-item--strong .header__navbar-item--separate")
const btn_register = querySelector(".header__navbar-item .header__navbar-item--strong")
const btn_register_form = querySelector(".auth-form__switch_btn")
const btn_login_form = querySelector(".auth-form__switch_btn")
const modal = querySelector(".modal")
const register_form = querySelector("#register_form")
const login_form = querySelector("#login_form")

btn_login.onClick = function(){
    modal.style.display = block
    login_form.style.display = block
    

}