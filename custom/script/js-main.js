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

//link for page content in page home
	let linkPage = document.getElementsByClassName("btn-link");
		linkPage[0].href = "product/index.html";
		linkPage[1].href = "news/index.html";
		linkPage[2].href = "gameplay/index.html";
		linkPage[3].href = "tutorial/index.html";