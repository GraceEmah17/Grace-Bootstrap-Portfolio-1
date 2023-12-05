var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=ngn",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.ngn;
    ltc.innerHTML = response.litecoin.ngn;
    eth.innerHTML = response.ethereum.ngn;
    doge.innerHTML = response.dogecoin.ngn;

});