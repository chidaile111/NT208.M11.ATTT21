const btn_login = document.querySelector("#btn_login")
const btn_register = document.querySelector("#btn_register")
const btn_register_form = document.querySelector(".auth-form__switch_btn")
const btn_login_form = document.querySelector(".auth-form__switch_btn")
const modal = document.querySelector("#modal")
const register_form = document.querySelector("#register_form")
const login_form = document.querySelector("#login_form")
console.log(btn_login)
btn_login.onClick = function(){
    modal.style.display = 'block'
    login_form.style.display = 'block'
    register_form.style.display = 'none'


}