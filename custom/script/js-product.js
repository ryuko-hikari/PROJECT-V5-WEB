// Dibawah ini adalah Datalist Produk pada page produk
// Stock Unit
var productText = ['Stok Unit : '];
var productAvaible = [1,2,3,4,5,6,7,8,9,10];
var productNotAvaible = [0];
var productBody =  document.getElementsByClassName('text-stok');
	// list stok GPC
	productBody[0].innerHTML = productText[0] + productAvaible[4];
	productBody[1].innerHTML = productText[0] + productAvaible[4];
	productBody[2].innerHTML = productText[0] + productAvaible[4];
	productBody[3].innerHTML = productText[0] + productAvaible[4];
	productBody[4].innerHTML = productText[0] + productAvaible[4];
	productBody[5].innerHTML = productText[0] + productAvaible[4];
	// list stok STEAM
	productBody[6].innerHTML = productText[0] + productAvaible[4];
	productBody[7].innerHTML = productText[0] + productAvaible[4];
	productBody[8].innerHTML = productText[0] + productAvaible[4];
	// list stok cloud & account game
	productBody[9].innerHTML = productText[0] + productNotAvaible[0];
	productBody[10].innerHTML = productText[0] + productNotAvaible[0];
	productBody[11].innerHTML = productText[0] + productNotAvaible[0];
	productBody[12].innerHTML = productText[0] + productAvaible[4];


// Button List Below
// Stock Unit GooglePlay Card Button
var btnGpc = document.getElementsByClassName("btn-gpc");
	// btnGpc[0].innerHTML = "STOK KOSONG";
	// btnGpc[0].style.fontSize = "23px";
	// btnGpc[1].innerHTML = "STOK KOSONG";
	// btnGpc[1].style.fontSize = "23px";
	// btnGpc[2].innerHTML = "STOK KOSONG";
	// btnGpc[2].style.fontSize = "23px";
	// btnStockGpc[3].innerHTML = "STOK KOSONG";
	// btnStockGpc[3].style.fontSize = "23px";
	// btnStockGpc[4].innerHTML = "STOK KOSONG";
	// btnStockGpc[4].style.fontSize = "23px";
	// btnStockGpc[5].innerHTML = "STOK KOSONG";
	// btnStockGpc[5].style.fontSize = "23px";
	// btnStockGpc[6].innerHTML = "STOK KOSONG";
	// btnStockGpc[6].style.fontSize = "23px";

// Stock Unit Steam Wallet Button
var btnSteam = document.getElementsByClassName("btn-steam");
	// btnSteam[0].innerHTML = "STOK KOSONG";
	// btnSteam[0].style.fontSize = "23px";
	// btnSteam[1].innerHTML = "STOK KOSONG";
	// btnSteam[1].style.fontSize = "23px";
	// btnSteam[2].innerHTML = "STOK KOSONG";
	// btnSteam[2].style.fontSize = "23px";

// Stock Unit Cloud dan Account Game Button
var btnProduktif = document.getElementsByClassName("btn-check-stok");
	btnProduktif[0].innerHTML = "STOK KOSONG";
	btnProduktif[0].style.fontSize = "23px";
	btnProduktif[1].innerHTML = "STOK KOSONG";
	btnProduktif[1].style.fontSize = "23px";
	btnProduktif[2].innerHTML = "STOK KOSONG";
	btnProduktif[2].style.fontSize = "23px";	
	// btnProduktif[3].innerHTML = "STOK KOSONG'";
	// btnProduktif[3].style.fontSize = "23px";