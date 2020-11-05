function checkUser() {
  var user = document.getElementById("user").value.trim();
  var pass = document.getElementById("pass").value.trim();
  if (user == "") {
    document.getElementById("small-user").style.display = "block";
    // user="";
  } else if (user.length <= 3) {
    alert("Nhập trên 3 kí tự !!");
    user = "";
  } else {
    document.getElementById("small-user").style.display = "none";
  }
  if (pass == "") {
    document.getElementById("small-pass").style.display = "block";
    // pass="";
  } else if (pass.length <= 6) {
    alert("Mật khẩu trên 6 kí tự");
    pass = "";
  } else {
    document.getElementById("small-pass").style.display = "none";
  }
  if (user && pass) {
    window.location.href = "/todo.html";
  }
}
document.getElementById("button").addEventListener("click", function () {
  debugger;
  checkUser();
});
