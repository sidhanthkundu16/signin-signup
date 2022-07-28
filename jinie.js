const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});





function savedata() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user_record = new Array();
  user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
  user_record.push({
    "username": username,
    "email": email,
    "password": password
  })
  localStorage.setItem("users", JSON.stringify(user_record));
  console.log(username, email, password);
}



function login() {
  let username = document.getElementById("username2").value;
  let password = document.getElementById("password2").value;

  let user_record = new Array();
  user_record = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
  if (user_record.some((v) => { return v.username == username && v.password == password })) {
    // window.location.href = "coffee.html";
    alert("logged in");
    // let current_user = user_records.filter((v) => { return v.email == email && v.psw == psw })[0]
    // localStorage.setItem('name', current_user.name);
    // localStorage.setItem('email', current_user.email);
  }
  else {
    alert('Login Fail');
  }

}
