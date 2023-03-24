//dibawah ini adalah code untuk seluruh page
var ver = ["Ini adalah versi", 5];
console.log(ver[0]  + ' ' + ver[1]);

class Waktu{
	constructor(){
	this.timeZone = new Date();
	this.message = "This Time Now";
	}
}
var result = new Waktu();
console.log(result.timeZone + result.message);

//pop up
// var popUp = "Masih Tahap Pengembangan";
// 	alert(popUp + ' ' + ver[1]);

//copyright year
var yearNow = new Date();
let yearCopy = yearNow.getFullYear();
	document.getElementById("year-footer").innerHTML = "2020 - " + yearCopy;

//disable f12
document.onkeydown = function (e) {
	if(e.keyCode == 123){
		return false;
	}
}

//Alert Development for list gameplay
	function btnAlert(){
		alert("Masih Tahap Development >_<");
	}
//kalendar gambar khusus halaman home
	var imgCalendarHome = document.createElement("img");
		imgCalendarHome.setAttribute("src", "Assets/kalendar/maret.png");
		imgCalendarHome.setAttribute("width", "250");
		imgCalendarHome.setAttribute("heiht", "120");
		imgCalendarHome.setAttribute("alt", "Ryuko Network Center - Calendar");
		imgCalendarHome.setAttribute("title", "Ryuko Network Center - Calendar");
		document.querySelector('.calendarImgHome').appendChild(imgCalendarHome);