// nút để add dữ liệu thông qua phương thức
var addValue = document.getElementById("btn-Control-Add");
// Đây là cách 1 để tạo table với phương thức đơn sơ và dài dòng
function cTable() {
  if (document.getElementById("input").value.trim() != "") {
    document.getElementById("ms-log").style.display = "none";
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbody");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    var td = document.createElement("td");
    var value = document.createTextNode(document.getElementById("input").value);
    table.appendChild(tbody);
    tbody.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(value);
  } else {
    document.getElementById("ms-log").style.display = "block";
  }
}
// End
// ENd

function insertTable() {
  //get data from Input
  // var name = document.getElementById("inputValue1").value;
  // var status = document.getElementById("inputValue2").value;
  // var time = document.getElementById("inputValue3").value;
  //End of Input is disappear
  var input = document.getElementById("input").value;
  // if (name.trim() == "" || status.trim() == "" || time.trim() == "") {
  //   alert("Vui lòng nhập đủ thông tin");
  // }
  if (input == "") {
    document.getElementById("ms-log").style.display = "block";
    input == "";
  } else if (input.trim() == "") {
    document.getElementById("ms-log").style.display = "block";
    document.getElementById("ms-log").innerHTML = "You are kidding Me !!!";
    input == "";
  } else if (input.length <= 5) {
    document.getElementById("ms-log").style.display = "block";
    document.getElementById("ms-log").innerHTML = "Nhập trên 5 kí tự nhé !!!";
    input == "";
  } else {
    document.getElementById("ms-log").style.display = "none";
    if (document.getElementById("table") == undefined) {
      createTable();
    }
    //get Element with ID is table
    var table = document.getElementById("table");

    // variable to create table
    //Star
    // var tr = "<th>" + name + "</th>";
    // var th = "<td>" + status + "</td>";
    // var td = "<td>" + time + "</td>";
    //End
    // innerHTML to show data
    // table.innerHTML += "<tr>" + tr + th + td + "</tr>";
    //ENd
    document.getElementById("Done").innerHTML="<option>"+"Done"+"</option>";
    table.innerHTML += "<tr>" + "<td>" + input + "</td>" + "</tr>";
    return;
  }
}

function createTable() {
  var content = "";
  var title1 = "";
  var title2 = "";
  var title3 = "";
  title1 += "<th>" + "Name" + "</th>";
  title2 += "<th>" + "Status" + "</th>";
  title3 += "<th>" + "Time" + "</th>";
  content +=
    "<table class='table table-bordered table-hover' id='table'>" +
    "<tr class='table-active'>" +
    title1 +
    title2 +
    title3 +
    "</tr>" +
    "</table>";
  document.getElementById("table-Own-Here").innerHTML = content;
}
// Event to Add Function
addValue.addEventListener("click", insertTable);
// Event to update table
function uTable() {
  var updateValue = document.getElementById("btn-Control-Update");
}
// Event to Edit table
function eTable() {
  var editValue = document.getElementById("btn-Control-Edit");
}
