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

//link for page
	let linkPage = document.getElementsByClassName("btn-link");
		linkPage[0].href = "product/index.html";
		linkPage[1].href = "news/index.html";
		linkPage[2].href = "gameplay/index.html";
		linkPage[3].href = "tutorial/index.html";