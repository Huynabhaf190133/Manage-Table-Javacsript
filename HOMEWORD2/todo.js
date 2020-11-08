
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
      trData+="<tr class='timeme' onclick='getDetail("+i+")'>"+"<td>"+local[i].ten+"</td>"+"<td>"+local[i].trangthai+"</td>"+"<td>"+local[i].thoigian+"</td>"+"</tr>";
    }
    document.getElementById("tbody").innerHTML=trData;
  }
  
}
// Expried Data 5 seconds
function Expired()
{
  setInterval(
    function()
    {
            var ele=document.getElementsByClassName("timeme");
            for (var i = 0; i < ele.length; i++) 
            {
              ele[i].style.background="red";
            }
    }
    ,10000)
}
Expired();

// Get Stt
function getDetail(currentIndex)
{
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



































var data = {
  "todo": [
    {
      "name": "mot",
      "time": "14:04:00"
    },
    {
      "name": "hai",
      "time": "17:30:00",
    },
	]
};


// function render(){
// 	//Create date variable
//   var today = new Date();
//   //Get current date time
//   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//   var dateTime = Date.parse(date+' '+time);
//   let i = 1;
//   data['todo'].forEach(function(dt){
//     let timer = Date.parse(date + " " + dt.time);
  
// 			document.getElementById('todo-list').innerHTML += '<div id="' +i+ '">' + i +' = '+ dt.name + '</div>';
//     if((dateTime - timer)/1000/60 > 10){
//     	document.getElementById(i).style.color = "red";
//     }
// 		i++;  	
//   });
// }

// render();