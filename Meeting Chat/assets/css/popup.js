const btn_register = document.querySelector("#btn_register");
const btn_login = document.querySelector("#btn_login");
const btn_login_1 = document.querySelector("#btn_login_1");
const modal = document.querySelector("#modal");
const register_form = document.querySelector("#register-form");
const login_form = document.querySelector("#login-form");
const btn_login_form = document.querySelector("#btn_login_form");
const btn_register_form = document.querySelector("#btn_register_form");
const btn_back = document.querySelectorAll(
  ".btn.btn--normal.auth-form__controls-back"
);

btn_register.onclick = function () {
  modal.style.display = "flex";
  register_form.style.display = "block";
  login_form.style.display = "none";
};

btn_login.onclick = function () {
  modal.style.display = "flex";
  register_form.style.display = "none";
  login_form.style.display = "block";
};

btn_login_1.onclick = function () {
    modal.style.display = "flex";
    register_form.style.display = "none";
    login_form.style.display = "block";
};

btn_login_form.onclick = function () {
  register_form.style.display = "none";
  login_form.style.display = "block";
};

btn_register_form.onclick = function () {
  register_form.style.display = "block";
  login_form.style.display = "none";
};

for (const element of btn_back) {
    element.onclick = function () {
      modal.style.display = "none";
      register_form.style.display = "none";
      login_form.style.display = "none";
    };
}
