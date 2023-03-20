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
	document.getElementById("year-footer").innerHTML = yearCopy;

//disable f12
// document.onkeydown = function (e) {
// 	if(e.keyCode == 123){
// 		return false;
// 	}
// }


//Dibawah ini adalah Datalist Produk pada page produk
//Stock Unit GooglePlay Card
var textUnitGpc = document.getElementsByClassName("text-unit-gpc");
	textUnitGpc[0].innerHTML = "Stok Unit : kosong";
	textUnitGpc[1].innerHTML = "Stok Unit : kosong";
	textUnitGpc[2].innerHTML = "Stok Unit : kosong";
	textUnitGpc[3].innerHTML = "Stok Unit : 1 Qty";
	textUnitGpc[4].innerHTML = "Stok Unit : 1 Qty";
	textUnitGpc[5].innerHTML = "Stok Unit : 1 Qty";

//Stock Unit GooglePlay Card Button
var btnGpc = document.getElementsByClassName("btn-gpc");
	btnGpc[0].innerHTML = "STOK KOSONG";
	btnGpc[0].style.fontSize = "23px";
	btnGpc[1].innerHTML = "STOK KOSONG";
	btnGpc[1].style.fontSize = "23px";
	btnGpc[2].innerHTML = "STOK KOSONG";
	btnGpc[2].style.fontSize = "23px";
	// btnStockGpc[3].innerHTML = "STOK KOSONG";
	// btnStockGpc[3].style.fontSize = "23px";
	// btnStockGpc[4].innerHTML = "STOK KOSONG";
	// btnStockGpc[4].style.fontSize = "23px";
	// btnStockGpc[5].innerHTML = "STOK KOSONG";
	// btnStockGpc[5].style.fontSize = "23px";
	// btnStockGpc[6].innerHTML = "STOK KOSONG";
	// btnStockGpc[6].style.fontSize = "23px";


//Stock Unit Steam Wallet
var textUnitSteam = document.getElementsByClassName("text-unit-steam");
	textUnitSteam[0].innerHTML = "Stok Unit : kosong";
	textUnitSteam[1].innerHTML = "Stok Unit : kosong";
	textUnitSteam[2].innerHTML = "Stok Unit : kosong";

//Stock Unit Steam Wallet Button
var btnSteam = document.getElementsByClassName("btn-steam");
	btnSteam[0].innerHTML = "STOK KOSONG";
	btnSteam[0].style.fontSize = "23px";
	btnSteam[1].innerHTML = "STOK KOSONG";
	btnSteam[1].style.fontSize = "23px";
	btnSteam[2].innerHTML = "STOK KOSONG";
	btnSteam[2].style.fontSize = "23px";

//Stock Unit Cloud dan Account Game atau Produktivitas
var textUnitProduktif = document.getElementsByClassName("text-unit-produktif");
	textUnitProduktif[0].innerHTML = "Stok Unit : 2 Qty";
	textUnitProduktif[1].innerHTML = "Stok Unit : kosong";
	textUnitProduktif[2].innerHTML = "Stok Unit : 10 Qty";
	textUnitProduktif[3].innerHTML = "Stok Unit : 5 Qty";

//Stock Unit Cloud dan Account Game Button
var btnProduktif = document.getElementsByClassName("btn-produktif");
	btnProduktif[0].innerHTML = "STOK KOSONG";
	btnProduktif[0].style.fontSize = "23px";
	// btnProduktivitas[1].innerHTML = "STOK KOSONG";
	// btnProduktivitas[1].style.fontSize = "23px";
	// btnProduktivitas[2].innerHTML = "";
	// btnProduktivitas[2].style.fontSize = "23px";	
	// btnProduktivitas[3].innerHTML = "";
	// btnProduktivitas[3].style.fontSize = "23px";


//Alert Development for list gameplay
	function btnAlert(){
		alert("Masih Tahap Development >_<");
	}