
var storageLocalget;
// Make a Clock For site
function MakeClock() {
  setInterval(function () {
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    document.getElementById("clock").innerHTML =
      replaceTime(h) + " : " + replaceTime(m) + " : " + replaceTime(s);
  }, 1000);
}
function replaceTime(Time) {
  return Time < 10 ? "0" + Time : Time;
}
MakeClock();

// End of Clock

// Get data From Dropdown

function dropDown(status, e) {
  document.getElementsByClassName("active")[0].classList.remove("active");
  e.classList.add("active");
  document.getElementById("btn-content").innerHTML = status;
}

// End of Get data From Dropdown

// Function TO get
function makeThis() {
  var name = document.getElementById("input").value;
  var status = document.getElementById("btn-content").innerText;
  var time = document.getElementById("clock").innerText;
  var cv = {
    ten: name,
    trangthai: status,
    thoigian: time,
  };
  return cv;
}
// Create Local Storage
var dsach=[];

var checkLS=localStorage.getItem("danhsach");
        if(checkLS != null){
            dsach=[...JSON.parse(checkLS)];
        }
function localStorageData()
{
  localStorage.setItem("danhsach",JSON.stringify(dsach));
}
// Create
function createTable()
{
dsach.push(makeThis());
localStorageData();
readTable();
}
// Read
function readTable()
{
  var trData="";
  var local=JSON.parse(localStorage.getItem("danhsach"));
  
  if(local!=null)
  {
    for(var i=0;i<local.length;i++)
    {
      trData+="<tr onclick='getDetail("+i+")'>"+"<td>"+local[i].ten+"</td>"+"<td>"+local[i].trangthai+"</td>"+"<td>"+local[i].thoigian+"</td>"+"</tr>";
    }
    document.getElementById("tbody").innerHTML=trData;
  }
}
// Get Stt
function getDetail(currentIndex)
{
  debugger
  storageLocalget=currentIndex;
  document.getElementById("input").value=dsach[currentIndex].ten;
}
readTable();
function updateTable()
{
  dsach[storageLocalget]=makeThis();
  localStorageData();
  readTable();
}
// Delete
function deleteData()
{
  dsach.splice(storageLocalget,1);
  localStorageData();
  readTable();
}

