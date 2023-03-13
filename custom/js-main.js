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
var popUp = "Masih Tahap Pengembangan";
	alert(popUp + ' ' + ver[1]);

//copyright year
var yearNow = new Date();
let yearCopy = yearNow.getFullYear();
	document.getElementById("year").innerHTML = yearCopy;

//disable f12
document.onkeydown = function (e) {
	if(e.keyCode == 123){
		return false;
	}
}