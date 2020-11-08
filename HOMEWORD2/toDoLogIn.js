function checkUser() {
  // get data from input to process data
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;
  if (user == "") {
    document.getElementById("small-user").style.display = "block";
    document.getElementById("small-user").innerHTML = "Vui lòng nhập tài khoản !!";
  } else if (user.length <= 3) {
    // Show error and change text become new error !!
    document.getElementById("small-user").style.display = "block";
    document.getElementById("small-user").innerHTML = "Nhập trên 3 kí tự !!";
  }
  else if(user.trim()=="")
  {
    document.getElementById("small-user").style.display = "block";
    document.getElementById("small-user").innerHTML = "You are kidding Me !!";

  } 
  else {
    document.getElementById("small-user").style.display = "none";
  }
  if (pass == "") {
    document.getElementById("small-pass").style.display = "block";
    document.getElementById("small-pass").innerHTML ="Vui lòng nhập mật khẩu !!"
  }
  else if(pass.trim()=="")
  {
    document.getElementById("small-pass").style.display = "block";
    document.getElementById("small-pass").innerHTML =
      "You are kidding Me !!";
  } 
  else if (pass.length <= 6) {
    document.getElementById("small-pass").style.display = "block";
    document.getElementById("small-pass").innerHTML =
      "Mật khẩu phải trên 6 kí tự";
  } else {
    document.getElementById("small-pass").style.display = "none";
  }
  if (user && pass) {
    window.location.href = "./todo.html";
  }
}
document.getElementById("button").addEventListener("click", function () {
  debugger;
  checkUser();
});
