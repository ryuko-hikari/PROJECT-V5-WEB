//copyright year
var yearNow = new Date();
let yearCopy = yearNow.getFullYear();
	document.getElementById("year-footer").innerHTML = "2020 - " + yearCopy;

//disable f12
// document.onkeydown = function (e) {
// 	if(e.keyCode == 123){
// 		return false;
// 	}
// }

//Alert Development
	function btnAlert(){
		alert("Masih Tahap Development >_<");
	}